import React from 'react'
import { Link } from 'react-router-dom'
 
const Foot = () => {
  return (
   <>
 <div className='bg-green-800 text-white py-10 mt-auto'>

    <div className='flex flex-wrap px-10 pt-10 items-center justify-center gap-24 text-lg'>
 
     
         <Link className='font-bold font-serif  text-xl'> FreshPetals </Link>
        <ul className='text-slate-300 '>
            <li ><Link to="./About" >About Us</Link></li>
            <li><Link to="./Contact" >Contact Us</Link></li>
            <li> <Link to="./Offer" >Offers</Link></li>
            <li><Link to="./Terms" >Terms & Conditions</Link></li>
        </ul>

        
    </div>

         
    </div>
    
  
   
   </>
  )
}

export default Foot