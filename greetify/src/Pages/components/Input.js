import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Input(props) {
    const [word11, setWord1] = useState("");
    const [word12, setWord2] = useState("");

    let words = [];

    const Btn = styled.button`
      width: 100%;
      height: 6vh;
      border-color: #FF67A4;
      border-radius: 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2%;
      background-color: #131212;
      font-size: 20px;

      margin:5vh 3vw;
    `
  const sendWords = () => {
    words = [...words, word11, word12];
    props.getwords(words);
  
  }

  sendWords();
  return (
    <div>
        <div style={{width: '80vw',margin: '3vw'}}>
        <p>1번째 단어</p>
      <input type='text' onChange={(e) => {
        setWord1(e.target.value);
      }} 
      style={{
        width: '80vw',
        height: '5vh',
        borderRadius: '16px',
        padding: '1vh 2vw',
        fontSize: '5vw'
        }}/>
      

</div>
<div style={{width: '80vw',margin: '3vw', }}>
      <p>2번쨰 단어</p>
      <input type='text' onChange={(e) => setWord2(e.target.value)}
      style={{
        width: '80vw',
        height: '5vh',
        borderRadius: '16px',
        padding: '1vh 2vw',
        fontSize: '5vw'
        
        }}/>
      <p> 
        난해한 단어라도 Greetify가 멋진 내용으로
        <br/> 
        재 탄생 시켜드릴께요
    </p>
    </div>


   


    </div>


  )
}

export default Input
