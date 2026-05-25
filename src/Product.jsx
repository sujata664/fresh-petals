import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Foot from './Foot';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    fetch("http://localhost:5000/products") 
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
    <div className="min-h-screen flex flex-col">
      <Nav />

      <div className="max-w-full mx-auto font-serif flex flex-wrap flex-grow">

        {/* Left Sidebar */}
        <div className='m-10 space-y-6'>

          {/* Categories */}
          <div>
            <h2 className="font-bold text-lg">Categories</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>Bouquets</li>
              <li>Wedding Collections</li>
              <li>Birthday Flowers</li>
              <li>Anniversary Specials</li>
              <li>Sympathy Flowers</li>
              <li>Premium Arrangements</li>
            </ul>
          </div>

          <hr className="border-t-2 border-black" />

          {/* Top Selling Flowers */}
          <div>
            <h2 className="font-bold text-lg">Top Selling Flowers</h2>
            <ul className="text-sm space-y-1 mt-2">
              <li>Roses</li>
              <li>Tulips</li>
              <li>Lilies</li>
              <li>Sunflowers</li>
              <li>Orchids</li>
            </ul>
          </div>

        </div>

      <div className="flex flex-wrap justify-center max-w-6xl mx-auto bg-gray-100">
  {products.map(item => (
    <div
      key={item.id}
      className="bg-white w-52 m-4 mt-8 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300 flex flex-col"
    >
      <img
        src={`http://localhost:5000/uploads/${item.image}`}
        alt={item.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-xl font-semibold">{item.name}</h2>

        <p className="m-2 text-center font-serif underline">
          Rs: {item.price}
        </p>

        <p className="text-gray-500 text-center">Stock: {item.quantity}</p>
        <p className="text-gray-600 text-center">Category: {item.category}</p>

        <Link
          to=""
          className="mt-auto inline-block bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  ))}
</div>
        <div className='m-10'>
          <h2 className="font-bold text-lg">Shop By Occasion</h2>
          <ul className="text-sm space-y-1 mt-2">
            <li>Love</li>
            <li>Congratulations</li>
            <li>Get Well Soon</li>
            <li>Graduation</li>
            <li>Thank You</li>
            <li>New Baby</li>
          </ul>
        </div>

      </div>
          </div>
      <Foot />
    </>
  );
}

export default Product;