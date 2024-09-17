import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Components/Navbar'

function Layout() {
let nevigate = useNavigate()

function logins(){
  nevigate("/login")
}

  return (
    <>
     <Navbar />
     <Outlet />
     <h1 className='text-center text-[2rem] text-[green]'>!Login first </h1>
     <button className='text-[white] text-[1.1rem] py-2 px-3 w-[6rem] mt-3 rounded-lg hover:bg-[red] bg-[#1f2937] block mx-auto' onClick={logins}>Login</button>
    </>
   

  )
}

export default Layout