import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Btn(props) {
    
    
  return (
    <div style={{
        width: `${props.length}`,
        display: 'flex',
        flexDirection: 'column',
        flex : 1,
        justifyContent: 'center',
        alignContent: 'center',
    }} onClick={props.func !== null ? props.func: () => {}}>
        
        <Link to={`${props.link}`}>
            <p style={{
                position: 'absolute',
                zIndex: 2,
                width: props.size == 1 ? '370px': '175px',
                textAlign:'center',
                textDecoration: 'none',
                color : 'white',
                fontSize: '24px',
            }}>{props.text}</p>

        <img src={`/assets/btnBox${props.size}.png`} style={{
            position: 'absolute',
            zIndex: 1,
        }} />
            
        
        </Link>
    </div>

)}
