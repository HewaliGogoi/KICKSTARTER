import React from 'react';
import styled from 'styled-components';

const QuoteWrapper = styled.div`
  padding:1.5rem;
`;

const Track = styled.div`
  // border: 1px solid grey;
  justify-content: space-around;
  align-items:center;
  width:80vw;
  margin:auto;
  display:flex;
  box-shadow: 0px 1px 5px 0px #cecece;
  
  div{
    border: 1px solid #cecece;
    width: 27vw;
    padding:0.7rem;
    
    h1{
      color:#037362;
    }
    p{
      color:grey;
    }
  }
`;

const Home = () => {
  return (
    <>
      <QuoteWrapper>
        <h1>Creative work shows us what’s possible.</h1>
        <h1>Help fund it here.</h1>
      </QuoteWrapper>
      <div>
        <p style={{color:"grey"}}>WITHIN THE LAST DAY</p>
        <Track>
          <div>
              <h1>54</h1>
              <p>projects funded</p>
          </div>
          <div>
              <h1>$1,629,435</h1>
              <p>towards creative work</p>
          </div>
          <div>
              <h1>15,035</h1>
              <p>backings</p>
          </div>
        </Track>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>

    </>
  )
}

export default Home;