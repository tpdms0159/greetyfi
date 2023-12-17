import Lottie from 'lottie-react';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import motion from '../motion04.json'


const SplashView = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    width: 100%;
    height: 100%;
`
export default function Splash() {
  setTimeout(() => {
    window.location.href = "/onboarding"
  },3000);
  return (
    <Lottie animationData={motion} loop={false} style={{width: '100%'}}/>
    

  )
}
