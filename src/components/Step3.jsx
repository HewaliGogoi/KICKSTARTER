import React, { useEffect } from "react";
import "./Style/startProject.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

function Step3() {
  let navigate = useNavigate();

  const [Arts, setArts] = React.useState([]);
  const [Artid, setArtId] = React.useState("");
  const [Comics, setComics] = React.useState([]);

  useEffect(() => {
    const select = async () => {
      const req = await fetch("http://localhost:3004/Select");
      const getres = await req.json();
      console.log(getres);
      setArts(await getres);
    };

    select();
  }, [setArts]);

  const handleArt = (e) => {
    const getArtid = e.target.value;
    Artid(getArtid);
    e.preventDefault();
  };

  return (
    <>
      <div className="section">
        <h3>Last one - set a location for your project.</h3>
        <p className="primary_desc">
          Pick your country of legal residence if you’re raising funds as an
          individual. If you’re raising funds for a business or nonprofit,
          select the country where the entity’s tax ID is registered.
        </p>

        <div className="row dropdown">
          <div className="form-group col-md-4">
            <select
              name="Art"
              className="form-control"
              onChange={(e) => handleArt(e)}
            >
              <option
                className="btn-secondary dropdown-toggle dr"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select your country
              </option>
              {Arts.map((getArt) => {
                <option key={getArt.Artid} value={getArt.Artid}>
                  {getArt.cart}
                </option>;
              })}
            </select>
          </div>
              {/* <div>
              <p> who's eligible to run a Kickstarter project? </p>
              </div> */}
        </div>
        <hr />
            
        <Link className="nav-link active" aria-current="page" to="/Step2">
                Additional subcategory
                </Link>

        <button
          className="btn btn-dark sub-button"
          onClick={() => {
            navigate("/Step2");
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export { Step3 };
