import React from 'react'
import Nav from './Nav'
import Foot from './Foot'

const About = () => {
  return (
    <>
      <Nav />

    <div className="bg-[#f6f3ee] py-10 px-6">
    <div className="text-center pb-6">
      <h1 className="text-4xl md:text-6xl font-serif font-bold">
        About Us
      </h1>
    </div>
    
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Left Text */}
    <div className="font-serif">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">
        Welcome to FreshPetals
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        At FreshPetals, we believe in the beauty of flowers to bring joy,
        comfort, and connection. Since 2015, we’ve been dedicated to
        providing the freshest, most beautiful blooms for every occasion.
      </p>

     
      <div className="bg-white shadow-lg rounded-xl p-6 grid grid-cols-3 text-center gap-6">

        <div>
          <p className="text-sm font-medium">Same Day Delivery</p>
        </div>

        <div>
          <p className="text-sm font-medium">Fresh Flowers</p>
        </div>

        <div>
          
          <p className="text-sm font-medium">Customer Satisfaction</p>
        </div>

      </div>

     
      <button className="mt-6 bg-amber-600 text-white px-6 py-2 rounded-lg shadow hover:bg-amber-700 transition">
        Shop Now
      </button>
    </div>

    {/* Right Image */}
    <div>
      <img
        src="imggg/three.jpg"
        className="rounded-2xl shadow-xl object-cover m-5"
        alt="flowers"
      />
    </div>

  </div>




  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
     <div>
      <img
        src="imggg/weeding.jpg"
        className="rounded-2xl shadow-xl object-cover m-5"
        alt="flowers"
      />
    </div>
     <div className="font-serif">
      <h2 className="text-4xl font-semibold text-gray-800 m-6">
        Our Story
      </h2>

      <p className="text-gray-600 leading-relaxed m-6">
        FreshPetals was created from a love for flowers and the joy they bring to people’s lives. 
        Our goal is simple — to provide fresh, beautiful floral arrangements that make every moment special.
        We carefully select seasonal blooms and design each bouquet with creativity and care.
         Whether it’s a celebration, a gift, or a small gesture of appreciation, FreshPetals helps you express your feelings through the beauty of flowers.
      </p></div>
    </div>
<h2 className="text-4xl font-serif font-semibold text-gray-800 text-center m-10">
  Why Choose Us
</h2>
<div className='flex items-center justify-center flex-wrap m-'>
<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group m-5 p-1">
<h1 className="text-xl font-serif font-semibold text-gray-800 text-center">Fresh Flowers</h1>
<p className="text-gray-600 p-2">We carefully select fresh, seasonal flowers to ensure every bouquet looks vibrant and beautiful.</p>
</div>

<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group m-5 p-1">
<h1 className="text-xl font-serif font-semibold text-gray-800 text-center">Expert Florists</h1>
<p className="text-gray-600 p-2">Our skilled florists create elegant arrangements designed with creativity and attention to detail.</p>
</div>

<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group m-5 p-1">
<h1 className="text-xl font-serif font-semibold text-gray-800 text-center">Fast Delivery</h1>
<p className="text-gray-600 p-2">We provide reliable and timely delivery so your flowers arrive fresh and perfect.</p>
</div>

<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group m-5 p-1">
<h1 className="text-xl font-serif font-semibold text-gray-800 text-center">Customer Satisfaction</h1>
<p className="text-gray-600 p-2">Your happiness is our priority, and we always strive to provide the best service and quality.</p>
</div>
</div>
</div>
      <Foot />
    </>
  )
}

export default About 