import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { dialect, ments } from '../../reducer';
import Btn from '../components/Btn'
import Swal from 'sweetalert2'
import Option, { BoardingView, OptionBox, OptionRow } from '../components/DivStyles'

export default function Speech() {

  const [isSelected, setIsSelected] = useState(0);
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const selects = useSelector((state) => {return state.select.value});
  var word = [];


  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.speech); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const onClick = (id) => {
    setIsSelected(id);
  }
  return (
    <BoardingView>

      <Stepbar len='370px'/>
      
      
     <Title
     title1="어떠한 말투로"
     title2="작성해드릴까요?"
     sub1="원하시는 말투 1가지를 정해주세요"
    />

    <OptionBox style={{width: '90%', minHeight: '70vh'}}>
        {datas.map((data, ind) => {
          word = [...word, data];
          return (
            <>
            { (ind % 3) === 2 ? 
            <OptionRow key={ind}>
              {word.map(data => {
                const select = isSelected === data.eng;
                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    <img src={`/assets/speech/icon_${data.word}.png`} style={{
                      position:'absolute',
                      zIndex: 1
                    }}/>

                    {select ? 
                      <img src='/assets/iconBox.png' style={{
                        position: 'absolute',
                        zIndex: 2
                      }}/>:
                      null
                      }
                    <p style={{marginTop: '150%'}}>{data.word}</p>
                  </Option>      
                  );
                })}
                {word = []}
                </OptionRow> :
                <>
                
              { ind === datas.length-1 ? 
              <OptionRow key={ind}>
              {word.map(data => {
                const select = isSelected === data.eng;

                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    <img src={`/assets/speech/icon_${data.word}.png`} style={{
                      position:'absolute',
                      zIndex: 1
                    }}/>

                    {select ? 
                      <img src='/assets/iconBox.png' style={{
                        position: 'absolute',
                        zIndex: 2
                      }}/>:
                      null
                      }
                    <p style={{marginTop: '150%'}}>{data.word}</p>
                  </Option> 
                );
              })}
              </OptionRow>
              :
              null}

                </>
              }
              </>);
            })}
        </OptionBox>




        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>

        <Btn text="이전" link='/main/word' func={() => { dispatch(ments([])); alert('단어 정보가 없어집니다 !!')}} 
          length="42%" size='2'/>

        <Btn text="다음" link={isSelected.length === 0 ? "": '/checkcard'} func={() => {
    
          if (isSelected.length !== 0) {
          dispatch(dialect(isSelected))
          }
          else {
            Swal.fire({
              title: '오류',
              html: `
              옵션을 선택해주세요 !!`,
              imageUrl: '/assets/alert/fail.png',
              width: '330px',
            })
          }
        }} length="42%" size='2'/>

      </div>
            
            
        
    </BoardingView>
  )
}