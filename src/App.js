import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { StartProject } from './components/startProject';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/SignUp" element = {<SignUp />}/>
        <Route path = "/Login" element = {<Login />}/>
        <Route path = "/StartProject" element = {<StartProject />}/>
      </Routes>
    </div>
  );
}

export default App;
