import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux';
import { age, emotion } from '../../reducer';
import Btn from '../components/Btn'
import Swal from 'sweetalert2'
import Option, { BoardingView, OptionBox, OptionRow } from '../components/DivStyles'


export default function Age() {

  const [isSelected, setIsSelected] = useState([]);
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const checks = useSelector((state) => {return state.select.value});
  // console.log('age checks: ', checks);
  var word = [];


  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.age); 
        
      })
      .catch(error => console.error('Error:', error));
  }, []);

  
  const onClick = (id) => {
    console.log('id', id);
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

      <Stepbar len='222px'/>
      
      <Title
      title1="연령을 선택해주세요"
      sub1="수신자들의 연령을 1~2가지 선택해주세요"
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
                    <img src={`/assets/age/icon_${data.word}.png`} style={{
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
              <OptionRow>
              {word.map(data => {
                const select = isSelected.includes(data.eng);

                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    <img src={`/assets/age/icon_${data.word}.png`} style={{
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



        <Btn text="이전" link='/main/emotion' func={() => { dispatch(emotion([]));
        alert('감성 선택 정보가 없어집니다 !!');}} length="40%" size='2'/>

        <Btn text="다음" link={isSelected.length === 0 ? "": '/main/word'} func={() => {
          console.log(isSelected.length);
          if (isSelected.length !== 0) {
          dispatch(age(isSelected))
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
        }} length="40%" size='2'/>

      </div>
            
            
        
    </BoardingView>
  )
}