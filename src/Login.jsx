import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
const Login = () => {
  return (
    <>

    <Nav></Nav>

   <div className='bg-gray-100 h-svh p-5'>
   <h1 className="text-4xl font-bold underline justify-center text-center my-5">
     Login
    </h1>

    <div className="flex flex-col px-4 sm:px-6 items-center lg:px-8">
    <div className=" lg:flex-row items-center my-10  bg-white rounded-3xl shadow-2xl lg:h-96 lg:w-4/12 p-6">
        <label className='p-2 font-semibold'>Email</label><br />
    <input type='text' id="email" placeholder='Email' required className=' bg-gray-200 rounded-lg p-2  lg:w-3/4 m-2'></input><br/>
    <label className='p-2 font-semibold'>Password</label><br/>
    <input type='text' id="email" placeholder='Password' required className=' bg-gray-200 rounded-lg p-2 lg:w-3/4 m-2' ></input><br/>
    <Link to="/dashboard">
    <button className="px-6 py-3 my-8 bg-amber-500 text-white rounded-full hover:text-black transition duration-300 transform hover:-translate-y-2">
              Login
            </button>
    </Link>
    <div>Don't have an account?<Link to="/Register"
    className=" text-gray-500  hover:text-black "> Register.
    </Link></div>
    </div>
    </div>
    </div>
    <Foot></Foot>
    </>
  )
}

export default Login