import React, { useRef, useState } from 'react'
import Stepbar from '../components/StepBar'
import styled from 'styled-components'
import Title from '../components/Title';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { word } from '../../reducer';
import axios from 'axios';

function Word() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const dispatch = useDispatch();

  const BoardingView = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`

  const InWord = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `

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

  // const Changeword = (e) => {

  //   console.log(e.target.value);
  //   setWord2((word2) => e.target.value);
  // }
  const words = useRef([]);
  const checks = useSelector((state) => {return state.select.value});
  console.log('words checks:', checks);


  const getWords = (word) =>{
    words.current = word;
  } 

  return (
    <BoardingView>

      <Stepbar len="70%"/>

      <Title 
      title1="섞고 싶은 2개의 단어를"
      title2="적어주세요"/>
      <div style={{minHeight: '55vh'}}>
      <Input getwords={getWords}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Btn >
        <Link to='/main/age' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {
        dispatch(word(words));
      }}>
        <Link to='/main/speech' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn>
      </div>
     
    </BoardingView>
  )
}

export default Word;
