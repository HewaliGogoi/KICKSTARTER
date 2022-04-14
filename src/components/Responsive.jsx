import React, { Component, useState, useEffect} from "react";
import styled from "styled-components";
import { Raiser } from "./Home";

const Carousel = styled.div`
  // border:2px solid green;
  width:300px;
  height:100%;
  margin-right:2%;
  text-align:left;

  img{
    // border:1px solid red;
    // height:100%;
    width:300px;
  }
`;

const Slider = styled.div`
  // border:2px solid red;
  width:100%;
  display:flex;
  overflow-x: scroll;
  scroll-behavior:smooth;
  height:500px;
  margin-top:3%;
  &::-webkit-scrollbar{
    display:none;
  }
`;

const Header = styled.div`
  @media (max-width: 380px){
    // border:2px solid black;
    width:300px;
    text-align:left;

    div:first-child{
      // border:2px solid green;
      // width:0px;
      flex-direction:column;
    }
  }
`;

const Responsive =() =>{
 
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500
    };
    
    const [cImage, setCImage] = useState([]);
    const [cImage1, setCImage1] = useState([]);
    
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      getCdata();
      getCdata1();
    }, []);
    
    const getCdata = () => {
        fetch(`https://hewali-fakeserver.herokuapp.com/favourites`)
        .then((data) => data.json())
        .then((data) => {setCImage([...data])})
    }
    
    const getCdata1 = () => {
      fetch(`https://hewali-fakeserver.herokuapp.com/favourites1`)
      .then((data) => data.json())
      .then((data) => setCImage1([...data]))
    }

    let sc=document.getElementById("Carousel");
    const ScrollLeft = () => {
      if(sc.scrollLeft != 0){
        sc.scrollLeft -= 250;
        setScroll(sc.scrollLeft)
      }
    }

    
    const ScrollRight = () => {
      if(sc.scrollLeft != 1500){
        sc.scrollLeft += 250;
        setScroll(sc.scrollLeft)
      }
      // console.log(sc.scrollWidth);
    } 

    return (
      <div style={{position:"relative"}}>
          <Header style={{display:"flex", justifyContent:"space-between"}}>
              <div style={{display:"flex", width:"28%", justifyContent:"space-between"}}>
                <h6>FRESH FAVORITES</h6>
                <p style={{marginLeft:"2%"}}>Discover more <i className="fa-solid fa-chevron-right"></i></p>
              </div>
  
              <div style={{width:"10%", display:"flex", justifyContent:"space-between"}}>
                <button disabled = {scroll<=1} onClick={ScrollLeft} style={{borderRadius:"50%", border:"none", backgroundColor:"white"}}><i className="fa-solid fa-chevron-left"></i></button>
                <button disabled = {scroll>2750} onClick={ScrollRight} style={{borderRadius:"50%", border:"none", backgroundColor:"white"}}><i className="fa-solid fa-chevron-right"></i></button>
              </div>
          </Header>

        <Slider id="Carousel">
          {
            cImage.map((e)=> <Carousel key={e.id}>
              <div>
                <img src={e.image} alt="" />
                <Raiser style={{ zIndex:"2", width:`${((+e.fund)/(+e.goal))*100}%`}}/>
              </div>
              <div style={{padding:"10% 0%"}}>
                <h5>{e.title}</h5>
                <p style={{padding:"5% 0%"}}>{e.description}</p>
                <p>By {e.author}</p>
              </div>
            </Carousel>)
          }
        </Slider>
      </div>
    );
}

export default Responsive;