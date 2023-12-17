import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import KakaoShare from '../test';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import DownImage from '../test';
import { initial } from '../reducer';

const {Kakao} = window;


export default function CheckCard() {
  const realUrl = "localhost:3000"
  const imgURL = "https://github.com/tpdms0159/greetyfi/blob/main/greetify/public/assets/card/%EC%83%9D%EC%9D%BC%EC%B9%B4%EB%93%9C_1%20copy.png?raw=true";

  const setCORSHeaders = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  };
  

  const Btn = styled.button`
  width: 90%;
  border-color: #FF67A4;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  background-color: #131212;
  font-size: 20px;
`

  const CardPosition = styled.h1`
  position: absolute;
  z-index: 2;
  top: 10.8%;
  left: 9%;
  font-size: 12px;
  color: 'white';
  
  `
const [href, setHref] = useState("");

  const onDownloadBtn = async()=>{

    const link = document.createElement('a');
    const target = document.getElementById('downloadImg');
    
    if (!target) {
      return alert('결과 저장에 실패했습니다.');
    }
    html2canvas(target).then((canvas) => {
      
      document.body.appendChild(link);
      link.href = canvas.toDataURL('image/png');
      setHref(link.href);

      // console.log("link:", link.href)

      link.download = 'result.png';
    
      link.click();
      document.body.removeChild(link);
    });

  }
    const today = new Date();
    const [myDate, setMydate] = useState("");
    const datas = useSelector((state) => {return state.select})
    const dispatch = useDispatch();
    // 생일 1번 빼곤 날짜, 텍스트 색깔 동일함
    // 생일 1번 - 가운데 중앙
    // 크리스마스 2번 - 위 중앙
    // 나머지 아래 중앙
    const season = datas.value.season;
    const num = datas.value.cardDesignId;
    console.log(season, num);

    console.log(datas);    
    useEffect(() =>
    {
      if (parseInt(today.getDate()) < 10){
        if ( today.getMonth() + 1 < 10){
        setMydate(`${today.getFullYear()}.0${today.getMonth() + 1}.0${today.getDate()}`);
        }
        
        setMydate(`${today.getFullYear()}.${today.getMonth() + 1}.0${today.getDate()}`);
    }
    else {
        if ( today.getMonth() + 1 < 10){
            setMydate(`${today.getFullYear()}.0${today.getMonth() + 1}.${today.getDate()}`);
        }
        else {
            setMydate(`${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`)
        }
    };
  },[]);



  return (
    <div style={{
      color: 'white',
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      width: '430px'
      
    }}>
      <h1 style={{color: 'white', fontFamily: 'Yclover'}}>마음 우체국</h1>


      <div id='downloadImg' style={{
            width: '387px',
            height: '640px',
        }}>
              
                <CardPosition 
                    // position: 'absolute',
                    // zIndex: 2,
                    // top: '14.38%',
                    // left: '9%',
                    // fontSize: '12px',
                    // color: 'white'
                >{myDate}</CardPosition>
                <p style={{
                    maxWidth:'70%', 
                    position: 'absolute',
                    zIndex: 2,
                    right: '12%',
                    top: '60%',
                    color:'white',
                    textAlign: 'center',
                    fontFamily: 'Yclover',
                }}> {datas.ments}
                </p>
            
            <img src={`/assets/card/DEFAULT/${season}${num}.png`} style={{
                width : '387px',
                borderRadius: '16px',
                border: 'solid 3px #2F2C2C',
                border:  'solid 5px #FF408D',
                position: 'absolute',
                zIndex: 1,

            }}/>
        </div>

      
  
      <div style={
        {display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        margin: '5% 0'
        }} id='card'>

        <Link to="/main/word">
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <img src="assets/icons/icon_T.png" style={{
              width: '20%',
              height: '10%',
              margin: '2vw',
              color: 'white',
              
              
            }}/>
            <p style={{
              textDecoration: 'none', 
              color: 'white'}}>문구 바꾸기</p>
          </div>
          </Link>
        

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems:'center',
          margin: '0 10%'
        }} 
        onClick={() =>{
          
          console.log('click');
         
            // return (<DownImage/> );
        }
          }>
          <img src="assets/icons/icon_kakao.png" style={{
            width: '6vw',
            height: '3vh',
            margin: '2vw'
          }}/>
          {/* <p >서비스 공유</p> */}
          <KakaoShare link={href === "" ? "/assets/card/생일카드_1.png": href} style={{
            
          }}/>
        </div>
      </div>

      



      <Btn onClick={onDownloadBtn}>
            <Link  style={{width: '100%', textDecoration: 'none', color: 'white'}}>이미지 저장하기</Link>
      </Btn>

    </div>
  )
}
