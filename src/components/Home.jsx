import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Responsive from './Responsive';
import right from './right.jpeg';
import left from './left.jpeg';
import Announce_logo from './Announce_logo.png';

const HomeWrapper = styled.div`
  border: 1px solid green;
  ${'' /* padding: 0px 5%; */}
    
`;

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
  background-color:white;
  
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
  text-align:left;               
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
  text-align:left;               

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
  border-bottom: 1px solid #cecece;  
  display:flex;
  padding:5% 10%;

  img{
    // border: 1px solid red;
    width:50%;
    height:250px;
  }
`;

const Favourites = styled.div`
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
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
      <div style={{position:"relative"}}>
        <img src={right} style={{position:"absolute", left:0, width:"150px", top:"30px"}} alt="" />
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
        <img src={left} style={{position:"absolute", right:0, width:"200px", top:"30px", zIndex:"-10"}} alt="" />
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
            <img src={Announce_logo} alt="" />
            <div style={{textAlign:"left", marginLeft:"2%"}}>
              <div style={{borderLeft: "7px solid #037362", paddingLeft:"2%"}}>
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
            <div style={{textAlign:"left", marginLeft:"2%"}}>
              <div style={{borderLeft: "7px solid #037362", paddingLeft:"2%"}}>
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