import React from 'react'
import motion from '../motion03.json'
import Lottie from 'lottie-react'
import { Button } from 'react-native'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from './components/StepBar'
import Title from './components/Title'
import Btn from './components/Btn'


const BoardingView = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`


export default function Onboarding() {
  return (
    <BoardingView>
        <Stepbar len="80%"/>

        <Title
        title1="이방 저방 왔다갔다"
        title2="하지 마세요!"
        sub1="여러분의 연락처를 모아, 해당하는 사람들에게"
        sub2=" 일괄적으로 인사 카드를 보내드립니다!"
        />
        
        <Lottie animationData={motion} loop={false} style={{width: '100vw'}}/>
        <Btn text="다음" link="/home" length="90%" size='1'/>

    </BoardingView>
  )
}