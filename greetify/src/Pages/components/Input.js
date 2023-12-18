import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Input(props) {
    const [world1, setWord1] = useState("");
    const [world2, setWord2] = useState("");

    let words = [];

   
  const sendWords = () => {
    words = [...words, world1, world2];
    props.getwords(words);
  
  }

  sendWords();
  return (
    <div style={{width: '368px'}}>

        <div  >
          <p style={{color: '#FF408D'}}>1번째 단어</p>
          <input type='text' onChange={(e) => {
            setWord1(e.target.value);
            }} 
            style={{
              width: '90%',
              height: '10%',
              borderRadius: '16px',
              padding: '4%',
              fontSize: '18px'
              }}/>
        </div>

<div >
      <p style={{color: '#FF408D'}}>2번쨰 단어</p>
      <input type='text' onChange={(e) => setWord2(e.target.value)}
      style={{
            width: '90%',
            height: '10%',
            borderRadius: '16px',
            padding: '4%',
            fontSize: '18px'
        
        }}/>
      <p style={{paddingLeft: '5%'}}> 
        난해한 단어라도 Greetify가 멋진 내용으로
        <br/> 
        재 탄생 시켜드릴께요
    </p>
    </div>


    </div>


  )
}

export default Input
