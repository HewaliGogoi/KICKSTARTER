import React,{useState} from "react";
import { P,Button, Button1, Button2, Container, Checkbox1, Checkbox2, GetNotified, ReadMore, LoginText,StyledInput} from './Style.module'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Body = styled.div`
  background-color: whitesmoke;
  border: 1px solid red;
`;

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [list, setList] = useState([])

  const [show, setShow] = useState(false)
  const handleShowEmail = () =>{
    setShow(!show)
  }

  const [pass, setPass] = useState(false)
  const handlePass = () =>{
    setPass(!pass)
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
        console.log(e.target.value)
    setUserSignUp({
        ...userSignUp,
        [name] : value
    })

  }
//   console.log(userSignUp)
  const handleSubmit = (e) => {

    e.preventDefault();
      fetch(`http://localhost:3001/user`,{
         method:"POST",
         body:JSON.stringify(userSignUp),
         headers:{
             "content-type":"Application/json"
         }
     }).then(()=> getData()) ;
  };

  const getData = () =>{
    fetch(`http://localhost:3001/user`)
    .then((data)=>data.json())
    .then((data)=> {setList([...data])
      console.log(list)
    }) 
    
  }

  const {name,email,password} = userSignUp;


  return (
    <Body>
    <Container>
     <form onSubmit={handleSubmit} >
        <div>
           <>Have an account? <P>Log in</P></>
           <hr />
           <LoginText>Sign up</LoginText>

            <StyledInput type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
            <br />
            <StyledInput onClick={handleShowEmail} type="text" placeholder="Email" name="email" value={email} onChange={handleChange}/>
            {/* <br /> */}
            {show?<StyledInput  type="text" placeholder="Re-enter email" name="email" value={email} onChange={handleChange}/>:""}
            <br />
            <StyledInput onClick={handlePass}   type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            {pass?<StyledInput type="text"  placeholder="Re-enter password" name="email" value={password} onChange={handleChange}/>:""}

            <br /><br/>
            <Checkbox1><input type="checkbox" /> Send me a weekly mix of handpicked projects,<br/> plus occasional Kickstarter news </Checkbox1>
            <Checkbox2><input type="checkbox" />  Contact me about participating in Kickstarter<br/> research</Checkbox2>
           
        </div>

        <Button type="Submit">Create account</Button>
        <GetNotified>
          By signing up, you agree to our 
          <a href="#"> Privacy Policy,Cookie Policy <br/> </a> and 
          <a href="#"> Terms of Use.</a>
          <a href="#"> Read more</a>
        </GetNotified> <p>or</p>
          <Button1>
            <i className="fa-brands fa-apple"> Sign in with Apple</i>
          </Button1>
          <br />
          <Button2>
            <i className="fa-brands fa-facebook-square"></i> Continue with Facebook
          </Button2>
        <GetNotified >Get notified when your friends back and launch projects. We'll never post anything on Facebook without your permission. </GetNotified>
        <ReadMore> Read more </ReadMore>
        
     </form>
      {/* <Link to="/login"><button>Redirect to Login</button></Link> */}
      </Container>
    </Body>
  );
};

export default SignUp;
