import React, { useEffect, useState }  from "react";
import { useSearchParams } from "react-router-dom";

function Search(){
    const [searc,setsearch]=useSearchParams();
    const [input,setinput]=useState("");
    const func=(e)=>{
        const value=e.target.value ;
        setsearch({id:value});
        setinput(value);
    }


    const handlesubmit=(e)=>{
        e.preventDefault();     
        alert(searc.toString());
        setinput("");
        setsearch({id:""})

    }
    return(
        <div>
            <form onSubmit={handlesubmit}>
                <label>Search</label>
                <input type="text" placeholder="search" value={input} onChange={func}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
export default Search;