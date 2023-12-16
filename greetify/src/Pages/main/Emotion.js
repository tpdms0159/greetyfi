import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { emotion } from '../../reducer'
import Btn from '../components/Btn'
import Swal from 'sweetalert2'

const BoardingView = styled.div`
  
  width: 100%;
  max-width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  maring-bottom: 10%;
`

const Option = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 10vw;

`
export default function Home() {

  const [isSelected, setIsSelected] = useState([]);
  const [datas, setDatas] = useState([]);

  var word = [];


  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.emotion); 
        
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const onClick = (id) => {
    console.log('id', id);
    if(isSelected.includes(id)) {
      setIsSelected(isSelected.filter(isSelected => isSelected !== id));
    }
    else if (isSelected.length == 2) {
      
      alert('최대 2개만 선택가능합니당')
    }
    else {
      setIsSelected([...isSelected, id]);
    }

    // 변경된 값을 전송하도록 해야한다 - reducer
  }

const dispatch = useDispatch();
const checks = useSelector((state) => {return state.select.value})
console.log('emotion checks:', checks);
  return (
    <BoardingView>

      <Stepbar len='45%'/>

      <Title
      title1="녹이고 싶은 감성을"
      title2="선택해주세요"
      sub1="녹이고 싶은 감성을 1~2가지 선택해주세요"
      />

      <div style={{minWidth: '90%', minHeight: '50vh', padding: '3vh 3vw', textAlign: 'start'}}>
            {datas.map((data, ind) => {
              word = [...word, data];
            return (
              <>
              { (ind % 3) === 2 ? 
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {word.map(data => {
                  const select = isSelected.includes(data.eng);

                  return(
                  <div style={{textAlign: 'center'}}> 
                    <Option onClick = {() => {onClick(data.eng)}} > 
                      <div>&nbsp;</div>
                      
                      { select ? 
                      <>
                      <img src={`/public/assets/emotion/active/icon_${data.word}_V.svg`} style={{ position: 'absolute', zIndex: 2}} />
                      <img src='/assets/iconBox.png' style={{ position: 'absolute',zIndex: 1}}/>
                       </>
                      :
                      <img src={`/assets/emotion/noactive/icon_${data.word}.png`} style={{ position: 'absolute', zIndex: 2}}/>
                      }
                       
            
                    </Option>
                    <p style={{padding: '3vh'}}>{data.word}</p>
                    </div>        
                  );
                })}
                {word = []}
                </div> :
                <>
                
                { ind === datas.length-1 ? 
              <div style={{ display: 'flex', justifyContent:'flex-start'}}>
              {word.map(data => {
                const select = isSelected.includes(data.eng);
                return(
                  <div style={{textAlign: 'center'}}> 
                    <Option onClick = {() => {onClick(data.eng)}} > 
                      <div>&nbsp;</div>

                      { select ? 
                      <>
                      <img src={`/assets/emotion/active/icon_${data.word}_V.svg`} style={{ position: 'absolute', zIndex: 2}} />
                      <img src='/assets/iconBox.png' style={{ position: 'absolute',zIndex: 1}}/>
                       </>
                      :
                      <img src={`/assets/emotion/noactive/icon_${data.word}.png`} style={{ position: 'absolute', zIndex: 2}}/>
                      }
                       
            
                    </Option>
                    <p style={{padding: '3vh'}}>{data.word}</p>
                    </div>  
                );
              })}
              </div>
              :
              null}

                </>
              }
              </>);
            })}
        </div>


      <div style={{display: 'flex', flexDirection: 'row', width: '90%'}}>
      <Btn text="이전" link='/main/design' func={() => {
        console.log('이전');
        dispatch(emotion([]));
        
        console.log("onclick")}} length="42%" size='2'/>

        <Btn text="다음" link={isSelected.length === 0 ? "": '/main/age'} func={() => {
          console.log(isSelected.length);
          if (isSelected.length !== 0) {
          dispatch(emotion(isSelected))
        }
        else {
          Swal.fire({
            title: '오류',
            html: `
            옵션을 선택해주세요 !!`,
            imageUrl: '/assets/alert/fail.png',
            width: '80%',
          })
        }
        }} length="42%" size='2'/>



{/*         
      <Btn>
        <Link to='/main/design' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {
        console.log(isSelected.length);
        }>
        <Link to={isSelected.length == 0 ? '/main/emotion':'/main/age'} style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn> */}
      </div>
            
        
    </BoardingView>
  )
}