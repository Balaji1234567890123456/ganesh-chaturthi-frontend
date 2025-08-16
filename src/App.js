import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Signupform } from './components/signup-form/signup-form';
import { Signin } from './components/signin-form/signin-form';
import { Header } from './components/header/header';
import { Homepage } from './components/Home-page/home-page';
import {useState,useEffect} from "react"
import { Userprofile } from './components/user-profile/user-profile';

function App() {
  const [isCustom,setIsCustom]=useState(false)
  const [isPopup,setIsPopup]=useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setIsPopup(false)
    },5000)
  })
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage isCustom={isCustom} setIsCustom={setIsCustom} isPopup={isPopup} setIsPopup={setIsPopup}/>}></Route>
      <Route path="/signup" element={<Signupform/>}/>
      <Route path="/login" element={<Signin/>}/>
      <Route path="/user/profile" element={<Userprofile/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
