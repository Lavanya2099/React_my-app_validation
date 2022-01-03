import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

function App() {
const [userFormData, setuserFormData]= useState([])

let getUserData=(userData)=>{


 //always update state like below (array or object)
 //1. take a copy of the state array

 const userFormDataCopy = [...userFormData]
//2.do all necessary changes / code changes
userFormDataCopy.push(userData)
//3. set the copied array to the state
setuserFormData(userFormDataCopy)

}

  return (
    <div className="App">

   <UserForm getUserData={getUserData}/>

   <UserTable userFormData={userFormData}/>
    </div>
  );
}

export default App;
