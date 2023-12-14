import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux';
import { age } from '../../reducer';

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

  margin: 3%;
`

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
export default function Age() {

  const [isSelected, setIsSelected] = useState([]);
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const checks = useSelector((state) => {return state.select.value});
  console.log('age checks: ', checks);

  var word = [];


  useEffect(() => {
    
    fetch('/assets/data.json')
      .then(res => res.json())
      .then(res => {
        setDatas(res.age); 
        
      })
      .catch(error => console.error('Error:', error));
  }, []);

  
  const onClick = (id) => {
    console.log('id:', id);
    setIsSelected(id);
    // 변경된 값을 전송하도록 해야한다 - reducer
  }
  return (
    <BoardingView>

      <Stepbar len='60%'/>
      
      
      <Title
      title1="연령을 선택해주세요"
      sub1="수신자들의 연령을 1~2가지 선택해주세요"
      />


      <div style={{minWidth: '90%', minHeight: '50vh', padding: '3vh 3vw', textAlign: 'start'}}>
            {datas.map((data, ind) => {
              word = [...word, data];
            return (
              <>
              { (ind % 3) === 2 ? 
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                {word.map(data => {
                  const select = isSelected === data.eng;
                  

                  return(
                  <div style={{textAlign: 'center'}}> 
                    <Option onClick = {() => {onClick(data.eng)}} > 
                      <div>&nbsp</div>
                      <img src={`/assets/age/icon_${data.word}.png`} style={{ position: 'absolute', zIndex: 2}}/>
                      { select ? <img src='/assets/iconBox.png' style={{ position: 'absolute',zIndex: 1}}/> : null}
            
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
                
                console.log('isSelected:', data.isSelected)
                const select = isSelected === data.eng;

                return(
                  <div style={{textAlign: 'center'}}> 
                    <Option onClick = {() => {onClick(data.eng)}} > 
                    <div>&nbsp</div>
                      <img src={`/assets/age/icon_${data.word}.png`} style={{ position: 'absolute', zIndex: 2}}/>
                      { select ? <img src='/assets/iconBox.png' style={{ position: 'absolute',zIndex: 1}}/> : null}
            
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

        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
      <Btn>
        <Link to='/main/emotion' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {dispatch(age(isSelected))}}>
        <Link to='/main/word' style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn>
      </div>
            
            
        
    </BoardingView>
  )
}