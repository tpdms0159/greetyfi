import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux';
import { initial } from '../reducer';
import { BoardingView } from './components/DivStyles';



const CardStyle = styled.img`
  width: 100%;
  borderRadius: 16px;
`

const handleCopyClipBoard = async (text) => {
  try {
      await navigator.clipboard.writeText(text);
      console.log(text);
      
  } catch (err) {
      console.log(err);
  }
};


export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(initial());
  })


  return (
    <BoardingView>
        <h1 style={{fontFamily: 'Yclover', marginTop: '10%'}}>그립하이</h1>

        <div style={{textAlign: 'center', width: '70%', height: '65vh', margin: '10% 0 10% -15%'}}>
        
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
            <SwiperSlide ><img src = 'https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/card/SAMPLE/BIRTHDAY1.png?raw=true' alt='ALT'style={{width: '100%', borderRadius: '16px', border: 'solid 3px #2F2C2C'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/card/SAMPLE/CHRISTMAS1.png?raw=true' alt='ALT' style={{width: '100%', borderRadius: '16px', border: 'solid 3px #2F2C2C'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/card/SAMPLE/END_YEAR1.png?raw=true' alt='ALT'style={{width: '100%', borderRadius: '16px', border: 'solid 3px #2F2C2C'}}/></SwiperSlide>
            <SwiperSlide ><img src = 'https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/card/SAMPLE/NEW_YEAR2.png?raw=true' alt='ALT'style={{width: '100%', borderRadius: '16px', border: 'solid 3px #2F2C2C'}}/></SwiperSlide>
         </Swiper>

         </div>
    

        <Btn text="나만의 카드 만들기" link='/main/season' length="90%" style={{
          margin: "0 5%",
        }} size='1' />
        
        <p style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20%'
        }}
        onClick={() => {
          handleCopyClipBoard("https://greetyfi-tpdms0159s-projects.vercel.app")
          Swal.fire({
            title: 'URL 복사 완료',
            html: `
            URL을 저장했어요
            <br>
            친구에게 <p style="display: inline; color: #FF408D;">GREETIFY</p>를 소개해주세요!`,
            imageUrl: 'assets/alert/sucess.png',
            width: '330px',
          }
          );
        }   
    }>
      그립하이 친구에게 공유하기  &nbsp;
            <img src='assets/icons/icon_link intact.png' alt ='alt' />
        </p>
    </BoardingView>
  )
}