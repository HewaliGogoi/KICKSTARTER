import React,{useEffect} from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {loginAction} from '../redux/action'
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Button1,
  Button2,
  GetNotified,
  ReadMore,
  Checkbox,
  LoginText,
  Forget_password,
  NewTo,
  SignUpText,
  StyledInput,
} from "./Style.module";

import { Container } from "./Style.module";

const Body = styled.div`
  background-color: whitesmoke;
`;

const Login = () => {
  const [formDetails, setFormDetails] = React.useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };
  const auth = useSelector(state=>state.isAuth)
  // console.log(auth)

  useEffect(() => {
    auth?navigate("/"):navigate("/login")
  }, [])
  

  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction(formDetails))
  };


  const { email, password } = formDetails;
  return (
    <Body>
      <Container>
        <form onSubmit={handleSubmit}>
          <LoginText>Log in</LoginText>
          <StyledInput
              type="text"
              placeholder="Email"
              value={email}
              name = "email"
              onChange={handleChange}
              required
            />
          <br />

          <StyledInput
              type="password"
              placeholder="password"
              value={password}
              name = "password"
              onChange={handleChange}
              required
            />
          
          <br />
          <Forget_password>Forgot your password?</Forget_password>
          <Button >Log in</Button> <br />
          <Checkbox>
            {" "}
            <input type="checkbox" /> Remember me
          </Checkbox>{" "}
          or <br />
          <Button1>
            <i className="fa-brands fa-apple"> Sign in with Apple</i>
          </Button1>
          <br />
          <Button2>
            <i className="fa-brands fa-facebook-square"></i> Continue with Facebook
          </Button2>
          <br />
          <GetNotified>
            Get notified when your friends back and launch projects.
            <br /> We'll never post anything on Facebook without your
            permission.
          </GetNotified>
          <ReadMore> Read more </ReadMore>
          <hr />
          <NewTo>
            New to Kickstarter? <SignUpText to = "/signup"> Sign up</SignUpText>
          </NewTo>
          <hr />
          <GetNotified>
            This site is protected by reCAPTCHA and the Google
            <a href="#">
              {" "}
              Privacy Policy
              <br />{" "}
            </a>{" "}
            and
            <a href="#"> Terms of service</a> apply.
          </GetNotified>
        </form>
      </Container>
    </Body>
  );
};

export default Login;
