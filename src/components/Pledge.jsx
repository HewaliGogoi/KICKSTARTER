import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <>
        <div style={{width:"50%"}}>
            <h3>Pledge summary</h3>
            <p>We won’t charge you at this time. If the project reaches its funding goal, your payment method will be charged when the campaign ends. You’ll receive a confirmation email at hewaligogoi22@gmail.com when your pledge is successfully processed.</p>
        </div>
        <div></div>
    </>
  )
}

export default Pledge;