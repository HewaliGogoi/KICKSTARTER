import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/" element = {<SignUp />}/>
        <Route path = "/" element = {<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
