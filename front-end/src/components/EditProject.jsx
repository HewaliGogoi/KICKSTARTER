import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function EditProject(){
    let navigate = useNavigate()

    const [modelOpen, setModelOpen] = useState(false);

    return(
        <>
            <div className="Container EditProjectheading">
            <h1> Ceramics Project</h1>
            </div>
            
            <div className="EPsection">
                <p>Preview</p>
                <h4>Project Status</h4>

                <div className="row">
                    <div className=" EDmaincontent">
                    <i class="fa-solid fa-heart heart"></i>
                        <h3>Take a moment to review our rules</h3>
                        <p className="EDpara"> Here are five rules every Kickstarter project must follow.</p>
                        <ol>
                            <li> <span className="EDNumbering">1</span> <span className="EDListContent"> Project must <strong>create something to share</strong> with others.</span></li>
                            <hr />
                            <li> <span className="EDNumbering">2</span> <span className="EDListContent"> Projects must be honest and clearly presented.</span></li>
                            <hr />
                            <li> <span className="EDNumbering">3</span> <span className="EDListContent"> Projects can't fundraise for charity.</span></li>
                            <hr />
                            <li> <span className="EDNumbering">4</span> <span className="EDListContent"> Projects can't offer equity.</span></li>
                            <hr />
                            <li> <span className="EDNumbering">5</span> <span className="EDListContent"> Projects can't involve prohibited items.</span></li>
                            
                        </ol>
                        <button className="but">Got it</button>
                        <p><u>Read more</u> about our rules.</p>
    
                    </div>
                </div>
                { <button className="btn btn-outline-dark deleteProjectBTN" onClick={() => {setModelOpen(true) }}><i class="fa-solid fa-trash"></i> Delete project</button> }
                {modelOpen && <DeleteConfirmation setOpenModel={setModelOpen}/>}
            </div>
            
        </>
    )
}

export {EditProject}