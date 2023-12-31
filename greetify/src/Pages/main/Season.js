import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { season } from '../../reducer';
import { useDispatch, useSelector } from 'react-redux';
import { cardDesign } from '../../reducer';
import axios from 'axios'
import Btn from '../components/Btn'
import Swal from 'sweetalert2'
import Option, { BoardingView, OptionBox, OptionRow } from '../components/DivStyles'

export default function Home() {

  const [isSelected, setIsSelected] = useState("");
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch(); 
  const checks = useSelector((state) => {return state.select.value});
  console.log('seoson checks:', checks)

  var word = [];


  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.season); 
        
      })
      .catch(error => console.error('Error:', error));
  }, []);


  
  
  const onClick = (eng) => {
    console.log('eng:', eng);
    
    if (eng == undefined){
      alert("메뉴를 선택해주세요!");
    }
    else{
    console.log('eng:', eng);
    setIsSelected(eng);
    }
    
  }
  return (
    <BoardingView>

      <Stepbar len='55px'/>
    
      <Title
       title1="시즌을 선택해주세요"
       sub1="카드가 쓰일 시즌을 1가지 선택해주세요"
       />

      <OptionBox style={{width: '90%', minHeight: '50vh'}}>
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
                    <img src={`/assets/season/icon_${data.word}.png`} style={{
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
                const select = isSelected === data.eng;

                return(
                  <Option key={data.id} onClick = {() => {onClick(data.eng)}} > 
                    <img src={`/assets/season/icon_${data.word}.png`} style={{
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
        
        <Btn 
          text="다음" 
          link={isSelected.length == 0 ? "": '/main/design'} 
          length="90%" 
          func={() => {
                console.log('onClick');
                if (isSelected !== ""){
                  dispatch(season(isSelected));
                  }
                else{ 
                  Swal.fire({
                    title: '오류',
                    html: `
                    옵션을 선택해주세요 !!`,
                    imageUrl: '/assets/alert/fail.png',
                    width: '330px',
                  })}
                }} size='1'/>


        
    </BoardingView>
  )
}