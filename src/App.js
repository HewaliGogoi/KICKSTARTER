import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Project from './components/Project';


function App() {
  return (
    <div className="App">
      <Navbar/> 
      {/* <Login/> */}
     {/* <SignUp/> */}
     {/* <Home/> */}
       <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/signup" element = {<SignUp />}/>
        <Route path = "/login" element = {<Login />}/>
        <Route path = "/projects" element = {<Project />}/>
      </Routes>
    </div>
  );
}

export default App;
