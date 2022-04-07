import React, { useEffect } from "react";
import "./Style/startProject.css";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


function Step2() {
    
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
        <h3>Select one more subcategory.</h3>
        <p className="primary_desc">
            It'll help us provide more relevant guidance for your project
        </p>
        
        <div className="row dropdown">
          <div className="form-group col-md-4">
            <select name="Art" className="form-control" onChange={(e) => handleArt(e)}>
              <option className="btn-secondary dropdown-toggle dr" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select a category</option>
              {
                Arts.map((getArt) => {
                  <option key={getArt.Artid} value={getArt.Artid}>{getArt.cart}</option>
                })
              }
            </select>
          </div>

          <div className="form-group col-md-4">
            <select name="Art" className="form-control" onChange={(e) => handleArt(e)}>
              <option className="btn-secondary dropdown-toggle dr" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select A Subcategory</option>
              {
                Arts.map((getArt) => {
                  <option key={getArt.Artid} value={getArt.Artid}>{getArt.cart}</option>
                })
              }
            </select>
          </div>
        </div>

        <hr />
        
        <Link className="nav-link active" aria-current="page" to="/Step1">
                Category
                </Link>
        <button className="btn btn-dark sub-button" onClick={() => {navigate("/Step3")}}>Next: Location</button>
      </div>
    </>
  );
}

export { Step2 };
