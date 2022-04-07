import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StartProject } from './components/startProject';
import Project from './components/Project';
import Footer from './components/Footer';
import { Step1 } from './components/Step1';
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { useState } from 'react';

function App() {

  const [close, setClose] = useState(false);
  const [closeF, setCloseF] = useState(false);

  return (
    <div className="App">
      <Navbar close={close} setClose={setClose}/> 
      {/* <Login/> */}
     {/* <SignUp/> */}
     {/* <Home/> */}
       <Routes>
        <Route path = "/" element = {<Home setClose={setClose} setCloseF={setCloseF}/>}/>
        <Route path = "/StartProject" element = {<StartProject setClose={setClose} setCloseF={setCloseF}/>}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/Project" element = {<Project />}/>
        <Route path = "/Step1" element = {<Step1 setClose={setClose} setCloseF={setCloseF}/>} />
        <Route path = '/Step2' element = {<Step2 />} /> 
        <Route path = '/Step3' element = {<Step3 />} />
      </Routes>
      {
        !closeF && <Footer/>
      }
    </div>
  );
}

export default App;
