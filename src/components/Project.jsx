import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Raiser } from './Home';
import styled from 'styled-components';
import Connect from "./Connect.png";
import Update from "./Update.png";
import Charge from "./Charge.png";


const ProjectWrapper = styled.div`
  // margin:0% 10%;
  // justify-content : space-between;
  // border:2px solid green;
`;

const Project = ({setClose}) => {
  const {id} = useParams();
  // console.log(id)
  const [project, setProject] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(`https://hewali-fakeserver.herokuapp.com/project/${id}`)
    .then((res) => res.json())
    .then((res)=> {
      // setProject({...res}); 
      // console.log(res);
      let data = res;
      let vlink = data.vedio.split("=");
      let link = vlink[vlink.length-1];
      data.vedio = `https://www.youtube.com/embed/${link}`;
      console.log(data)
      setProject({...data});
    })
    // console.log(project)
  }

  return (
    <ProjectWrapper>
      <div style={{margin:"0% 10%"}}>
        <div style={{marginTop:"3%"}}>
          <h4>{project.title}</h4>
          <p>{project.subtitle}</p>
        </div>
        <div style={{display:"flex", justifyContent: "space-between", textAlign:"left", paddingTop:"3%"}}>
          <div style={{width:"60%"}}>
            <iframe width="100%" height="500" src={project.vedio} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{width:"39%", justifySelf:"flex-end", position:"relative", paddingLeft:"3%"}}>
            <Raiser style={{ zIndex:"2", width:`${((+project.fund)/(+project.goal))*100}%`}}/>
            <h3 style={{color:"#037362", marginTop:"5%"}}>US$ {project.fund}</h3>
            <p>pledged of US$ {project.goal} goal</p>
            <button style={{backgroundColor:"#037362", color:"white", width:"100%", padding:"2% 0%", position:"absolute", top:"50%"}} onClick={() => navigate(`/checkout/${project.id}/payment`)}>Back this project</button>
          </div>
        </div>
      </div>
      <div style={{backgroundColor:"#F6F2EB", display:"flex", padding:"2% 10% 5% 10%", textAlign:"left", justifyContent:"space-between", marginTop:"2%"}}>
        <div style={{display:"flex", width:"35%", paddingRight:"3%"}}>
          <img style={{height:"80%"}} src={Connect} alt="" />
          <p>Kickstarter connects creators with backers to fund projects.</p>
        </div>
        <div style={{display:"flex", width:"35%", paddingRight:"3%"}}>
          <img style={{height:"80%"}} src={Update} alt="" />
          <p>Rewards aren’t guaranteed, but creators must regularly update backers.</p>
        </div>
        <div style={{display:"flex", width:"35%", paddingLeft:"3%"}}>
          <img style={{height:"80%"}} src={Charge} alt="" />
          <p>You’re only charged if the project meets its funding goal by the campaign deadline.</p>
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Project;