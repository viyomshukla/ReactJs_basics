import React from "react";
import { useNavigate } from "react-router-dom";

function Director(){
    const nav=useNavigate();
    return(
        <div>
            <h1>Director Contact No:9876579022</h1>
            <button onClick={()=>nav('/contact/owner')}>GoTo owner</button>
        </div>
    )
}
export default Director;