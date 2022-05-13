import React from 'react';
import "./Style/Deleteconfirmation.css";

function DeleteConfirmation({setOpenModel}) {
  
    return (
    <>
        <div className='modalBackground'> 
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                <button onClick={() => setOpenModel(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Are you sure you want to delete your project ?</h1>
                </div>
                <div className='body'>
                    <p>This action can't be undone</p>
                    <label>Password</label>
                    <input className='input-group input-group-sm mb-3'></input>
                </div>
                <div className='footer'>
                    <button onClick={() => setOpenModel(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    </>
  )
}

export {DeleteConfirmation}