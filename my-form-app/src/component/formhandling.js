import React from "react";
import { Formik, useFormik } from "formik";
import formValid from "./formValidation";
function Formhandle(){
    const person={
        name:"",
        phoneNO:"",
        pass:"",
        confPass:""
    }
   const {handleChange,handleSubmit,values,errors,handleBlur,touched}=useFormik({
    initialValues:person,
    validationSchema:formValid,
    onSubmit:(values,{resetForm})=>{
        console.log(`Name is ${values.name}`);
        console.log(`PhoneNo is ${values.phoneNO}`);
        console.log(`password is ${values.pass}`);
        console.log(`confirm passwod is ${values.confPass}`);
        resetForm();
    }
   })


//    console.log(formik);
return(
   
    <div>
        <form onSubmit={handleSubmit}> 
            <label>Enter Name : </label>
            <input type="text" id="name" value={values.name} onChange={handleChange} onBlur={handleBlur} ></input>
            <br/>
            {touched.name && errors.name ?(<div style={{ color: 'red' ,fontWeight:"bold"}}>{errors.name}</div>):null}
            <br/><br/>
            <label>Enter phoneNo : </label>
            <input type="number" id="phoneNO" value={values.phoneNO} onChange={handleChange} onBlur={handleBlur}></input>

            <br/>
             {touched.phoneNO && errors.phoneNO ?(<div style={{ color: 'red' ,fontWeight:"bold"}}>{errors.phoneNO}</div>):null}
             <br/><br/>
             <label>Enter Password :</label>
            <input type="password" id="pass" value={values.pass} onChange={handleChange}  onBlur={handleBlur}></input><br/>
            {touched.pass && errors.pass ?(<div style={{ color: 'red' ,fontWeight:"bold"}}>{errors.pass}</div>):null}
            <br/><br/>
            <label>Enter Confirm Password :</label>
            <input type="password" id="confPass" value={values.confPass} onChange={handleChange} onBlur={handleBlur}></input><br/>
            {touched.confPass && errors.confPass ?(<div style={{ color: 'red' ,fontWeight:"bold"}}>{errors.confPass}</div>):null}
            <br/><br/>
 
            <input type="submit"></input>
         
        </form>
    </div>
)
}
export default Formhandle;