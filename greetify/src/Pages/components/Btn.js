import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Btn(props) {
    
    const Div = styled.div`
        display: flex; 
        justify-content: center;
        align-items: center;

        width: 90%;
        height: 70px;
        background-image: url(/assets/btnBox1.png);
        background-repeat: no-repeat;
        background-size: contain;

        margin-left: 20px;
        text-align: center;
    `

  return (
    <Div onClick={props.func !== null ? props.func: () => {}} style={{
        backgroundImage: props.size == '2'? 'url(/assets/btnBox2.png)': null,
    }}>
        
        <Link to={`${props.link}`} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

            width: '100%',
            height: '80%',
            textDecoration: 'none',
        }}>
            <p style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                width: '100%',
                textAlign: 'center',

                color: 'white',
                marginRight: '5%',
                paddingBottom: props.size == '2' ? '8%': '2%',
                fontSize: '24px',

            }}>{props.text}</p>

        
        </Link>
    </Div>

)}
