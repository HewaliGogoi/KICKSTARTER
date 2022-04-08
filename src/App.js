import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
 import Logout from './components/Logout';
import  StartProject  from './components/startProject';
import Project from './components/Project';
import Footer from './components/Footer';
import { Step1 } from './components/Step1';
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { useState } from 'react';
import Pledge from './components/Pledge';


function App() {

  const [close, setClose] = useState(false);
  const [closeF, setCloseF] = useState(false);

  return (
    <div className="App">
      <Navbar close={close} setClose={setClose}/> 
       <Routes>
        <Route path = "/" element = {<Home setClose={setClose} setCloseF={setCloseF}/>}/>
        <Route path = "/StartProject" element = {<StartProject setClose={setClose} setCloseF={setCloseF}/>}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path='/logout' element = {<Logout/>}/>
        <Route path = "/projects/:id" element = {<Project setClose={setClose}/>}/>
        <Route path = "/Step1" element = {<Step1 setClose={setClose} setCloseF={setCloseF}/>} />
        <Route path = '/Step2' element = {<Step2 />} /> 
        <Route path = '/Step3' element = {<Step3 />} />
        <Route path = '/checkout/:id/payment' element = {<Pledge/>} />
      </Routes>
      {
        !closeF && <Footer/>
      }
    </div>
  );
}

export default App;
