import React, { useEffect, useState } from 'react'
import motion from '../motion01.json'
import Lottie from 'lottie-react'
import { Button } from 'react-native'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StepBar from './components/StepBar'
import Title from './components/Title'

const Btn = styled.button`
  width: 90%;
  border-color: #FF67A4;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: #131212;
  font-size: 20px;
`

const BoardingView = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`

const BackImg = styled.div`
  background-image = url('assets/stepBar/emptyBar.png');
`
export default function Onboarding() {
 
  return (
    <BoardingView>
        <StepBar len="30%"/>

        <Title 
        title1="인사 돌리기 힘들다구요?"
        title2="이제는 마음 우체국과"
        title3="함께해요!"
        />

        <Lottie animationData={motion} loop={false} style={{width: '100vw'}}/>

        <Btn >
            <Link to='/onboarding2' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
        </Btn>
    </BoardingView>
  )
}