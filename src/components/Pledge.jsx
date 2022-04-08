import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const PledgeWrapper = styled.div`
    display:flex;
`;

const Summary = styled.div`
    width:49%;
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
    const id = useParams();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch(`http://localhost:3001/project/${id}`)
        .then((res) => res.json())
        .then((res)=>console.log(res))
    } 
  return (
    <PledgeWrapper>
        <Summary>
            <h3>Pledge summary</h3>
            <p>We won’t charge you at this time. If the project reaches its funding goal, your payment method will be charged when the campaign ends. You’ll receive a confirmation email at hewaligogoi22@gmail.com when your pledge is successfully processed.</p>
            <h5>Your pledge</h5>
            <p>US$<input type="text" name="amount" placeholder="Enter your amount"/></p>
            <h6>Total amount <h6></h6> </h6>
        </Summary>
        <Payment>
            <Box htmlFor="">
                Card number
                <input type="text" placeholder="Card number" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <Box htmlFor="">
                Cardholder name
                <input type="text" placeholder="Cardholder name" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Box htmlFor="" style={{width:"50%"}}>
                    Expiration
                    <input type="text" placeholder="MM/YY" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
                </Box>
                <Box htmlFor="" style={{width:"50%"}}>
                    Security code
                    <input type="text" placeholder="CVC" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
                </Box>
            </div>
            <Box htmlFor="">
                Zip/Postal code
                <input type="text" placeholder="Zip/Postal code" style={{fontStyle:"italic", border:"1px solid #cecece", padding:"2%", margin:"1%"}}/>
            </Box>
            <button style={{width:"100%", padding:"2%", backgroundColor:"#037362", color:"white"}}>Pledge</button>
        </Payment>
    </PledgeWrapper>
  )
}

export default Pledge;