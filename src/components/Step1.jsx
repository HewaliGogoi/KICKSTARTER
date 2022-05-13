import React, { useEffect } from "react";
import "./Style/startProject.css";
import { useNavigate } from "react-router-dom";

function Step1({setClose, setCloseF}) {

  let navigate = useNavigate();
  const [Select, setSelect] = React.useState([]);

  useEffect(() => {
    getData();
    setClose(true)
    setCloseF(true)
  }, []);
  

  const getData = async () => {
    const res = await fetch("https://hewali-fakeserver.herokuapp.com/Select");
    const getSelect = await res.json();
    console.log(getSelect);
    setSelect(await getSelect);
  };

  return (
    <>
      <div className="section">
        <h3>First, let’s get you set up.</h3>
        <h4 className="primary">
          Select a primary category and subcategory for your new project.
        </h4>
        <p className="primary_desc">
          These will help backers find your project, and you can change them
          later if you need to.
        </p>

        <div className="row dropdown">
          <div
            className="form-group col-md-4">
            <select onChange={(e) => console.log(e.target.value)} name="Select" className="form-control dropdown1">
              <option
                className="btn-secondary dropdown-toggle dr"
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
                className="btn-secondary dropdown-toggle dr"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                disabled={true}
                Selected = " Select "
                
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
        <button
          className="btn btn-dark sub-button"
          onClick={() => {
            navigate("/Step2");
          }}
        >
          Next: Additional subcategory
        </button>
      </div>
    </>
  );
}

export { Step1 };
