import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const QuoteWrapper = styled.div`
  padding:1.5rem;
`;

const BodyWrapper = styled.div`
  // border: 1px solid red;
  width:80vw;
  margin:auto;
`;

const Track = styled.div`
  // border: 1px solid grey;
  justify-content: space-around;
  align-items:center;
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

const Overview = styled.div`
  border: 1px solid brown;  
  display:flex;
`;

const FeaturedWrapper = styled.div`
  border-right: 1px solid #cecece;  
  justify-content:left;
  align-items:left; 
  // margin-left:-10%;
  width: 50%;
  padding-right: 4%;
  cursor:pointer;

  img{
    width: 100%;
  }
`;

const RecommendWrapper = styled.div`
  width:50%;
  padding-left: 4%;
  img{
    width:30%;
    margin:10px;
  }
`;

const Raiser = styled.div`
  height : 10px;
  background-color: #037362;
`;

const Home = () => {
  const [imgData, setImgData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   getData();
  }, []);
  
  const getData = () => {
    fetch(`http://localhost:3001/project`)
    .then((data) => data.json())
    // .then((data) => console.log(data))
    .then((data) => {setImgData([...data])})
    console.log(imgData)
  }

  const handleImage = () => {
    navigate("/projects")
  }

  return (
    <>
      <QuoteWrapper>
        <h1>Creative work shows us what’s possible.</h1>
        <h1>Help fund it here.</h1>
      </QuoteWrapper>
      <BodyWrapper>
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
        <Overview>
          <FeaturedWrapper>
            <p>FEATURED PROJECT</p>
            <img onClick={handleImage} src="https://ksr-ugc.imgix.net/assets/036/376/565/baf56221a9a9e48409de65c6f4eec67c_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1644987976&auto=format&frame=1&q=92&s=c1153462ed6ce402483846711c2c79b9" alt="" />
            <Raiser></Raiser>
            <h3>Where We Go Together or The Flashlight Play</h3>
            <h6>Free, immersive, puppets. You & three kids break into a theater to do a play in the dark.</h6>
            <p>By Kevin Michael Wesson</p>
          </FeaturedWrapper>
          <RecommendWrapper>
            <p>RECOMMENDED FOR YOU</p>
            {
              imgData.map((e) => <div key={e.id}>
                <div style={{display:"flex"}}>
                  <img src={e.image} alt="" />
                  <div>
                    <p>{e.title}</p>
                  </div>
                </div>
              </div>)
            }
          </RecommendWrapper>
        </Overview>
      </BodyWrapper>

    </>
  )
}

export default Home;