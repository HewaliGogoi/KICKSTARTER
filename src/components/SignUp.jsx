import React,{useState} from "react";
import { Container } from './Style.module'
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userSignUp, setuserSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
        
    setuserSignUp({
        ...userSignUp,
        [name] : value
    })
  }
//   console.log(userSignUp)
  const handleSubmit = (e) => {

    e.prevenDefault();
     fetch(`http://localhost:3001/user`,{
         method:"POST",
         body:JSON.stringify(userSignUp),
         headers:{
             "content-type":"application/json"
         }
     })
  };

  const {name,email,password} = userSignUp;


  return (
    <div>
    <Container>
     <form onSubmit={handleSubmit}>
        <div>
            <h3>Sign up</h3>
            <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
            <br />
            <input type="text" placeholder="Email" name="email" value={email} onChange={handleChange}/>
            <br />
            <input type="text" placeholder="Re-enter email" name="email" value={email} onChange={handleChange}/>
            <br />
            <input type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
            <br /><br/>
            <input type="checkbox" /> <label htmlFor=""> Send me a weekly mix of handpicked projects, plus occasional Kickstarter news</label> <br/>
            <input type="checkbox" /> <label htmlFor=""> Contact me about participating in Kickstarter research</label>
           
        </div>
        <br/>

        <input type="submit"  value="Create account"/>
        <p>
          By signing up, you agree to our 
          <a href="#"> Privacy Policy,Cookie Policy <br/> </a> and 
          <a href="#"> Terms of Use.</a>
          <a href="#"> Read more</a>
        </p> or <br/>

        <input type="submit" value="Sign in with Apple" /><br/>
        <input type="submit" value="Continue with Facebook" /><br/>
        <label htmlFor="">Get notified when your friends back and launch projects. We'll never post anything on Facebook without your permission.</label>
        
     </form>
      {/* <Link to="/login"><button>Redirect to Login</button></Link> */}
      </Container>
    </div>
  );
};

export default SignUp;
