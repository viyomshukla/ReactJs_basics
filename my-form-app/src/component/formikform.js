import { Formik,Form, Field } from "formik";
import { useState } from "react";
function Formikform(){
    const user={
        name:"",
        age:"",
        gender:"",
        text:""
    }
    const [form,setform]=useState();
    return(
        <>
    <Formik initialValues={user}
      onSubmit={(values)=>{
       
        console.log(values)
        setform(values)
      }}
      >
        <Form style={{ backgroundColor:"aqua",width:"20%"}}>
            <label>NAME:</label>
            <Field type="text" name="name"></Field>
            <br/><br/>
            <label>AGE:</label>
            <Field type="number" name="age"></Field>
            <br/><br/>
            <label>GENDER:</label><br/>
            <Field type="radio" name="gender" value="male"></Field>
            <label>male </label>
            <Field type="radio" name="gender" value="female"></Field>
            <label>female </label>

            <br/><br/>
            <label>COMMENTS:</label>
            <Field as="textarea" name="text" rows="5"></Field>
            <br/><br/>
            <button>submit</button>
            
        </Form>
    </Formik>
    <div>
       
    <h1>{JSON.stringify(form)}</h1>
    </div>
 
    </>
    )
}
export default Formikform;