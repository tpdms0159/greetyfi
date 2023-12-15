import React from 'react'
import motion from '../motion02.json'
import Lottie from 'lottie-react'
import { Button } from 'react-native'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StepBar from './components/StepBar'
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

const BackImg = styled.div`
  background-image = url('assets/stepBar/emptyBar.png');
`
export default function Onboarding() {
  return (
    <BoardingView>
        <StepBar len= "60%"/>
        
        <Title 
        title1="뭐라고 내용을 작성해야될지" 
        title2="매번 고민 되시죠?"
        sub1="시즌, 감성, 연령, 단어, 말투를 설정해주시면"
        sub2="재치있는 내용으로 알아서 작성해줘요"
        />

        <Lottie animationData={motion} loop={true} style={{minWidth: '100vw'}}/>

        <Btn text="다음" link='/onboarding3' length='90%' size='1'/>
    </BoardingView>
  )
}