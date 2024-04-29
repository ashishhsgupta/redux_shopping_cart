import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Product from './components/Product';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='cart' element={<Cart />} />
      </Routes>
    </BrowserRouter></>
  );
}

export default App;
