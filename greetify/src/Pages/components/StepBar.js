import React from 'react'
import styled from 'styled-components';

export default function Stepbar(props) {
const Bar = styled.div`
    displey: flex;
    width: 80%;
    margin-top: 3vh;
`
console.log(props.len);
  return (
  
    <Bar>
    <img src='/assets/stepBar/emptyBar.png' style={{
      position: 'absolute', 
      zIndex: 2,
      width: '370px',
      height: '1vh'}}/>

      <img src='/assets/stepBar/pinkBar.png' style={{
        position: 'absolute',
        zIndex: 2,
        width: `${props.len}`,
        height: '1vh'
      }}/>
    
    </Bar>
   
  )
}

