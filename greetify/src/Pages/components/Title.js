import React from 'react'

export default function Title(props) {


    return (
  <div style={{
    textAlign: 'center',
    padding: '3vh 0',
    fontFamily: 'Yclover',
    fontStyle:'normal',
    

  }}>
    <h1>{props.title1}
    <br/>
    {props.title2}
    <br/>
    {props.title3}
    </h1>

    <p style={{
      fontFamily: 'pretendMedium',

    }}>{props.sub1}
      <br/>
      {props.sub2}
    </p>
  </div>
    );
  
}
