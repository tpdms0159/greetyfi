import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import KakaoShare from '../test';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import DownImage from '../test';
import { initial, ments } from '../reducer';
import { BoardingView, DatePositon, FinalCard, ImgTextBox, MentPosition, MentPositionBottom, MiniMenu, MiniText } from './components/DivStyles';
import Btn from './components/Btn';

const {Kakao} = window;


export default function CheckCard() {
  const realUrl = "localhost:3000";
  const [href, setHref] = useState("");
  const today = new Date();
  const [myDate, setMydate] = useState("");
  const datas = useSelector((state) => {return state.select})
  const dispatch = useDispatch();

  const season = datas.value.season;
  const num = datas.value.cardDesignId;

  const [top, setTop] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [blackFont, setBlackfont] = useState(false);

  



  const setCORSHeaders = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
  };
  

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

      // ment position 정하기
    if (num == '1' && season == 'BIRTHDAY'){ setMiddle(true);}
    else if (num == '2' && season == 'CHRISMAS'){ setTop(true);}

    // font color 정하기
    if (num == '1' && season !== 'BIRTHDAY') {setBlackfont(true);}
    };
  },[]);

  const imgURL = 'url(assets/card/DEFAULT/' + season + num + '.png)';

  return (

    <BoardingView>
    <h1 style={{color: 'white', fontFamily: 'Yclover'}}>마음 우체국</h1>

    <FinalCard id='downloadImg' style={{
      backgroundImage:  imgURL, 
      color: blackFont ? 'black' : 'white' 
      }}>

      <DatePositon>{myDate}</DatePositon>
      <MentPosition style={{
        margin: top ? '10% 0 0 10%' : null,
        margin: middle ? '70% 0 0 10%':null,
      }}> {datas.ments}</MentPosition>

    </FinalCard>

      <MiniMenu>
 
        <Link to="/main/word" style={{textDecoration: 'none', width: '30%'}}
        onClick={() => {dispatch(ments([]))}}>
          <ImgTextBox>
            <img src="assets/icons/icon_T.png" style={{marginRight: '5%'}}/>
            <p >문구 바꾸기</p>
          </ImgTextBox>
        </Link> 
        

        <ImgTextBox style={{width: '40%'}}>
          <img src="assets/icons/icon_kakao.png" style={{marginRight: '5%'}}/>
          <KakaoShare link={href === "" ? "/assets/card/생일카드_1.png": href}/>
        </ImgTextBox>

      </MiniMenu>
      
      <Btn 
          text="이미지 저장하기" 
          link='/checkcard'
          length="90%" 
          func={onDownloadBtn}
          />

    </BoardingView>
  )
}
