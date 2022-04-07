import React, { Component, useState } from "react";
//import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      speed: 500
    };

    // const [cpage, setCpage] = useState(1);
    // const [cImage, setCImage] = useState([]);

    // const getCdata = () => {
    //     fetch(`http://localhost:3001/project?_page=${cpage}&_limit=5`)
    //     .then((data) => data.json())
    //     .then((data) => setCImage([...data]))
    // }

    return (
      <div style={{position:"relative"}}>
        <button style={{position:"absolute", left:0}}><i className="fa-solid fa-chevron-left"></i></button>
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
        <button style={{position:"absolute", right:0, top:"50%"}}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    );
  }
}