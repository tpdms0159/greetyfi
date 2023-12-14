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

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('dfef866b8e3f9495330216a668763521');
    console.log(Kakao.isInitialized());
  })
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
        

        <div style={{display: 'flex', flexDirection: 'row'}} onClick={() => {
          Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: '오늘의 디저트',
                description: '아메리카노, 빵, 케익',
                imageUrl:
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
                link: {
                    mobileWebUrl: realUrl,
                },
            },
            buttons: [
                {
                    title: '나도 테스트 하러가기',
                    link: {
                    mobileWebUrl: realUrl,
                    },
                },
                ],
            });
        }}>
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
