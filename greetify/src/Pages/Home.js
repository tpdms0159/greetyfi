import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCards, Pagination } from 'swiper/modules';

import Swal from 'sweetalert2';
import Title from './components/Title';

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

  margin: 10%;
`

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

export default function Home() {
  return (
    <BoardingView>
        <h1 style={{fontFamily: 'Yclover'}}>그립하이</h1>

        <div style={{textAlign: 'center', width: '70vw', height: '65vh', marginLeft: '-20vw'}}>
        
        <Swiper
         effect={'cards'}
         grabCursor={true}
         rewind={true}
         modules={[EffectCards, Pagination]}
         pagination={{
            clickable: false,
          }}
          style={{width: '80vw', height: '60vh'}}
   
         >
            <SwiperSlide ><img src = 'assets/card/생일카드_1.png' alt='ALT'/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/생일카드_2.png' alt='ALT'/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/연말_1.png' alt='ALT'/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/크리스마스_1.png' alt='ALT'/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/크리스마스_2.png' alt='ALT'/></SwiperSlide>
         </Swiper>

         </div>
    

        <Btn >
            <Link to='/main/season' style={{width: '100%', textDecoration: 'none', color: 'white'}}>나만의 카드 만들기</Link>
        </Btn>
        
        <p onClick={() => {
          Swal.fire({
            title: 'URL 복사 완료',
            html: `
            URL을 저장했어요
            <br>
            친구에게 <p style="display: inline; color: #FF408D;">GREETIFY</p>를 소개해주세요!`,
            imageUrl: 'assets/alert/sucess.png',
            
            width: '80%',


          }
          )}   
    }>
      그립하이 친구에게 공유하기  &nbsp;
            <img src='/icon_link intact.png' alt ='alt' />
        </p>
    </BoardingView>
  )
}