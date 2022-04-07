import React, { useEffect } from "react";
import "./Style/startProject.css";
import {useNavigate} from "react-router-dom";


function Step1() {

  let navigate = useNavigate()
  
  const [Arts, setArts] = React.useState([]);
  const [Artid, setArtId] = React.useState("");
  const [Comics, setComics] = React.useState([]);

  useEffect(() => {
    const select = async () => {
      const req = await fetch("http://localhost:3004/Select");
      const getres = await req.json();
      console.log(getres);
      setArts(await getres); 
    }

    select();

  }, [setArts]);

  const handleArt = (e) => {
    const getArtid = e.target.value;
    Artid(getArtid);
    e.preventDefault();
  }

  return (
    <>
      <div className="section">
        <h3>First, let’s get you set up.</h3>
        <h4 className="primary">Select a primary category and subcategory for your new project.</h4>
        <p className="primary_desc">
          These will help backers find your project, and you can change them
          later if you need to.
        </p>
        
        <div className="row dropdown">
          <div className="form-group col-md-4">
            <select name="Art" className="form-control" onChange={(e) => handleArt(e)}>
              <option className="btn-secondary dropdown-toggle dr" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</option>
              {
                Arts.map((getArt) => {
                  <option key={getArt.Artid} value={getArt.Artid}>{getArt.cart}</option>
                })
              }
            </select>
          </div>

          <div className="form-group col-md-4">
            <select name="Art" className="form-control" onChange={(e) => handleArt(e)}>
              <option className="btn-secondary dropdown-toggle dr" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select</option>
              {
                Arts.map((getArt) => {
                  <option key={getArt.Artid} value={getArt.Artid}>{getArt.cart}</option>
                })
              }
            </select>
          </div>
        </div>
        <hr />
        <button className="btn btn-dark sub-button" onClick={() => {navigate("/Step2")}}>Next: Additional subcategory</button>
      </div>
    </>
  );
}

export { Step1 };
