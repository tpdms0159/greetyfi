import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

function Slider(props) {
  const [ind, setInd] = useState(0);
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);

  const sendInd = (e) => {
    props.getindex(e.activeIndex)
    if (e.activeIndex == 0) {
      setSelect1(true);
      setSelect2(false);
    }
    else{
      setSelect2(true);
      setSelect1(false);
    }
  }

  console.log(select1, select2);
  
  
  return (
    
 <Swiper
 slidesPerView="1"
 spaceBetween={30}
 onSlideChange={sendInd}
 style={{marginBottom: '10%', }}
>
    
    <SwiperSlide ><img src={`${props.imgURL1}`}  style={{width: '100%', borderRadius: '20px', border: select1 ? 'solid 5px #FF408D': ""}} /></SwiperSlide>
    <SwiperSlide onCLick={()=> {setSelect2(true)}}><img  src={`${props.imgURL2}`}style={{width: '100%', borderRadius: '20px', border: select2 ? 'solid 5px #FF408D': ""}}/></SwiperSlide>
   
    </Swiper>
  )
}

export default Slider;
