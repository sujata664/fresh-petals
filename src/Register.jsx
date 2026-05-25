import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Foot from './Foot'

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^\d{10}$/

  if (formData.name.trim().length < 2) {
    alert("Name is too short")
    return
  }

  if (!phoneRegex.test(formData.phone)) {
    alert("Phone must be 10 digits")
    return
  }

  if (!emailRegex.test(formData.email)) {
    alert("Enter a valid email")
    return
  }

  if (formData.password.length < 6) {
    alert("Password must be at least 6 characters")
    return
  }

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match")
    return
  }

  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        password: formData.password
      })
    })

    const data = await res.json()
    alert(data.message)

    if (res.ok) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
      })
    }

  } catch (error) {
    alert("Registration failed")
  }
}

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
          className="absolute bottom-0 right-0 w-72 opacity-90 translate-y-10"
        />

        <h1 className="text-4xl font-serif font-bold text-center my-5 text-green-900 tracking-wide">
          Register 🌿
        </h1>

        <div className="flex flex-col items-center w-full">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl w-full max-w-md p-10 mb-10 mt-4 border border-white/40">

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>

              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className='bg-white/60 border border-gray-200 rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200'
                required
              />

              <label className="font-semibold">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone"
                className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />

              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />

              <label className="font-semibold">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />

              <label className="font-semibold">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="bg-white/60 border rounded-xl p-3 w-full mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-200"
                required
              />

              <button
                type='submit'
                className="w-full py-3 mt-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-full shadow-md hover:scale-105 transition duration-300"
              >
                Register
              </button>

            </form>

          </div>
        </div>

      </div>

      <Foot />
    </>
  )
}

export default Register