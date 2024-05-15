import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className='container'>
        <div className='imagesethp'>
          <img src="/images/dukehp1.png" alt="This will be the image" />
        </div>
        <div className='mainduketext'>
          <h3>Only the best headphones for bests all day Beats by Duke</h3>
        </div>
      </div>
    </>
  );
}

export default App
