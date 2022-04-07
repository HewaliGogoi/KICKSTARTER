import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StartProject } from './components/startProject';
import Project from './components/Project';
<<<<<<< HEAD
=======
import Footer from './components/Footer';
>>>>>>> cc74b06f4332b2eb211c72dd4b6bb8152bcdc39b


function App() {
  return (
    <div className="App">
      <Navbar/> 
      {/* <Login/> */}
     {/* <SignUp/> */}
     {/* <Home/> */}
       <Routes>
        <Route path = "/" element = {<Home />}/>
<<<<<<< HEAD
        <Route path = "/SignUp" element = {<SignUp />}/>
        <Route path = "/Login" element = {<Login />}/>
=======
>>>>>>> cc74b06f4332b2eb211c72dd4b6bb8152bcdc39b
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
