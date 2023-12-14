
import './App.css';
import Splash from './Pages/Splash';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './Pages/Onboarding';
import Onboarding2 from './Pages/Onboarding2';
import Onboarding3 from './Pages/Onboarding3';
import Home from './Pages/Home';
import Season from './Pages/main/Season';
import CardDesign from './Pages/main/CardDesign';
import Emotion from './Pages/main/Emotion';
import Age from './Pages/main/Age';
import Word from './Pages/main/Word';
import Speech from './Pages/main/Speech';
import CheckCard from './Pages/CheckCard';
import ScrollTop from './Pages/components/ScrollTop';




function App() {
  return (


    <BrowserRouter>
    <ScrollTop/>
    <Routes>
      {/* splash 페이지 */}
      <Route path='/' element={<Splash/>} />

      {/* onBoarding 페이지 */}
      <Route path='/onboarding' element={<Onboarding/>} />
      <Route path='/onboarding2' element={<Onboarding2/>} />
      <Route path='/onboarding3' element={<Onboarding3/>} />

      <Route path='/home' element={<Home/>} />

      {/* 메인 페이지 */}
      <Route path='/main/season' element={<Season/>} />
      <Route path='/main/design' element={<CardDesign/>} />
      <Route path='/main/emotion' element={<Emotion/>} />
      <Route path='/main/Age' element={<Age/>} />
      <Route path='/main/Word' element={<Word/>} />
      <Route path='/main/Speech' element={<Speech/>} />


      <Route path='/checkcard' element={<CheckCard/>} />


     

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
