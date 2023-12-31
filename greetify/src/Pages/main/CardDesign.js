
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useRef, useState } from 'react';

import Slider from '../Slider';
import Stepbar from '../components/StepBar';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { cardDesign, season } from '../../reducer';
import Btn from '../components/Btn';


export default function CardDesign() {

  const BoardingView = styled.div`
  width: 100%;
  
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`

const dispatch = useDispatch();
const checks = useSelector((state) => {
  return state.select.value.season;
})
console.log('design checks:', checks)

// const index = useRef(0);
let index = 0;
const getInd = (ind) => {
  console.log('ind:',ind);
  index=ind;
  // dispatch(cardDesign({cardDesign: ind}));
}

  return (
    <BoardingView>

      <Stepbar len="111px"/>

  
        <Title
        title1="카드 디자인을 골라주세요"
        sub1="카드 디자인을 골라주시면 아래 샘플 카드처럼"
        sub2="글귀가 배치되어 받아 보실 수 있으세요"
        />


      <Slider getindex={getInd} style={{heigth: '50vh', margin: '10% 0'}} 
      imgURL1={`/assets/card/MAX/${checks}1.png`} imgURL2={`/assets/card/MAX/${checks}2.png`}
      />
    

      <div style={{display: 'flex', flexDirection: 'row', width: '100%', }}>
        <Btn text="이전" link='/main/season' 
        func={() => {dispatch(season('none')); alert('시즌 선택 정보가 삭제됩니다 !!')}} length="42%" size='2'/>
        <Btn text="다음" link='/main/emotion' 
        func={() => {console.log('index:', index); dispatch(cardDesign(index + 1));}} length="42%" size='2'/>
        
      </div>

      </BoardingView>
  )
}
