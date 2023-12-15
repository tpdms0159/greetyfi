import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Btn from './components/Btn';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCards, Pagination } from 'swiper/modules';

import Swal from 'sweetalert2';
import Title from './components/Title';


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
const CardStyle = styled.img`
  width: 100%;
  borderRadius: 16px;
`
export default function Home() {
  return (
    <BoardingView>
        <h1 style={{fontFamily: 'Yclover', marginTop: '10%'}}>그립하이</h1>

        <div style={{textAlign: 'center', width: '70vw', height: '65vh', margin: '-10% 0 10% -20vw'}}>
        
        <Swiper
         effect={'cards'}
         grabCursor={true}
         rewind={true}
         modules={[EffectCards, Pagination]}
         pagination={{
            clickable: false,
          }}
          style={{width: '100%', height: '60vh'}}
   
         >
            <SwiperSlide ><img src = 'assets/card/MAX/BIRTHDAY1.png' alt='ALT'style={{width: '100%', borderRadius: '16px'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/MAX/NEW_YEAR1.png' alt='ALT' style={{width: '100%', borderRadius: '16px'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/MAX/CHRISTMAS1.png' alt='ALT'style={{width: '100%', borderRadius: '16px'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'assets/card/MAX/END_YEAR1.png' alt='ALT'style={{width: '100%', borderRadius: '16px'}}/></SwiperSlide>
         </Swiper>

         </div>
    

        <Btn text="나만의 카드 만들기" link='/main/season' length="90%" style={{
          margin: "0 5%",
        }} />
        
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20%'
        }}
        onClick={() => {
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
      그립하이 친구에게 공유하기  &nbsp;&nbsp;
            <img src='assets/icons/icon_link intact.png' alt ='alt' />
        </p>
    </BoardingView>
  )
}