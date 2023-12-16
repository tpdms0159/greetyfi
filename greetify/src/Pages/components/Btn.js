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
                width: '100%',
                position: 'absolute',
                zIndex: 2,
                width: `${props.length}`,
                textAlign:'center',
                textDecoration: 'none',
                color : 'white',
                fontSize: '24px',
                // verticalAlign: 'center',
            }}>{props.text}</p>

        <img src={`/assets/btnBox${props.size}.png`} style={{
            position: 'absolute',
            zIndex: 1,
        }} />
            
        
        </Link>
    </div>

)}
