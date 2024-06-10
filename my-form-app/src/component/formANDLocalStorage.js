import React, { useState } from "react";
function Form(){
    const [name,setname]=useState("");
    const [email,setemail]=useState()
    const [hname,sethname]=useState(false);
    function loadvalue(){
     const b=localStorage.getItem("student")||"[]";
     return JSON.parse(b);
    }
    function addevent(data){
    const a=loadvalue();
    a.push(data);
    localStorage.setItem("student",JSON.stringify(a));
    }
    const handlename=(e)=>{
        const a=e.target.value;
        if(a.length<3){
            setname(a);
         sethname(false)
        }
        else{
            setname(a);
        sethname(true)
        }
    }
    
    const handleemail=(e)=>{
        const a=e.target.value;
        setemail(a)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        alert(`name:${name} and email:${email}`)
         const a=document.getElementById("name").value.trim();
        const b= document.getElementById("email").value.trim();
         const student={
        name:a,
        email:b
     }
     addevent(student);
     setname("")
     setemail("")
 
    }

    return(
        
        <div>
            <form onSubmit={handlesubmit} id="submit" >
            <label>Name  </label>
            <input type="text" value={name} onChange={handlename} required id="name"></input><br/>
            {hname ? <span> </span> : <span>More than 3 letters required</span>}
            <br/><br/>
            <label>Email  </label>
            <input type="email" value={email} onChange={handleemail} required id="email"></input>
            <br/><br/>
            <input type="submit"></input>
            </form>
        </div>
    )
}

export default Form;