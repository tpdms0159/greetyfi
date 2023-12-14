import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

function Slider(props) {
  const sendInd = (e) => {
    props.getindex(e.activeIndex)
  }
  
  return (
    
 <Swiper
 slidesPerView="1"
 spaceBetween={10}
 onSlideChange={sendInd}
 
>
    <SwiperSlide>
      <img src='/assets/card/생일카드_1.png' style={{width: '100%', borderRadius: '20px'}} /></SwiperSlide>
    <SwiperSlide><img  src='/assets/card/생일카드_2.png' style={{width: '100%', borderRadius: '20px'}}/></SwiperSlide>
    <SwiperSlide><img  src='/assets/card/생일카드_1.png' style={{width: '100%', borderRadius: '20px'}}/></SwiperSlide>
    <SwiperSlide><img  src='/assets/card/생일카드_1.png' style={{width: '100%', borderRadius: '20px'}}/></SwiperSlide>
    </Swiper>
  )
}

export default Slider;
