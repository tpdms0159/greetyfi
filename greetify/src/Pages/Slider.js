import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

function Slider(props) {
  const [ind, setInd] = useState(0);

  const sendInd = (e) => {
    props.getindex(e.activeIndex)
    setInd(e.activeIndex);
  }

  
  
  return (
    
 <Swiper
 slidesPerView="1"
 spaceBetween={10}
 onSlideChange={sendInd}
 style={{marginBottom: '10%', }}
>
    
    <SwiperSlide>
  
      <img src={`${props.imgURL1}`}  style={{width: '100%', borderRadius: '20px'}}/></SwiperSlide>
    <SwiperSlide><img  src={`${props.imgURL2}`}style={{width: '100%', borderRadius: '20px'}}/></SwiperSlide>
   
    </Swiper>
  )
}

export default Slider;
