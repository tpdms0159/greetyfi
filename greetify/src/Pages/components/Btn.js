import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Btn(props) {
    console.log(props);
    
  return (
    <div style={{
        width: `${props.length}`,
        display: 'flex',
        flexDirection: 'column',
        flex : 1,
        justifyContent: 'center',
        // alignContent: 'center',
    }} onClick={props.onClick !== null ? props.func: () => {}}>
        <Link to={`${props.link}`}>
            <p style={{
                position: 'absolute',
                zIndex: 2,
                width: `${props.length}`,
                textAlign:'center',
                textDecoration: 'none',
                color : 'white',
                fontSize: '1.35rem',
                verticalAlign: 'center',
            }}>{props.text}</p>
            
        <img src='/assets/btnBox2.png' style={{
            position: 'absolute',
            zIndex: 1,
            maxWidth: '40%',
            width: '50%'
        }} />
        </Link>
    </div>

)}
