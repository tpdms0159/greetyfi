import React, { useRef, useState } from 'react'
import Stepbar from '../components/StepBar'
import styled from 'styled-components'
import Title from '../components/Title';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { word } from '../../reducer';
import axios from 'axios';
import Swal from 'sweetalert2';
import Btn from '../components/Btn';

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
  // const Changeword = (e) => {

  //   console.log(e.target.value);
  //   setWord2((word2) => e.target.value);
  // }
  const words = useRef([]);
  const checks = useSelector((state) => {return state.select.value});
  let len1 = 0;
  let len2 = 0;

  console.log('words checks:', checks);

  const getWords = (word) =>{
    words.current = word;
    console.log(words);
    len1 = words.current[0].length;
    len2 = words.current[1].length;
    console.log(len1, len2);
    
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

      <div style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
{/*       
          {setLen1(words.current[0].length)}
          {setLen2(words.current[1].length)} */}
        

      <Btn text="이전" link='/main/age' func={() => {
        console.log('이전');
        dispatch(word([]));
        console.log("onclick")}} length="42%" size='2'/>
        

        <Btn text="다음" link={words.current[0] !== "" && words.current[1] !== "" ? '/main/speech': "" } func = {() => {
          
          if ( len1 !== 0 && len2 !== 0)  {
            dispatch(word(words));
            console.log('success');
          }
          else {
          Swal.fire({
            title: '오류',
            html: `
            텍스트를 입력해주세요 !!`,
            imageUrl: '/assets/alert/fail.png',
            width: '80%',
          })
        }
        }} length="42%" size='2'/>
      
      
      
      
      {/* <Btn >
        <Link to='/main/age' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {
        console.log(words.length);
        if (words.length !== 0)
        {dispatch(word(words));}
        else {
          alert("단어를 작성해주세요");
        }
      }}>
        <Link to='/main/speech' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn> */}
      </div>
     
    </BoardingView>
  )
}

export default Word;
