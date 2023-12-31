import React, { useEffect, useState } from 'react'
import motion from '../motion01.json'
import Lottie from 'lottie-react'
import { Button } from 'react-native'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import StepBar from './components/StepBar'
import Title from './components/Title'
import Btn from './components/Btn'
import { BoardingView } from './components/DivStyles'

export default function Onboarding() {
 
  return (
    <BoardingView>
        <StepBar len="60px"/>

        <Title 
        title1="인사 돌리기 힘들다구요?"
        title2="이제는 마음 우체국과"
        title3="함께해요!"
        />

        <Lottie animationData={motion} loop={false} style={{width: '100%'}}/>
        <Btn text="다음" link='/onboarding2' length='90%' size='1'/>

    </BoardingView>
  )
}