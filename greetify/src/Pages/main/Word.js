import React, { useRef, useState } from 'react'
import Stepbar from '../components/StepBar'
import styled from 'styled-components'
import Title from '../components/Title';
import Input from '../components/Input';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { age, word } from '../../reducer';
import axios from 'axios';
import Swal from 'sweetalert2';
import Btn from '../components/Btn';
import { BoardingView } from '../components/DivStyles';


const InWord = styled.div`
width: 70%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

function Word() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const words = useRef([]);
  const checks = useSelector((state) => {return state.select.value});
  // console.log('words checks:', checks);

  const dispatch = useDispatch();
  let len1 = 0;
  let len2 = 0;

 
  const getWords = (word) =>{
    words.current = word;
    len1 = words.current[0].length;
    len2 = words.current[1].length;
  } 

  return (
    <BoardingView>

      <Stepbar len="278px"/>

      <Title 
      title1="섞고 싶은 2개의 단어를"
      title2="적어주세요"/>

      <div style={{minHeight: '50vh'}}>
      <Input getwords={getWords}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>

      <Btn text="이전" link='/main/age' func={() => {dispatch(age([])); alert('나이 선택 정보가 없어집니다 !!')}} length="42%" size='2'/>
      <Btn text="다음" link={words.current[0] !== '' && words.current[1] !== '' ? '/main/speech': "/main/word" } func = {() => {
          
          if ( len1 !== 0 && len2 !== 0)  {
            dispatch(word(words));
          }
          else {
          Swal.fire({
            title: '오류',
            html: `
            텍스트를 입력해주세요 !!`,
            imageUrl: '/assets/alert/fail.png',
            width: '330px',
          })
        }
        }} length="42%" size='2'/>
      </div>
     
    </BoardingView>
  )
}

export default Word;
