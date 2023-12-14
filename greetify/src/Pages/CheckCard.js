import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const {Kakao} = window;

export default function CheckCard() {
  const realUrl = "localhost:3000"

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

  return (
    <div style={{
      color: 'white',
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <h1 style={{color: 'white'}}>마음 우체국</h1>

      <img src='/assets/card/생일카드_1.png' style={{
        width: '80vw',
        height:'70vh',
        borderRadius: '16px',
        margin: '3vh'
        
      }}  />
  
      <div style={{display: 'flex', flexDirection: 'row'}} id='card'>

        <Link to="/main/word">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src="assets/icons/icon_T.png" style={{
              width: '6vw',
              height: '3vh',
              margin: '2vw'
            }}/>
            <p>문구 바꾸기</p>
          </div>
          </Link>
        

        <div style={{display: 'flex', flexDirection: 'row'}} onClick={() => {}}>
          <img src="assets/icons/icon_kakao.png" style={{
            width: '6vw',
            height: '3vh',
            margin: '2vw'
          }}/>
          <p>카카오톡 발송</p>
        </div>
      </div>



      <Btn onClick={() => {}}>
            <Link to='/onboarding2' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn>



    </div>
  )
}
