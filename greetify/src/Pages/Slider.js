import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

function Slider(props) {
  const ind = useRef(0);
  const sendInd = (e) => {
    props.getindex(e.activeIndex)
    ind.current = e.activeIndex;
    
  }
  console.log(props.imgURL1);
  
  
  return (
    
 <Swiper
 slidesPerView="1"
 spaceBetween={10}
 onSlideChange={sendInd}
 style={{marginBottom: '10%', }}
>
    
    <SwiperSlide><img src={`${props.imgURL1}`}  style={{width: '100%', borderRadius: '20px', border: ind.current == 0 ? "solid 3px #FF408D" : ""}}/></SwiperSlide>
    <SwiperSlide><img  src={`${props.imgURL2}`}style={{width: '100%', borderRadius: '20px', border: ind.current == 1 ? "solid 3px #FF408D" : ""}}/></SwiperSlide>
   
    </Swiper>
  )
}

export default Slider;
