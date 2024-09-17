import React, { useRef } from 'react'

// firebase imports 
import {  signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from '../../Config/config';
import { useNavigate } from 'react-router-dom';
import Todos from '../../todos/Todos';


function Login() {



let  email = useRef()
let password  = useRef()
let navigate = useNavigate()

// login user funtion 
  function loginUser(event){
    event.preventDefault()
    
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      
      navigate('/todos')
      
      // ...
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
    

  }


  return (


    <div className="index-form-style flex items-center justify-center ">
  <div className="reg-form-style bg-[#1f2937] p-[2rem] rounded mt-5 flex items-center justify-center text-center">
    <form id="forms" onSubmit={loginUser}>
      <input
        type="email"
        ref={email}
        className="py-[.4rem] px-[.6rem] text-center"
        placeholder=" Email"
      />
      <br /> <br />
      <input
        type="password"
        className="py-[.4rem] px-[.6rem] text-center"
        ref={password}
        placeholder=" Password"
        
      />
      <br /> <br />
      <button
        type="submit"
        className="logins  py-[.5rem] rounded-md   w-[6rem] px-[.8rem]   bg-[#6366f1]"
      >
        Login
      </button>
      <br /> <br />
      


    </form>
  </div>
</div>



  )
}

export default Login