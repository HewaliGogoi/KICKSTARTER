import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StartProject } from './components/startProject';
import Project from './components/Project';
import Footer from './components/Footer';



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
        <Route path = "/projects" element = {<Project />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
