import React, { useEffect } from "react";
import "./Style/startProject.css";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

function Step3() {
  let navigate = useNavigate();

  const [Country, setCountry] = React.useState([]);
  
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://hewali-fakeserver.herokuapp.com/Country");
    const getSelect = await res.json();
    console.log(getSelect);
    setCountry(await getSelect);
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
          <div
            className="form-group col-md-4">
            <select onChange={(e) => console.log(e.target.value)} name="Select" className="dropdownCountry form-control ">
              <option
                className="btn-secondary dropdown-toggle "
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                 Select your country
              </option>
              {Country.map((item) => {
                return <option key={item.id} value={item.cate}>{item.Cname}</option>;
              })}
            </select>
          </div>   
          {/* <div>
              <p> who's eligible to run a Kickstarter project? </p>
              </div> */}
        </div>
        <hr />
            
        <Link className="nav-link active categorybutton" aria-current="page" to="/Step2">
                ← Additional subcategory
                </Link>

        <button
          className="btn btn-dark sub-button"
          onClick={() => {
            navigate("/EditProject");
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
}

export { Step3 };
