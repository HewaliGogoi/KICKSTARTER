import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { logoutAction } from '../redux/action';
import Kickstarter from './Kickstarter.svg';

const Logo = styled.div`
  // border : 2px solid #cecece;
  /* listStyle:"none"; */
  width:15vw;
  margin: auto;
  margin-top:2vw;
  
  img{
    width:100%;
    height:30px;
    cursor:pointer;
  }

  @media (max-width:380px){
    // border : 2px solid #cecece;
    width:400%;
    margin-top:-280%;
    margin-left:-170%;

    img{
      // border : 2px solid red;
      // z-index:1000;
    }
  }
`;

const SearchInput = styled.input`
  width:${({open}) => open? "90vw" : "0vw"};
  height: ${({open}) => open? "3.5rem" : "0vh"};
  padding: ${({open}) => open? "1vw 5vw" : "10px"};
  z-index: ${({open}) => open? "2" : "0"};
  position: ${({open}) => open? "absolute" : ""};
  top: ${({open}) => open? "0" : ""};
  left: ${({open}) => open? "0" : ""};
  border:none;
  // border-bottom:${({open}) => open? "1px solid #cecece" : "none"};
  outline:none;
`;

const SearchButton = styled.button`
  border:none;
  background-color:white;

  @media (max-width:380px){
    // border:2px solid red;
    margin:auto;
  }
`;

const Topic = styled.div`
  border : 1px solid #cecece;
  display : flex;
  justify-content : center;
  padding: 10px 0px;

  a{
    color : #656969;
  }

  a:hover{
    color:#037362;
    text-decoration: underline;
  }

  @media (max-width:380px){
    // border:2px solid red;
    width:380px;
    flex-direction: column;
    text-align: left;
    // display:none;
  }
`;

const Navbar = ({close, setClose}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  
  const handleHome = () => {
    navigate("/")
  }
  const isAuth = useSelector(state=>state.isAuth)
  const [auth,setAuth] = useState(isAuth)
  useEffect(() => {
    setAuth(isAuth)
  }, [])
  
  const dispatch = useDispatch()

  const handleLogOut = ()=>{
    dispatch(logoutAction())
    alert("logged out successfully")
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{padding:"1rem 0px"}}>
    
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Discover</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/StartProject" > Start Project </Link>
                </li>
            </ul>
            <ul style={{width:"20vw", position: "absolute", left: "50%", transform: "translate(-50%)", listStyle: "none"}}>
                <Logo>
                  <img onClick={handleHome} src={Kickstarter} alt="" />
                </Logo>
            </ul>
            <form className="d-flex">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                <SearchButton onClick={handleSearch} style={!open ? {display:"block"}:{display : "none"}}>Search <i className="fa-solid fa-magnifying-glass"></i></SearchButton>
                <SearchInput open={open} type="search" placeholder="Search for projects or categories"/>
                <SearchButton onClick={handleSearch} style={open ? {display:"block"}:{display : "none"}}><i className="fa-solid fa-xmark"></i></SearchButton>
            </form>
            <li className="nav-item" style={{listStyle: "none"}}>
           {isAuth?<button onClick={()=>handleLogOut()}>Logout</button>:<Link className="nav-link" to="/login">Log In</Link>} 
            </li>
            </div>
        </div>
        </nav>
        {
          !close && <Topic>
          <Link className="nav-link active" aria-current="page" to="/">Arts</Link>
          <Link className="nav-link active" aria-current="page" to="/">Comics & Illustration</Link>
          <Link className="nav-link active" aria-current="page" to="/">Design & Tech</Link>
          <Link className="nav-link active" aria-current="page" to="/">Film</Link>
          <Link className="nav-link active" aria-current="page" to="/">Food & Craft</Link>
          <Link className="nav-link active" aria-current="page" to="/">Games</Link>
          <Link className="nav-link active" aria-current="page" to="/">Music</Link>
          <Link className="nav-link active" aria-current="page" to="/">Publishing</Link>
        </Topic>
        }
    </>
  )
}

export default Navbar;