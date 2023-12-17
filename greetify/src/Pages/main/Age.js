import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Stepbar from '../components/StepBar'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux';
import { age } from '../../reducer';
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
  return (
    <BoardingView>

      <Stepbar len='60%'/>
      
      
      <Title
      title1="연령을 선택해주세요"
      sub1="수신자들의 연령을 1~2가지 선택해주세요"
      />


      <div style={{width: '90%', minHeight: '50vh', padding: '3vh 3vw', textAlign: 'start'}}>
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
                
                
                const select = isSelected.includes(data.eng);
                console.log('isSelected:', data.isSelected);

                return(
                  <div style={{textAlign: 'center'}}> 
                    <Option onClick = {() => {onClick(data.eng)}} > 
                    <div>&nbsp;</div>
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

        <div style={{display: 'flex', flexDirection: 'row', width: '90%'}}>



        <Btn text="이전" link='/main/emotion' onClick={() => {
        console.log('이전');
        dispatch(age([]));
        
        console.log("onclick")}} length="40%" size='2'/>

        <Btn text="다음" link={isSelected.length === 0 ? "": '/main/word'} func={() => {
          console.log(isSelected.length);
          if (isSelected.length !== 0) {
          dispatch(age(isSelected))
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
        }} length="40%" size='2'/>





      {/* <Btn>
        <Link to='/main/emotion' style={{width: '100%', textDecoration: 'none', color: 'white'}}>이전</Link>
      </Btn>

      <Btn onClick={() => {
        if (isSelected.length !== 0) {
        dispatch(age(isSelected));
        }
        else{
          alert("옵션을 골라주세요");
        }
        }}>
        <Link to={isSelected.length == 0 ? '':'/main/word'} style={{width: '100%', textDecoration: 'none', color: 'white'}}>다음</Link>
      </Btn> */}
      </div>
            
            
        
    </BoardingView>
  )
}