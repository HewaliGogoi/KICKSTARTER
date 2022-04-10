import React, { useEffect } from "react";
import "./Style/startProject.css";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


function Step2() {
  let navigate = useNavigate()
  const [Select, setSelect] = React.useState([]);
  
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://hewali-fakeserver.herokuapp.com/select");
    const getSelect = await res.json();
    console.log(getSelect);
    setSelect(await getSelect);
  };

  return (
    <>
      <div className="section">
        <h3>Select one more subcategory.</h3>
        <p className="primary_desc">
            It'll help us provide more relevant guidance for your project
        </p>
        
        <div className="row dropdown">
          <div
            className="form-group col-md-4">
            <select onChange={(e) => console.log(e.target.value)} name="Select" className="form-control dropdown1">
              <option
                className="btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                 Select 
              </option>
              {Select.map((item) => {
                return <option key={item.id} value={item.cate}>{item.cate}</option>;
              })}
            </select>
          </div>

          <div className="form-group col-md-4">
            <select
              name="Art"
              className="form-control dropdown2"
              >
              <option
                className="btn-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                disabled="disabled"
                Selected = "- Select -"
              >
                Select
              </option>
              <option> -- No Subcategory--</option>
              <option> Ceramics </option>
              <option> Conceptual Art </option>
              <option> Digital Art </option>
              <option> Illustration </option>
              <option> Installation </option>
              <option> Mixed Media </option>
              <option> painting </option>
              <option> Performance Art </option>
              <option> Public Art </option>
              <option> Sculpture </option>
              <option> Social Practice </option>
              <option> Textiles </option>
              <option> Video Art </option>
            </select>
          </div>
        </div>
        <hr />
        
        <Link className="nav-link active categorybutton" aria-current="page" to="/Step1">
                ←Category
                </Link>
        <button className="btn btn-dark sub-button" onClick={() => {navigate("/Step3")}}>Next: Location</button>
      </div>
    </>
  );
}

export { Step2 };
