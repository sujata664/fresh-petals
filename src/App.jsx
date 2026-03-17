import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Foot from './Foot';
import About from './About';
import Product from './Product';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

import { Link } from 'react-router-dom';
const App = () => {
  return (
    <>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/Home" element={<Nav/>} />
       <Route path='/Home' element={<Foot/>} />
       <Route path='/about' element={<About/>} />
      <Route path='/Product' element={<Product/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
       <Route path='/Admin' element={<Admin/>} />
       <Route path='/Dashboard' element={<Dashboard/>} />
       <Route path='/Sidebar' element={<Sidebar/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App