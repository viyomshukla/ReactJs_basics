import * as Yup from 'yup';
const formValid=Yup.object({
    name:Yup.string().min(2).max(20).required("name is necessary"),
    phoneNO:Yup.string() .matches(/^\d{10}$/, "Phone number must be exactly 10 digits").required("phone number is necessary"),
    pass:Yup.string().matches(/^[A-Z](?=.*[!@#$%^&*])(?=.*\d).*$/, "Password must start with a capital letter, contain at least one special character, and one digit").required("password is necessary"),
    confPass:Yup.string().oneOf([Yup.ref("pass"),null],"Passwords must match")
});
export default formValid;