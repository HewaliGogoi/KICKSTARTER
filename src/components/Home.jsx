import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
//import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import Responsive from './Responsive';

const HomeWrapper = styled.div`
  border: 1px solid green;
  padding: 0px 5%;
    
`;
// import ReactPlayer from 'react-player';

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
  justify-content: center;
  align-items:center;
  display:flex;
  box-shadow: 0px 1px 5px 0px #cecece;
  width:80%;
  margin:auto;
  
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
  // border: 1px solid brown;  
  display:flex;
  padding: 3% 0px;
`;
  
  const FeaturedWrapper = styled.div`
  border-right: 1px solid #cecece;  
  justify-content:left;
  align-items:left;                   
  // margin-left:-10%;
  width: 50%;
  padding: 2% 0px;
  padding-right: 4%;
  cursor:pointer;

  img{
    width: 100%;
  }
`;

const RecommendWrapper = styled.div`
  width:50%;
  padding: 2% 0px;
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

const Announcement = styled.div`
  border-top: 1px solid #cecece;
  border-border: 1px solid #cecece;  
  display:flex;
  padding:5% 10%;

  img{
    width:50%;
    height:200px;
  }
`;

const Favourites = styled.div`
  border-top: 1px solid #cecece;
  border-border: 1px solid #cecece;
  padding:5% 10%;
`;

const Interview = styled.div`
  border: 1px solid red;
`;

const Home = () => {
  const [imgData, setImgData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [interview, setInterview] = useState(1);

  useEffect(() => {
   getData();
  }, [page]);

  // useEffect(() => {
  //   getDataInterview();
  //  }, []);
  
  const getData = () => {
    fetch(`http://localhost:3001/project?_page=${page}&_limit=3`)
    .then((data) => data.json())
    // .then((data) => console.log(data))
    .then((data) => {setImgData([...data]);
      console.log(data)})
    
  }

  // const getDataInterview = () => {
  //   fetch(`http://localhost:3001/interview`)
  //   .then((data) => data.json())
  //   .then((data) => console.log(data))
  //   .then((data) => {setInterview([...data])})
  // }

  const handleImage = () => {
    navigate("/projects")
  }

  return (
    <HomeWrapper>
      <div>
        <img src={"./public/right.jpeg"} alt="" />
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
        </div>
      </div>
      <BodyWrapper>
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
                <div style={{display:"flex", borderBottom:"1px solid #cecece"}}>
                  <img src={e.image} alt="" />
                  <div>
                    <h6>{e.title}</h6>
                    <p>By {e.author}</p>
                  </div>
                </div>
              </div>)
            }
            <div style = {{display : "flex"}}>
              <button disabled={page==1} onClick={()=>setPage(page-1)} style = {{borderRadius:"50%", width:"6%", height:"30px"}}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <p onClick={()=>setPage((prev)=>prev = 1)}>1</p>
              <p onClick={()=>setPage((prev)=>prev = 2)}>2</p>
              <p onClick={()=>setPage((prev)=>prev = 3)}>3</p>
              <button disabled={page==3} onClick={()=>setPage(page+1)} style = {{borderRadius:"50%", width:"6%", height:"30px"}}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </RecommendWrapper>
        </Overview>
      </BodyWrapper>
        <Announcement>
            <img src="data:image/jpeg;base64,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" alt="" />
            <div>
              <div style={{borderLeft: "7px solid #037362", marginLeft:"5%"}}>
                <h3>Announcing the Kickstarter Community Advisory Council</h3>
                <h5>We’re looking to work with creators from across creative disciplines to make Kickstarter the best it can be.</h5>
              </div>
              <a href="">Learn more and apply</a>
            </div>
        </Announcement>
        <Favourites>
          <Responsive/>
        </Favourites>
        <Announcement>
            <img src="https://berkeleybeacon.com/wp-content/uploads/2022/03/Screen-Shot-2022-03-01-at-1.06.08-PM.png" alt="" />
            <div>
              <div style={{borderLeft: "7px solid #037362", marginLeft:"5%"}}>
                <h3>Long Story Short</h3>
                <h5>Throughout March, we're featuring campaigns by brilliant, subversive, playful, and creatively ambitious filmmakers—and we want you to join us. To take part, back a short film to help bring it to life.</h5>
              </div>
              <a href="">Find out more</a>
            </div>
        </Announcement>
        <Interview>
          {/* {
            interview.map((e) => <div key={e.id}>
              <div style={{display:"flex"}}>
                <img src={e.image} alt="" />
                <div>
                  <h6>{e.about}</h6>
                </div>
              </div>
            </div>)
          } */}
        </Interview>
    </HomeWrapper>
  )
}

export default Home;