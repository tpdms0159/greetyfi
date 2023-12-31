import styled from "styled-components";

const Option = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
  

`
const BoardingView = styled.div`    
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 100%;
  color: white;
  maring-bottom: 10%;
`


const OptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 90%;
`

const OptionRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
`
const FinalCard = styled.div`
  width: 90%;
  max-width: 370px;

  height: 70vh;
  max-height: 610px;

  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: solid 3px #FF408D;
  background-color: black;
`
const DatePositon = styled.div`
  margin: 4.3% 0 0 2%;

  font-size: 14px;
  font-family: pretendMedium;
`

const MentPosition = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  width: 80%;
  margin: 100% 0 0 10%;

  font-family: YcloverRegular;
  font-weight: 500;
  font-size: 18px;
`

const MiniMenu = styled.div`
  display: flex;
  flex-directtion: row;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin: 5% 0;
`

const ImgTextBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-family: pretendMedium;


  color: white;
`

export { BoardingView, OptionBox, OptionRow, FinalCard,
  DatePositon, MentPosition, MiniMenu, ImgTextBox};
export default Option;