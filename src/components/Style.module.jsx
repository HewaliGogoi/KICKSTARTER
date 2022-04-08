import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width:28%;
    background-color: white;
    gap: 30px;
    border: 1px solid #f7e9e9;
    margin: auto;
    margin-top: 70px;

`
export const Button = styled.button`
    background-color:#028858;
    color: white;
    width: 78%;
    border-radius: 2px;
    padding: 7px;
    border: none;
`
export const Button1 = styled.button`
    background-color:black;
    color: white;
    width: 78%;
    border-radius: 7px;
    padding: 7px;
    border: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
`
export const Button2 = styled.button`
    background-color: #39579A;
    color: #FFFFFF;
    width: 78%;
    border-radius: 2px;
    padding: 7px;
    border: none;
    margin: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const GetNotified = styled.p`
    color: #656969;
    font-size: small;
    
`
export const ReadMore = styled.p`
    color: #4C6CF8;
    margin-left: -60%;
    margin-top: -4%;
    cursor: pointer;
    font-weight:600;
    font-size:small;
`
export const LoginText = styled.h5`
    margin-left: -60%;
    font-size:x-large;
`

export const Checkbox = styled.p`
    margin-left: -50%;
`
export const EmailInput = styled.button`
    width: 78%;
    margin:10px;
`
export const PassInput = styled.button`
    width: 78%;
    margin:10px;
`
export const Forget_password = styled.p`
    margin-left: -47%;
    color: #152a88;
    cursor: pointer;
    font-weight: 500;
    font-size:small;
`
export const NewTo = styled.p`
    color: black;
    font-size: medium;
`
export const SignUpText = styled(Link)`
     color: #156288;
     cursor: pointer;
     display: inline-block;
     text-decoration : none;
`

export const P = styled(Link)`
     color: #1a38e0;
     cursor: pointer;
     display: inline-block;
     font-weight: 500;
`
export const Checkbox1 = styled.p`
    margin-left: 1%;
    font-weight: 400;
`
export const Checkbox2 = styled.p`
    margin-left: 1%;
    font-weight: 400;

`
export const StyledInput = styled.input` 
    width: 78%;
    padding: 8px;
    margin: 5px;
    border:1px solid lightgray;
 `
 export const Footer_headings = styled.div`
  border : 1px solid #cecece;
  display : flex;
  justify-content : left;
  padding: 10px 10%;
  font-size: 13px;
  

  a{
    color :black;
  }
  /* h3{
      display: none;
    
  } */

  @media (max-width:380px){
      flex-direction: column;
      text-align:left;    
  }
`
export const Footer_text_section = styled.div`
    display: flex;
    margin: 30px;
    column-gap: 13%;
    margin-left:22%;
    text-align: left;
    font-size: 13px;
    
    h6{
        margin-left: 16%;
    }
    @media (max-width:380px){
      flex-direction: row;
      text-align:left; 
      column-gap:4%;
      margin-left:3%;
      justify-content: space-between;
      font-size: 13px;
      
      ul{
          margin-right:-3px;
          padding-left: 0;
      }
      h6{
          margin-left:0;
      }
      .about-section{
          margin-left:5%;
      }

    }
`
export const Copyright = styled.span`
    float: left;
    padding-left:10%;
   
`

export const Social_media = styled.div`
    float: middle;
    margin-right: 10%;
    i{
        margin-left: 20px;
        color: black;
    }

    @media(max-width:380px) {
        margin-right:0;
        
        div{
            width: 50%;
            margin-top: 10%;
            padding-bottom:8%;
        }
        i{
            width: 10%;
            height: 30px;
            margin-top:10px;
        }
    }
`
export const Settings_section = styled.div`
    float: right;
    display: flex;
    gap: 10px;
    margin-right:18%;
    margin-top:-1.5%;
    border: transparent;
    cursor: pointer;

    @media(max-width:380px) {
        flex-direction: column;
        
        select{
            width:135%;
            margin-left:-20%;
            padding: 10px;
        }
    }
`
export const Footer_bottom = styled.div`
  border : 1px solid #cecece;
  display : flex;
  justify-content : left;
  padding: 15px 10%;
  width: 100%;
  margin-top: 10px;

  a{
    color :black;
    font-size: small;
  }

  @media(max-width:380px) {
   display: grid;
   grid-template-columns:auto auto ;
   grid-template-rows: auto;
   width: 100%;
   justify-content: space-between;
   
  }

`