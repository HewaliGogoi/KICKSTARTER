import React from "react";
import styled from 'styled-components'

import { Container } from "./Style.module";

const Body = styled.div`
    background-color: whitesmoke;
`
const Login = () => {
  const [formDetails, setFormDetails] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  const { email, password } = formDetails;
  return (
    <Body>
      <Container>
        <form onSubmit={handleSubmit}>
          <h3>Log in</h3>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
          <br />
          <a href="#"> Forgot your password?</a>
          <br />
          <br />
          <button>Log in</button> <br />
          <input type="checkbox" />
          <label htmlFor="">Remember me</label>
          <br />
          or <br />
          <button><i className="fa-brands fa-apple">Sign in with Apple</i></button>
          <br />
          <input type="submit" value="Continue with Facebook" />
          <br />
          <label htmlFor="">
            Get notified when your friends back and launch projects. We'll never
            post anything on Facebook without your permission.
          </label>
          <a href="#"> Read more</a>
          <hr />
          <label htmlFor="">New to Kickstarter?</label> <a href="#"> Sign up</a>
          <hr />
          <p>
            This site is protected by reCAPTCHA and the Google
            <a href="#">
              {" "}
              Privacy Policy
              <br />{" "}
            </a>{" "}
            and
            <a href="#"> Terms of service</a> apply.
          </p>
        </form>
      </Container>
    </Body>
  );
};

export default Login;
