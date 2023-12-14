import React, { useEffect } from 'react'
import Stepbar from './components/StepBar'
import { useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';

export default function Loading() {

    const BoardingView = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`
const selects = useSelector((state) => {
    return state.select.value;
});

  
  useEffect(() => {
    axios.post("http://223.130.134.101/api/cards", 
    {
        selects
    }
    )
    .then((res) => {
        console.log(res);
        setTimeout(() => {
            window.location.href = "/checkcard"
          },2000);

    })
    .catch ((error) => {
        return console.log(error);
    })
  })

  return (
    <BoardingView>
        <Stepbar len="100%"/>

    </BoardingView>
    
  )
}
