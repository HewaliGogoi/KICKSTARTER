import React, { Component, useState, useEffect} from "react";
import styled from "styled-components";
const Carousel = styled.div`
  // border:2px solid red;
  width:300px;
  height:170px;
  margin-right:2%;

  img{
    // border:1px solid red;
    height:80%;
    width:300px;
  }
`;

const Slider = styled.div`
  width:100%;
  display:flex;
  overflow-x: scroll;
  scroll-behavior:smooth;
  &::-webkit-scrollbar{
    display:none;
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
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      getCdata();
    }, []);
    
    const getCdata = () => {
        fetch(`http://localhost:3001/favourites`)
        .then((data) => data.json())
        .then((data) => setCImage([...data]))
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
    
    // const scw = sc.scrollWidth;

    return (
      <div style={{position:"relative"}}>
          <div>
              <h6>FRESH FAVORITES</h6>
              <p>Discover more <i className="fa-solid fa-chevron-right"></i></p>
              <div>
                <button disabled = {scroll<250} onClick={ScrollLeft}><i className="fa-solid fa-chevron-left"></i></button>
                <button disabled = {scroll>1500} onClick={ScrollRight}><i className="fa-solid fa-chevron-right"></i></button>
              </div>
          </div>


        <Slider id="Carousel">
          {
            cImage.map((e)=> <Carousel key={e.id}>
              <img src={e.image} alt="" />
              <h5>{e.title}</h5>
            </Carousel>)
          }
        </Slider>
      </div>
    );
}

export default Responsive;