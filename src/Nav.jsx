import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <>
    
        <div className='font-bold font-serif text-xl text-white bg-green-900 shadow-3xl p-4'>
            <Link to='/'> FreshPetals </Link>
            
            <div className='flex justify-end text-sm gap-12 mr-10 '>
            <Link to='/'className="hover:underline hover:decoration-4 hover:gap-5 hover:underline-offset-8 ">Home </Link>
            <Link to="/about" className="hover:underline hover:decoration-4 hover:gap-5 hover:underline-offset-8 " >About Us </Link>
            <Link to="/product"className="hover:underline hover:decoration-4 hover:gap-5 hover:underline-offset-8 "> Our Products
            </Link>
             <Link to="/Login" className="hover:underline hover:decoration-4 hover:gap-5 hover:underline-offset-8 ">
                Login
            </Link>
            </div>
        
    </div>
    
    </>
  )
}

export default Nav