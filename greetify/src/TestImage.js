import React, { useEffect, useState } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Dom = () => {
  //dom-to-image 및 file-saver를 사용한 함수
    const onDownloadBtn = ()=>{
        domtoimage
        .toBlob(document.querySelector("#downloadImg"))
        .then((blob)=>{
            const saveConfirm = window.confirm("이미지를 저장하시겠습니까?")
            if(saveConfirm === true){
            saveAs(blob, 'download.png');
            }
        })
    }
    const today = new Date();
    const [myDate, setMydate] = useState("");
  



    return (
    <div>
        <div id='downloadImg' style={{
            
            width: '90vw',
            height: '90vw * 1.6px',
            padding: '5vw'
            }}>
              
                <h1 style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '12.28vh',
                    left: '8.7vw',
                    fontSize: '12px',
                    color: 'black'
                }}>{myDate}</h1>
                <p style={{
                    position: 'absolute',
                    zIndex: 2,
                    right: "50%",
                    color:'white'
                }}> 진짜 텍스트들 들어올거임
                    <br/>
                    엄청 많이 들어온댕
                </p>
            
            <img src='/assets/card/생일카드_1 copy.png' style={{
                width: '90vw',
                borderRadius: '16px',
                height: '90vw * 1.6px'
            }}/>
        </div>

        <button onClick={onDownloadBtn}>저장하기</button>
    </div>
  )
}

export default Dom