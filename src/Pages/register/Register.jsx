import React, { useRef } from 'react'

//firebase imports
import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from '../../Config/config';

function Register() {
  let firsrName = useRef()
  let lastName = useRef()

let  email = useRef()
let password  = useRef()

// register user function 
function registerUser(event){
  event.preventDefault()
  
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
    
    // ..
  });

  
  
}

  return (


    <div className="reg-form-style  flex items-center justify-center text-center">
  <form id="forms" onSubmit={registerUser} className='bg-[#1f2937] mt-5 p-[2rem]'>
    {/* first Name  */}
    <input
      type="text"
      ref={firsrName}
      className="py-[.4rem] px-[.6rem] text-[#4c68fe] text-center"
      placeholder=" First Name"
    />
    <br /> <br />
    {/* Last Name  */}
    <input
      type="text"
      ref={lastName}
      className="py-[.4rem] px-[.6rem] text-[#4c68fe] text-center"
      placeholder=" Last Name"
    />
    <br /> <br />
    {/* Email  */}
    <input
      type="email"
      ref={email}
      className="py-[.4rem] px-[.6rem] text-[#4c68fe] text-center"
      placeholder=" Email"
    />
    <br /> <br />
    {/* Password  */}
    <input
      type="password"
      className="py-[.4rem] px-[.6rem] text-[#4c68fe] text-center"
      ref={password}
      placeholder=" Password"
    />
    <br /> <br />
    {/* Photo  */}
    
    
    {/* Register button  */}
    <button
        type="submit"
        className="register  py-[.5rem] rounded-md   w-[6rem] px-[.8rem]   bg-[#6366f1]"
      >
        Register
      </button>
    <br /> <br />
   
    
  </form>
</div>



  )
  
}

export default Register