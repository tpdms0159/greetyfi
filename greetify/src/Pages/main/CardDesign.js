
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useRef, useState } from 'react';

import Slider from '../Slider';
import Stepbar from '../components/StepBar';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { cardDesign } from '../../reducer';


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
const Btn = styled.button`
  width: 100%;
  height: 6vh;
  border-color: #FF67A4;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: #131212;
  font-size: 20px;

  margin:5vh 3vw;
`
const dispatch = useDispatch();
const checks = useSelector((state) => {
  return state.select.value;
})
console.log('design checks:', checks)

const index = useRef(0);
const getInd = (ind) => {
  console.log(ind);
  index.current=ind;
  // dispatch(cardDesign({cardDesign: ind}));
}

  return (
    <BoardingView>

      <Stepbar len="30%"/>

  
        <Title
        title1="카드 디자인을 골라주세요"
        sub1="카드 디자인을 골라주시면 아래 샘플 카드처럼"
        sub2="글귀가 배치되어 받아 보실 수 있으세요"
        />

      <Slider getindex={getInd} style={{heigth: '50vh'}}/>

      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Btn onClick={() => {console.log(index)}}>
        <Link to='/main/season' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {
        dispatch(cardDesign(index))
      }}>
        <Link to='/main/emotion' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn>
      </div>

      </BoardingView>
  )
}
