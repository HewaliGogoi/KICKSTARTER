import React from "react";
import "./Arts.css";
import {useNavigate} from "react-router-dom";

function Arts() {
  let navigate = useNavigate()

  return (
    <>
      <div className="FAQ1">
        <div className="ans1">
          From backyard performances to large public murals, thousands of arts
          projects have broken new ground, sparked meaningful dialogue, and
          given people the opportunity to share their work with the world.
        </div>
        <div className="ans2">
          <h5>Interested?</h5>
          <p className="start">
            Click start and get sketching. See how it looks. Then share it with
            your friends!
          </p>
          <button className="btn btn-secondary btn-lg" onClick={() => {navigate("/Step1")}}>Start a project</button>
          <p className="rights">
            We're here for you! Our Community Managers know all about running
            projects in each of our categories. Drop us a line about your
            project idea: art@kickstarter.com. Got questions about something
            else? Visit our Help center.
          </p>
        </div>
      </div>

      <div className="container">
        EXAMPLE ARTS PROJECTS
        <div className="row">
          <div className="col-sm">
            <img src="https://ksr-ugc.imgix.net/assets/011/536/188/8f61f3b115b209d585bfa98902aa9cf4_original.jpeg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463684144&auto=format&frame=1&q=92&s=fe7299df28edd806aaeef448ebec26b3" />
            <p>Touching Strangers: Photographs by Richard Renaldi</p>
          </div>
          <div className="col-sm">
            <img src="https://ksr-ugc.imgix.net/assets/012/360/277/29d4b2b3a0036e26afae564ed3803791_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463756761&auto=format&frame=1&q=92&s=98f1acc95af568d07260629fc56adbeb" />
            <p>Martha Graham Dance Company Presents: The Next 90!</p>
          </div>
          <div className="col-sm">
            <img src="https://ksr-ugc.imgix.net/assets/012/419/340/8a502f387797c03f24f67035d7d4cd47_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1463760324&auto=format&frame=1&q=92&s=20dd5eb32eb2046dac54d56fdcb4d683" />
            <p>ugo rondinone: seven magic mountains</p>
          </div>
          <div className="col-sm">
            <img src="https://ksr-ugc.imgix.net/assets/016/390/591/f8cc6b622812864accca4993bd9a50a3_original.jpg?ixlib=rb-4.0.2&crop=faces&w=608&h=342&fit=crop&v=1493123002&auto=format&frame=1&q=92&s=c23e6e66fa3ab408ef1a00ecaa832d66" />
            <p>Another Fucking Warhol Production</p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Arts };
