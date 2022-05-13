import React from 'react';
import {Raiser} from './Home';
import {useDispatch} from "react-redux";
import {dataAction} from '../redux/action';

const Pagination = ({e, handleImage}) => {

    const dispatch = useDispatch();

    const handleAdd = (data) => {
        dispatch(dataAction(data));
    }

  return (
    <div key={e.id} onClick={() => handleAdd(e)}>
        <div style={{display:"flex", borderBottom:"1px solid #cecece", cursor:"pointer"}} onClick={()=>handleImage(e.id)}>
            <div style={{position:"relative", maxWidth:"30%", margin:"10px"}}>
            <img style = {{width:"100%"}}src={e.image} alt="" />
            <div style={{backgroudColor:"red", position:"absolute", bottom:"0"}}></div>
            <Raiser style={{ zIndex:"2", width:`${((+e.fund)/(+e.goal))*100}%`}}>{console.log((e.fund/e.goal)*100)}</Raiser>
            </div>
            <div>
            <h6>{e.title}</h6>
            <p>By {e.author}</p>
            </div>
        </div>
    </div>
  )
}

export default Pagination;