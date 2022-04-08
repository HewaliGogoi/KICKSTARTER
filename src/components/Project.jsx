import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Raiser } from './Home';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
  margin:0% 10%;
  // justify-content : space-between;
  border:2px solid green
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
    fetch(`http://localhost:3001/project/${id}`)
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
      <div>
        <h5>{project.title}</h5>
        <p>{project.subtitle}</p>
      </div>
      <div style={{display:"flex", justifyContent: "space-between", textAlign:"left", paddingTop:"3%"}}>
        <div style={{width:"50%"}}>
          <iframe width="100%" height="315" src={project.vedio} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div style={{width:"40%", justifySelf:"flex-end"}}>
          <Raiser style={{ zIndex:"2", width:`${((+project.fund)/(+project.goal))*100}%`}}/>
          <h3 style={{color:"#037362"}}>US$ {project.fund}</h3>
          <p>pledged of US$ {project.goal} goal</p>
          <button style={{backgroundColor:"#037362", color:"white", width:"100%", padding:"2% 0%"}} onClick={() => navigate(`/checkout/${project.id}/payment`)}>Back this project</button>
        </div>
      </div>
    </ProjectWrapper>
  )
}

export default Project;