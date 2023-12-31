import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { cardDesign, emotion } from '../../reducer'
import Btn from '../components/Btn'
import Swal from 'sweetalert2'
import Option, { BoardingView, OptionBox, OptionRow } from '../components/DivStyles'

export default function Home() {

  const [isSelected, setIsSelected] = useState([]);
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const checks = useSelector((state) => {return state.select.value})
  // console.log('emotion checks:', checks);
  var word = [];

  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.emotion); 
        
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const onClick = (id) => {
    if(isSelected.includes(id)) {
      setIsSelected(isSelected.filter(isSelected => isSelected !== id));
    }
    else if (isSelected.length == 2) {
      
      alert('최대 2개만 선택가능합니당')
    }
    else {
      setIsSelected([...isSelected, id]);
    }
  }

  return (
    <BoardingView>

      <Stepbar len='111px'/>

      <Title
      title1="녹이고 싶은 감성을"
      title2="선택해주세요"
      sub1="녹이고 싶은 감성을 1~2가지 선택해주세요"
      />

      <OptionBox style={{width: '90%', minHeight: '50vh'}}>
        {datas.map((data, ind) => {
          word = [...word, data];
          return (
            <>
            { (ind % 3) === 2 ? 
            <OptionRow key={ind}>
              {word.map(data => {
                const select = isSelected.includes(data.eng);
                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    {select ? 
                      <>
                      <img src={`/assets/emotion/active/icon_${data.word}_V.svg`} style={{
                        position: 'absolute',
                        zIndex: 2
                      }}/>
                      <img src='/assets/iconBox.png' style={{
                        position: 'absolute',
                        zIndex: 1
                      }}/>
                      
                      </>
                      
                      :
                      <img src={`/assets/emotion/noActive/icon_${data.word}.png`} style={{
                        position: 'absolute',
                        zIndex: 1
                      }}/>
                      }
                    <p style={{marginTop: '150%'}}>{data.word}</p>
                  </Option>      
                  );
                })}
                {word = []}
                </OptionRow> :
                <>
                
              { ind === datas.length-1 ? 
              <OptionRow>
              {word.map(data => {
                const select = isSelected.includes(data.eng);

                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    {select ? 
                      <>
                      <img src={`/assets/emotion/active/icon_${data.word}_V.svg`} style={{
                        position: 'absolute',
                        zIndex: 2
                      }}/>
                      <img src='/assets/iconBox.png' style={{
                        position: 'absolute',
                        zIndex: 1
                      }}/>
                      
                      </>
                      
                      :
                      <img src={`/assets/emotion/noActive/icon_${data.word}.png`} style={{
                        position: 'absolute',
                        zIndex: 1
                      }}/>
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


      <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: '10%'}}>
      <Btn text="이전" link='/main/design' 
        func={() => {dispatch(cardDesign(0)); alert('카드 디자인 선택 정보가 없어집니다 !!')}} length="42%" size='2'/>

        <Btn text="다음" link={isSelected.length === 0 ? "": '/main/age'} func={() => {
          console.log(isSelected.length);
          if (isSelected.length !== 0) {
          dispatch(emotion(isSelected))
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