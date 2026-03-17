import React from 'react'
import Nav from './Nav'
import Foot from './Foot'
import About from './About'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <Nav></Nav>
   <div className="relative">
  <img
    src="imggg/12.jpg"
    className="w-full h-[60vh] sm:h-[55vh] md:h-[60vh] object-cover shadow-xl "
    alt="flowers"
  />

  <p className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-4 sm:left-6 text-white font-semibold text-lg sm:text-2xl md:text-3xl">
    Premium Flowers To Make Your <br />
    Every Event Beautiful
  </p>

  <Link className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-4 sm:left-10 md:left-24 px-4 py-2 sm:px-5 sm:py-3 bg-orange-400 hover:bg-amber-600 rounded-xl font-semibold text-white text-sm sm:text-lg md:text-xl">
    Browse Flowers
  </Link>
</div>


  <div className="items-center w-full py-11 px-6 bg-gray-100 shadow-2xl rounded-3xl">
  <h1 className="text-center font-bold pb-5 text-xl">Shop by Category</h1>

  <div className="flex justify-center gap-10">

    <div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
      <Link>
        <img
          src="imggg/roses.jpg"
          className="w-full h-32 sm:h-40 md:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
          alt="Roses"
        />

        <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base md:text-lg font-semibold bg-black/40 px-3 py-1 rounded">
          Roses
        </p>
      </Link>
    </div>



<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
  <Link>
    <img
      src="imggg/lily.jpg"
      className="w-full h-32 sm:h-40 md:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
      alt="lily"
    />

    <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base md:text-lg font-semibold bg-black/40 px-3 py-1 rounded">
      Lilies
    </p>
  </Link>
</div>

<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
  <Link>
    <img
      src="imggg/tulips.jpg"
      className="w-full h-32 sm:h-40 md:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
      alt="tulip"
    />

    <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base md:text-lg font-semibold bg-black/40 px-3 py-1 rounded">
     Tulips
    </p>
  </Link>
</div>
<div className="relative w-40 sm:w-48 md:w-56 lg:w-60 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
  <Link>
    <img
      src="imggg/weeding.jpg"
      className="w-full h-32 sm:h-40 md:h-48 lg:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
      alt="weeding"
    />

    <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base md:text-lg font-semibold bg-black/40 px-3 py-1 rounded">
     Weeding Collection
    </p>
  </Link>
</div>



   </div>
   </div>
   <h1 className='font-serif font-bold  text-center text-2xl m-10'>Featured Flowers</h1>
   <div className='w-full h-auto shadow-xl flex flex-wrap justify-center'>
  <div className='object-cover h-50 w-52 m-2 md:m-3 lg:m-5 shadow-2xl bg-slate-50 rounded-lg items-center p-2 lg:p-4'>
    <img src='imggg/white r.jpg'
      alt='ff'
      className='h-34 w-full p-1 rounded-2xl transition-transform duration-300 hover:scale-105' />
    <p className='m-2 text-center font-serif'>White Roses</p>
    <p className='m-2 text-center font-serif underline'>From Rs:10/Stem</p>
    <Link className="bg-amber-500 hover:bg-amber-600 rounded-lg px-2 py-1 text-sm block mx-auto w-fit transition duration-300">
      Add to cart
    </Link>
  </div>

  <div className='object-cover h-50 w-52 m-2 md:m-3 lg:m-5 shadow-2xl bg-slate-50 rounded-lg items-center p-2 lg:p-4'>
    <img src='imggg/yellow t.jpg'
      alt='ff'
      className='h-34 w-full p-1 rounded-2xl transition-transform duration-300 hover:scale-105' />
    <p className='m-2 text-center font-serif'>Yellow Tulips</p>
    <p className='m-2 text-center font-serif underline'>From Rs:12/Stem</p>
    <Link className="bg-amber-500 hover:bg-amber-600 rounded-lg px-2 py-1 text-sm block mx-auto w-fit transition duration-300">
      Add to cart
    </Link>
  </div>

  <div className='object-cover h-50 w-52 m-2 md:m-3 lg:m-5 shadow-2xl bg-slate-50 rounded-lg items-center p-2 lg:p-4'>
    <img src='imggg/1.jpg'
      alt='ff'
      className='h-34 w-full p-1 rounded-2xl transition-transform duration-300 hover:scale-105' />
    <p className='m-2 text-center font-serif'>Peach Roses</p>
    <p className='m-2 text-center font-serif underline'>From Rs:15/Stem</p>
    <Link className="bg-amber-500 hover:bg-amber-600 rounded-lg px-2 py-1 text-sm block mx-auto w-fit transition duration-300">
      Add to cart
    </Link>
  </div>

  <div className='object-cover h-50 w-52 m-2 md:m-3 lg:m-5 shadow-2xl bg-slate-50 rounded-lg items-center p-2 lg:p-4'>
    <img src='imggg/mixed.jpg'
      alt='ff'
      className='h-34 w-full p-1 rounded-2xl transition-transform duration-300 hover:scale-105' />
    <p className='m-2 text-center font-serif'>Mixed Flower</p>
    <p className='m-2 text-center font-serif underline'>From Rs:10/Stem</p>
    <Link className="bg-amber-500 hover:bg-amber-600 rounded-lg px-2 py-1 text-sm block mx-auto w-fit transition duration-300">
      Add to cart
    </Link>
  </div>
</div>
   <Foot/>
   </>
  )
}

export default Home