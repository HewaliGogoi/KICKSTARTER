import React,{useState} from "react";
import { P,Button, Button1, Button2, Container, Checkbox1, Checkbox2, GetNotified, ReadMore, LoginText,StyledInput} from './Style.module'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/action";


const Body = styled.div`
  background-color: whitesmoke;
`;

const SignUp = () => {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
    Repassword:"",
    ReEmail:""
  });
  const [list, setList] = useState([])
  const dispatch = useDispatch()
// console.log(dispatch)

  const navigate = useNavigate();

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
      fetch(`https://hewali-fakeserver.herokuapp.com/user`,{
         method:"POST",
         body:JSON.stringify(userSignUp),
         headers:{
             "content-Type":"Application/json"
         }
     })
     .then((res)=> (res.json())) 
      .then((res) => {
        let payload = {email:res.email, password:res.password}
        console.log(payload)
        dispatch(loginAction(payload))
        navigate("/login")
      })
  };

  const getData = () =>{
    fetch(`https://hewali-fakeserver.herokuapp.com/user`)
    .then((data)=>data.json())
    .then((data)=> {setList([...data])
      console.log(list)
    }) 
    navigate('/login');
  }

  const {name,email,password,Repassword,ReEmail} = userSignUp;
 

  return (
    <Body>
    <Container>
     <form onSubmit={handleSubmit} >
        <div>
           <>Have an account? <P to = "/login">Log in</P></>
           <hr />
           <LoginText>Sign up</LoginText>

            <StyledInput type="text" placeholder="Name" name="name" value={name} onChange={handleChange} required/>
            <br />
            <StyledInput onClick={handleShowEmail} type="text" placeholder="Email" name="email" value={email} onChange={handleChange} required/>
            {/* <br /> */}
            {show?<StyledInput  type="text" placeholder="Re-enter email" name="ReEmail" value={ReEmail} onChange={handleChange}/>:""}
            <br />
            <StyledInput onClick={handlePass}   type="password" placeholder="Password" name="password" value={password} onChange={handleChange} required/>
            {pass?<StyledInput type="text"  placeholder="Re-enter password" name="Repassword" value={Repassword} onChange={handleChange}/>:""}

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
      
      </Container>
    </Body>
  );
};

export default SignUp;
