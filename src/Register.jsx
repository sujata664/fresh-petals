import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'
const Register = () => {
  return (
    <>

    <Nav></Nav>

   <div className='bg-gray-100  p-5'>
   <h1 className="text-4xl font-bold underline justify-center text-center my-5">
    Register
    </h1>

    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-10">

  <div className="bg-white rounded-3xl shadow-2xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12 p-6">

    <form className="flex flex-col gap-3">

      <label className="font-semibold">Name</label>
      <input
        type="text"
        placeholder="Name"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <label className="font-semibold">Date of Birth</label>
      <input
        type="text"
        placeholder="Date of Birth"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <label className="font-semibold">Phone</label>
      <input
        type="text"
        placeholder="Phone"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <label className="font-semibold">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <label className="font-semibold">Password</label>
      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <label className="font-semibold">Confirm Password</label>
      <input
        type="password"
        placeholder="Confirm Password"
        className="bg-gray-200 rounded-lg p-2 w-full"
      />

      <button className="bg-amber-500 text-white p-2 rounded-lg mt-3 hover:bg-amber-600">
        Register
      </button>

    </form>

  </div>

</div>
    </div>
    <Foot></Foot>
    </>
  )
}

export default Register