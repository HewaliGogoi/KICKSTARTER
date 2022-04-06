import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
<<<<<<< HEAD
=======
import Kickstarter from './Kickstarter.svg';
>>>>>>> main

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
`;

const Topic = styled.div`
  border : 1px solid #cecece;
  display : flex;
  justify-content : center;
  padding: 10px 0px;

  a{
    color : #656969;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  const handleHome = () => {
    navigate("/")
  }

  return (
<<<<<<< HEAD
    <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
=======
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{padding:"1rem 0px"}}>
>>>>>>> main
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
                <Link className="nav-link active" aria-current="page" to="/startProject"> Start Project </Link>
                </li>
            </ul>
<<<<<<< HEAD
            
            <Logo>
              {/* <Kickstarter_logo/> */}
              <Link className="navbar-brand" to="/">KickStarter</Link>
            </Logo>
=======
            <ul style={{width:"20vw", position: "absolute", left: "50%", transform: "translate(-50%)", listStyle: "none"}}>
                <Logo>
                  <img onClick={handleHome} src={Kickstarter} alt="" />
                </Logo>
            </ul>
>>>>>>> main
            <form className="d-flex">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                <SearchButton onClick={handleSearch} style={!open ? {display:"block"}:{display : "none"}}>Search <i className="fa-solid fa-magnifying-glass"></i></SearchButton>
                <SearchInput open={open} type="search" placeholder="Search for projects or categories"/>
                <SearchButton onClick={handleSearch} style={open ? {display:"block"}:{display : "none"}}><i className="fa-solid fa-xmark"></i></SearchButton>
            </form>
<<<<<<< HEAD
            <li className="nav-item">
            <Link className="nav-link" to="/Login">Log In</Link>
=======
            <li className="nav-item" style={{listStyle: "none"}}>
            <Link className="nav-link" to="/login">Log In</Link>
>>>>>>> main
            </li>
            </div>
        </div>
        </nav>
        <Topic>
          <Link className="nav-link active" aria-current="page" to="/">Arts</Link>
          <Link className="nav-link active" aria-current="page" to="/">Comics & Illustration</Link>
          <Link className="nav-link active" aria-current="page" to="/">Design & Tech</Link>
          <Link className="nav-link active" aria-current="page" to="/">Film</Link>
          <Link className="nav-link active" aria-current="page" to="/">Food & Craft</Link>
          <Link className="nav-link active" aria-current="page" to="/">Games</Link>
          <Link className="nav-link active" aria-current="page" to="/">Music</Link>
          <Link className="nav-link active" aria-current="page" to="/">Publishing</Link>
        </Topic>
    </>
  )
}

export default Navbar;