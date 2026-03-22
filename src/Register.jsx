import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
const Register = () => {
  return (
    <>

    <Nav></Nav>

   <div className='relative min-h-screen p-5 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-pink-50'>
  
        
          <img 
            src="/imggg/login2.png"
            alt="leaf"
            className="absolute top-0 left-0 w-72 opacity-90 -translate-x-6 -translate-y-10"
          />
  
         
          <img 
            src="/imggg/login.png"
            alt="leaf"
            className="absolute bottom-0 right-0 w-72 opacity-90  translate-y-10"
          />
  
          
          <h1 className="text-4xl font-serif font-bold text-center my-5 text-green-900 tracking-wide">
          Register 🌿
          </h1>
  
         
          <div className="flex flex-col items-center w-full">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-md p-10 mb-10 mt-4 border border-white/40">
  
             
             <form className="flex flex-col gap-3">

      <label className="font-semibold">Name</label>
      <input
        type="text"
        placeholder="Enter your Name"
        className='bg-white/60 border border-gray-200 rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200'
      />


      <label className="font-semibold">Phone</label>
      <input
        type="text"
        placeholder="Enter your Phone"
        className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <label className="font-semibold">Email</label>
      <input
        type="email"
        placeholder="Enter your Email"
        className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <label className="font-semibold">Password</label>
      <input
        type="password"
        placeholder="Enter your Password"
        className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

      <label className="font-semibold">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
      />

    <Link to="/dashboard">
                <button className="w-full py-3 mt-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-md hover:scale-105 transition duration-300">
                  Register
                </button>
              </Link>  

    </form>
  
              
             
  
            </div>
          </div>
  
        </div>
    <Foot></Foot>
    </>
  )
}

export default Register

