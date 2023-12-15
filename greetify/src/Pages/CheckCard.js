import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import KakaoShare from '../test';
import html2canvas from 'html2canvas';

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
const [href, setHref] = useState("");

  const onDownloadBtn = async()=>{
    // domtoimage
    // .toBlob(document.querySelector("#downloadImg"))
    // .then((blob)=>{
    //     const saveConfirm = window.confirm("이미지를 저장하시겠습니까?")
    //     if(saveConfirm === true){
    //     saveAs(blob, 'download.png');
    //     }
    // })
    // .catch((error) => {
    //   console.log(error);
    // })


    // window.scrollTo(0, 0);

    // let url = "";
    // await html2canvas(document.getElementById("downloadImg")).then(async (canvas) => {
    //     url = await canvas.toDataURL("image/jpg").split(',')[1];
    //     setOpen(true);
    // });

    // await uploadImgur(url);


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
    useEffect(() =>
    {if (parseInt(today.getDate()) < 10){
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
    }},[]);



  return (
    <div style={{
      color: 'white',
      display:'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <h1 style={{color: 'white'}}>마음 우체국</h1>


      <div id='downloadImg' style={{
            
            width: '90vw',
            height: '90vw * 1.6px',
            padding: '5vw'
            }}>
              
                <h1 style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '3vh',
                    left: '8.7vw',
                    fontSize: '12px',
                    color: 'black'
                }}>{myDate}</h1>
                <p style={{
                    position: 'absolute',
                    zIndex: 2,
                    right: '30vw',
                    top: '30vh',
                    color:'black',
                    textAlign: 'center'
                }}> 진짜 텍스트들 들어올거임
                    <br/>
                    엄청 많이 들어온댕
                    <br/>
                    새해가 밝았어요 모두 반가워용
                    <br/>
                    안녕안녕 친구등
                </p>
            
            <img src='/assets/card/생일카드_1 copy.png' style={{
                // width: '90vw',
                borderRadius: '16px',
                // height: '90vw * 1.6px'
                margin: '2vh 3vw 2vh 0vw'
            }}/>
        </div>

      
  
      <div style={{display: 'flex', flexDirection: 'row'}} id='card'>

        <Link to="/main/word">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src="assets/icons/icon_T.png" style={{
              width: '6vw',
              height: '3vh',
              margin: '2vw'
            }}/>
            <p>문구 바꾸기</p>
          </div>
          </Link>
        

        <div style={{display: 'flex', flexDirection: 'row'}} onClick={() => {}}>
          <img src="assets/icons/icon_kakao.png" style={{
            width: '6vw',
            height: '3vh',
            margin: '2vw'
          }}/>
          <p>카카오톡 발송</p>
        </div>
      </div>

      <KakaoShare link={href === "" ? "/assets/card/생일카드_1.png": href}/>



      <Btn onClick={onDownloadBtn}>
            <Link  style={{width: '100%', textDecoration: 'none', color: 'white'}}>이미지 저장하기</Link>
      </Btn>

    </div>
  )
}
