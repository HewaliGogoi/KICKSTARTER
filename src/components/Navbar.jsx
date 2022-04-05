import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.div`
  border : 2px solid #cecece;
  margin: auto;
`;

const Topic = styled.div`
  border : 2px solid #cecece;
  display : flex;
  justify-content : center;
  padding: 10px 0px;

  a{
    color : #656969;
  }
`;

const Navbar = () => {
  return (
    <> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            
            <Logo>
              {/* <Kickstarter_logo/> */}
              <Link className="navbar-brand" to="/">KickStarter</Link>
            </Logo>
            <form className="d-flex">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <li className="nav-item">
            <Link className="nav-link" to="/Login">Log In</Link>
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