import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Responsive from './Responsive';
import right from './right.jpeg';
import left from './left.jpeg';
import Announce_logo from './Announce_logo.png';
import Pagination from './Pagination';

const HomeWrapper = styled.div`
  // border: 1px solid red;
  // padding: 0px 5%;

  @media (max-width:380px){
    p:first-child{
      // border: 1px solid red;
      padding-left:8%;
      font-size:90%;
      text-align:left;
    }
  }
`;
const BackImg = styled.img`
  @media (max-width:380px){
    display:none;
  }
`;

const QuoteWrapper = styled.div`
  padding:1.5rem;

  @media (max-width:380px){
    // border: 1px solid red;
    width:380px;
    h1{
      font-size:170%;
      text-align:left;
    }
  }
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

  @media (max-width:380px){
    // border: 1px solid red;
    width:380px;
    flex-direction:column;

    div{
      width:90%;
      margin:2px;
    }
  }
`;

const Overview = styled.div`
  // border: 1px solid brown;  
  display:flex;
  padding: 3% 0px;

  @media (max-width:380px){
    // border: 1px solid red;
    width:380px;
    margin-left:-35px;
    flex-direction:column;
    padding:0;
  }
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

  @media (max-width:380px){
    border-bottom: 1px solid #cecece;
    width:100%;

    img{
      // border: 1px solid yellow;
      margin:auto;
    }
  }
`;

const RecommendWrapper = styled.div`
  width:50%;
  padding: 2% 0px;
  padding-left: 4%;
  text-align:left;  
  
  @media (max-width:380px){
    border-bottom: 1px solid #cecece;
    // border: 1px solid yellow;
    width:100%;

    img{
      // border: 1px solid yellow;
      margin:auto;
    }
  }
`;

export const Raiser = styled.div`
  height : 7px;
  background-color: #037362;
  width:100%;
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

  @media (max-width:380px){
    // border-bottom: 1px solid #cecece;
    // border: 1px solid red;
    width:380px;
    flex-direction: column;
    padding: 20% 5%;
    
    img{
      // border: 1px solid yellow;
      width:100%;
      margin:auto;
      margin-bottom:5%;
    }
  }
`;

const Favourites = styled.div`
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  padding:5% 10%;

  @media (max-width:380px){
    // border: 1px solid red;
    width:380px;
    padding:10% 5%;
  }
`;

const Interview = styled.div`
  // border: 1px solid red;
  // display:flex;
  width:80%;
  height:600px;
  margin:auto;
  // box-sizing: border-box;
  text-align:left;

  @media (max-width:380px){
    // border: 1px solid red;
    width:380px;
    padding:5% 5%;
    height:400px;
  }
`;

const Box = styled.div`
  @media (max-width:380px){
    // border: 1px solid green;
    width:340px;
    // padding:5% 5%;
    // display:none;
    // padding:1%;

    div{
      // border:2px solid brown;
      // padding:1%;
      position:relative;
      
      img{
        // border:2px solid blue;
        width:10px;
        // position:absolute;
        height:100px !important;
      }
      h6{
        font-size:15px !important;
        // position:absolute;
        justify-content:center;
      }
    }

  }
`;

const Home = ({setClose, setCloseF}) => {
  const [imgData, setImgData] = useState([]);
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [interview, setInterview] = useState([]);

  useEffect(() => {
   getData();
  }, [page]);

  useEffect(() => {
    getDataInterview();
    setClose(false);
    setCloseF(false);
   }, []);
  
  const getData = () => {
    fetch(`https://hewali-fakeserver.herokuapp.com/project?_page=${page}&_limit=3`)
    .then((data) => data.json())
    // .then((data) => console.log(data))
    .then((data) => {setImgData([...data]);
      console.log(data)})
  }

  const getDataInterview = () => {
    fetch(`https://hewali-fakeserver.herokuapp.com/interview`)
    .then((data) => data.json())
    .then((data) => setInterview([...data]))
  }

  const handleImage = (e) => {
    // console.log(e)
    navigate(`/projects/${e}`);
  }

  return (
    <HomeWrapper>
      <div style={{position:"relative"}}>
        <BackImg src={right} style={{position:"absolute", left:0, width:"150px", top:"30px", zIndex:"-10"}} alt="" />
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
        <BackImg src={left} style={{position:"absolute", right:0, width:"200px", top:"30px", zIndex:"-10"}} alt="" />
      </div>
      <BodyWrapper>
        <Overview>
          <FeaturedWrapper>
            <p style={{color:"#656977"}}>FEATURED PROJECT</p>
            <img src="https://ksr-ugc.imgix.net/assets/036/376/565/baf56221a9a9e48409de65c6f4eec67c_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1644987976&auto=format&frame=1&q=92&s=c1153462ed6ce402483846711c2c79b9" alt="" />
            <Raiser style={{width:"30%"}}></Raiser>
            <h3>Where We Go Together or The Flashlight Play</h3>
            <h6>Free, immersive, puppets. You & three kids break into a theater to do a play in the dark.</h6>
            <p>By Kevin Michael Wesson</p>
          </FeaturedWrapper>
          <RecommendWrapper>
            <p style={{color:"#656977"}}>RECOMMENDED FOR YOU</p>
            {
              imgData.map((e) => <Pagination e={e} handleImage={handleImage}/>)
            }
            <div style = {{display : "flex", flex:"1", padding:"7%", position:"relative"}}>
              <div style={{display : "flex", justifyContent:"space-evenly", position:"absolute", right:"0", width:"40%"}}>
                <button disabled={page==1} onClick={()=>setPage(page-1)} style = {{borderRadius:"50%", width:"6%", height:"30px", border:"none", flex:"1", backgroundColor:"white"}}>
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <div style={{display: "flex", margin:"0% 2%", flex:"2", justifyContent:"space-evenly", cursor:"pointer"}}>
                  <p onClick={()=>setPage((prev)=>prev = 1)}>1</p>
                  <p onClick={()=>setPage((prev)=>prev = 2)}>2</p>
                  <p onClick={()=>setPage((prev)=>prev = 3)}>3</p>
                </div>
                <button disabled={page==3} onClick={()=>setPage(page+1)} style = {{borderRadius:"50%", width:"6%", height:"30px", border:"none", backgroundColor:"white", flex:"1"}}>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
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
        <Favourites>
          <Responsive/>
        </Favourites>
        <Interview>
          <h6 style={{margin:"5% 0% 2% 0%"}}>INTERVIEWS FROM THE CREATIVE INDEPENDENT</h6>
          <Box style={{display:"flex", justifyContent : "space-between"}}>
            {
              interview.map((e) => <div style={{width:"23%"}} key={e.id}>
                <img src={e.image} style={{width:"100%", height:"100%"}} alt="" />
                <h6 style={{margin:"10% 0%"}}>{e.about}</h6>
              </div>
              )
            }
          </Box>
        </Interview>
    </HomeWrapper>
  )
}

export default Home;