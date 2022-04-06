import React from "react";
import styled from "styled-components";

const Heading = styled.div`

    button{
        color: white;
        background-color: #028858; 
        padding: 10px 20px;
        border: none;
    }

    h1{
        font-size: 3.0rem;
        line-height: 5.4rem;
        font-weight: bold;
    }
    
`

function StartProject(){
    return(
        <>
            <Heading>
            <h1>Bring your creative project to life.</h1>
            <button>Start a project</button>
            </Heading>
        </>
    )
}

export {StartProject}
