import  React,{ useState } from 'react';
import './style.css'
function UseForm(props) {
    const [userData, setuserData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        password:''
})
//validation 
const[emailError,setemailError]=useState("")
const validateEmail=()=>{
    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }else{
            setemailError("enter valid email-id");
        }
        }else{
            setemailError("enter email-id");
        }
    return false
};
const [firstnameError, setfirstnameError] = useState("")
const validateFirstName=()=>{
    if(userData.firstName){
        let regex =/^[a-zA-Z ]{3,10}$/;
        if(regex.test(userData.firstName)){
            setfirstnameError("");
            return true;
        }
        else{
            setfirstnameError("enter valid first name");
        }}
        else{
            setfirstnameError(" enter firstName");
        }
        return false; 
};

const [lastnameError, setlastnameError] = useState("")
const validateLastName=()=>{
    if(userData.lastName){
        let regex =/^[a-zA-Z ]{1,5}$/;
        if(regex.test(userData.lastName)){
            setlastnameError("");
            return true;
        }
        else{
            setlastnameError("enter valid last name");
        }}
        else{
            setlastnameError("enter lastName");
        }
        return false; 
};

const [passwordError, setpasswordError] = useState("")
const validatePassword=()=>{
    if(userData.password){
        let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,15}$/;
        if(regex.test(userData.password)){
            setpasswordError("");
            return true;
        }
        else{
            setpasswordError("enter valid password");
        }}
        else{
            setpasswordError("enter password");
        }
        return false; 
};


let updateUserData=(event)=>{
    setuserData({
        ...userData,
        [event.target.name]:event.target.value
    })
}

let saveData=()=>{

     validateEmail();
     validateFirstName();
     validateLastName();
     validatePassword();
     if(validateEmail()&&validateFirstName()&&validateLastName()&&validatePassword()) {
     props.getUserData(userData)
     //clearing the form
     setuserData({
         email:'',
         firstName:'',
         lastName:'',
         password:''
     })
    }
}
    return (
        <div className="container">
            <h2>Login Form</h2>
          
            <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event)=>{updateUserData(event)}}/>
                    {emailError && <div className="some">{emailError} </div>}
                    </div>
                <div className="mb-3">
                    <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    value={userData.firstName}
                    onChange={(event)=>{updateUserData(event)}}/>
                    {firstnameError&&<div className="some">{firstnameError}</div>}
                
                </div>
                <div className="mb-3">
                    <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Lastname"
                    value={userData.lastName}
                    onChange={(event)=>{updateUserData(event)}} />
                    {lastnameError&&<div className="some">{lastnameError}</div>}
                
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateUserData(event)}} />
                    {passwordError&&<div className="some">{passwordError}</div>}
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>Save</button>
          
            
        </div>
    );
}


export default UseForm