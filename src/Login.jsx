import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'

const Login = () => {
  return (
    <>
      <Nav />

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
         Login 🌿
        </h1>

       
        <div className="flex flex-col items-center w-full">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-md p-10 border border-white/40">

           
            <label className='font-semibold text-gray-700'>Email</label>
            <input 
              type='text' 
              placeholder='Enter your email' 
              className='bg-white/60 border border-gray-200 rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200'
            />

           
            <label className='font-semibold text-gray-700'>Password</label>
            <input 
              type='password' 
              placeholder='Enter your password' 
              className='bg-white/60 border border-gray-200 rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200'
            />

            
            <Link to="/dashboard">
              <button className="w-full py-3 mt-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-md hover:scale-105 transition duration-300">
                Login
              </button>
            </Link>

            
            <p className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link to="/Register" className="text-green-800 font-semibold hover:underline">
                Register
              </Link>
            </p>

          </div>
        </div>

      </div>

      <Foot />
    </>
  )
}

export default Login