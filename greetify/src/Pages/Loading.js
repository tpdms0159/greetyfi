import React, { useEffect } from 'react'
import Stepbar from './components/StepBar'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import motion from '../motion05.json';
import Lottie from 'lottie-react';
import { instance } from '../testDownload';
import { ments } from '../reducer';

export default function Loading() {

  const BoardingView = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`
  const selects = useSelector((state) => {
      return state.select.value;
  });


  console.log("loading: ", selects);

  const formattedData = {
    cardDesignId: selects.cardDesignId,
    season: selects.season,
    emotional: selects.emotional,
    age: selects.age,
    dialect: selects.dialect,
    words: selects.words,
  }

  const dispatch = useDispatch();

  


  // { withCredentials: true }
  useEffect(() => {

        // 이 인스턴스를 사용하여 요청 보내기
        axios.post("https://api.greetify.xyz/api/cards/create-phrase",
        formattedData, {
          withCredentials: true,
        }
      )
        .then((res) => {
          console.log("res:", res.data.phrase);
          dispatch(ments(res.data.phrase));
          setTimeout(() => {
            window.location.href = "/checkcard"
          },0);
        })
        .catch ((error) => {
          return console.log("error: ",error);
        });
})


  //   axios.post("http://223.130.134.101/api/cards/create-phrase", 
  //   {
  //     values: selects
  //   }, {
  //     headers: {
  //     'Access-Control-Allow-Origin' : '*',
  //     'Access-Control-Allow-Credentials':"true",
  //   }}
  //   )
  //   .then((res) => {
  //       console.log(res);
  //       setTimeout(() => {
  //           window.location.href = "/checkcard"
  //         },2000);

  //   })
  //   .catch ((error) => {
  //       return console.log(error);
  //   })
  // })

  return (
    <BoardingView>
        <Stepbar len="370px"/>
        <h1 style={{
          fontFamily: 'Yclover',
          marginTop: '10vh'
        }}>카드 제작중...</h1>
        <Lottie animationData={motion} loop={false} style={{width: '100%',  textAlign: 'center' }}/>

    </BoardingView>
    
  )
}
