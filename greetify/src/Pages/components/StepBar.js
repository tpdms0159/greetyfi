import React from 'react'
import styled from 'styled-components';

export default function Stepbar(props) {
const Bar = styled.div`
    displey: flex;
    width: 80%;
    height: 10px;
    margin-top: 3vh;
    background-image: url('/assets/stepBar/emptyBar.png');
`

  return (
  
    <Bar>

      <img src='/assets/stepBar/pinkBar.png' style={{
        position: 'absolute',
        zIndex: 2,
        width: `${props.len}`,
        height: '10px'
      }}/>
    
    </Bar>
   
  )
}

