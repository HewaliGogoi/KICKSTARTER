import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

const PledgeWrapper = styled.div`
    display:flex;
`;

const Summary = styled.div`
    width:49%;
    text-align:left;
    padding: 4% 4%;
`;

const Payment = styled.form`
    width:49%;
    background-color: #F6F2EB;
    padding: 2% 5%;
    text-align:left;
`;

const Box = styled.label`
    display:flex;
    flex-direction:column;
    // border:2px solid red;
    padding-bottom:2%;
`;

const Pledge = () => {
    // const id = useParams();

    const [details, setDetails] = useState({
        cardnumber : "",
        cardholdername : "",
        date : "",
        cvc :"",
        pin : ""
    })

    const navigate = useNavigate();

    const handleChange =(e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setDetails({
            ...details,
            [name] : value
        })
        console.log(details)
    }

    const handlePledge = (e) => {
        e.preventDefault();

        localStorage.setItem("payment", JSON.stringify(details))
        alert("Thank you for Pledging!")
        navigate("/");
    }

    const {cardholdername, cardnumber, date, cvc, pin} = details;
    const [amount, setAmount] = useState(0);

    const handleAmount =(e)=>{
        setAmount(e.target.value);
    }

  return (
    <PledgeWrapper>
        <Summary>
            <h3>Pledge summary</h3>
            <p>We won’t charge you at this time. If the project reaches its funding goal, your payment method will be charged when the campaign ends. You’ll receive a confirmation email at hewaligogoi22@gmail.com when your pledge is successfully processed.</p>
            {/* <div style={{display:"flex"}}>
                <img src={single.image} style ={{width:"30%"}}alt="" />
                <div style={{paddingLeft:"5%"}}>
                    <h6>{single.title}</h6>
                    <p>By {single.author}</p>
                </div>
            </div> */}
            <h5 style={{paddingTop:"5%"}}>Your pledge</h5>
            <p style={{margin:"5% 0%"}}>US$<input onChange={handleAmount} type="text" name="amount" value={amount} placeholder="Enter your amount"/></p>
            <h6 style={{borderTop:"1px solid #cecece"}}>Total amount {amount}</h6>
        </Summary>
        <Payment>
            <Box htmlFor="">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <h6>Card number</h6>
                    <img style= {{width:"10%"}} src="https://www.nicepng.com/png/detail/54-542683_credit-card-pay-now-visa-and-mastercard-accepted.png" alt="" />
                </div>
                
                <input type="text" onChange={handleChange} name="cardnumber" value={cardnumber} placeholder="Card number" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <Box htmlFor="">
                Cardholder name
                <input type="text" onChange={handleChange} name="cardholdername" value={cardholdername} placeholder="Cardholder name" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Box htmlFor="" style={{width:"50%"}}>
                    Expiration
                    <input type="date" onChange={handleChange} name="date" value={date} placeholder="MM/YY" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
                </Box>
                <Box htmlFor="" style={{width:"50%"}}>
                    Security code
                    <input type="text" onChange={handleChange} name="cvc" value={cvc} placeholder="CVC" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
                </Box>
            </div>
            <Box htmlFor="">
                Zip/Postal code
                <input type="text" onChange={handleChange} name="pin" value={pin} placeholder="Zip/Postal code" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <button style={{width:"100%", padding:"2%", backgroundColor:"#037362", color:"white"}} onClick={handlePledge}>Pledge</button>
        </Payment>
    </PledgeWrapper>
  )
}

export default Pledge;