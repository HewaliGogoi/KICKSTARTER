import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StartProject } from './components/Startproject';
import Project from './components/Project';
import Footer from './components/Footer';
import { Step1 } from './components/Step1';
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      {/* <Login/> */}
     {/* <SignUp/> */}
     {/* <Home/> */}
       <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/StartProject" element = {<StartProject />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/Project" element = {<Project />}/>
        <Route path = "/Step1" element = {<Step1 />} />
        <Route path = '/Step2' element = {<Step2 />} /> 
        <Route path = '/Step3' element = {<Step3 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
