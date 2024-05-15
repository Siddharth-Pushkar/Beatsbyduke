import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const previewImages = [
    '/images/hp11.png',
    '/images/hp12.png',
    '/images/hp13.png',
    '/images/hp14.png',
    '/images/hp15.png',
  ];

  return (
    <>
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      <div className="container">
        <div className="content">
          <div className="imagesethp">
            <img src="/images/dukehp1.png" alt="This will be the image" />
          </div>
          <div className="mainduketext">
            <h3>Only the best headphones for beats all day Beats by Duke</h3>
          </div>
        </div>

        <div className="preview-container">
          <dir className='designtext'>
            <h2>Lots of Beats</h2> {/* Heading added here */}
          </dir>
          <div className="preview-track">
            {previewImages.map((src, index) => (
              <div key={index} className="preview-image">
                <img src={src} alt={`Headphone preview ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className='long-box-padding'>
        <div className="long-box">
            <div className="long-box-image">
              <img src="/images/hp21.png" alt="Image" />
            </div>
            <div className="long-box-content">
              <h1>Duke Wave 1</h1>
              <p className='paraset'>Duke Wave 1 headphones: a fusion of style, technology, and performance engineered to elevate your listening experience. Boasting a sleek and modern design, the Duke Wave 1 combines premium materials with ergonomic construction for a comfortable fit that lasts all day. Equipped with 40mm dynamic drivers, these headphones deliver a powerful and immersive sound signature, with deep bass, clear mids, and crisp highs that bring your music to life. The active noise cancellation feature ensures that you can enjoy your favorite tracks without any distractions from the outside world, whether you're commuting, working, or relaxing at home. With Bluetooth 5.0 connectivity, you can effortlessly pair the Duke Wave 1 with your devices for wireless audio streaming, while the built-in microphone allows for hands-free calls with crystal-clear clarity. Whether you're a music enthusiast, a frequent traveler, or a professional on the go, the Duke Wave 1 headphones are designed to meet your every need, offering unparalleled sound quality, comfort, and convenience in one stylish package.</p>
            </div>
          </div>
      </div>

      <div className='long-box-padding'>
        <div className="long-box">
          <div className="long-box-content">
            <h1>Duke Smooth Max</h1>
            <p className='paraset'>Duke Smooth Max headphones: the pinnacle of audio excellence and comfort. Crafted with meticulous attention to detail, these headphones embody sophistication and innovation. The Duke Smooth Max features plush memory foam ear cushions and an adjustable headband, ensuring a customized fit that remains comfortable during extended listening sessions. Equipped with advanced 50mm neodymium drivers, these headphones deliver an expansive soundstage with deep, punchy bass, clear vocals, and detailed highs, providing an immersive audio experience across all genres. With hybrid active noise cancellation technology, the Duke Smooth Max effortlessly eliminates external distractions, allowing you to focus on the music and immerse yourself in your favorite tracks. The headphones also feature Bluetooth 5.2 connectivity for seamless wireless pairing with your devices, along with an impressive battery life that ensures uninterrupted playback for hours on end. Whether you're at home, in the office, or on the move, the Duke Smooth Max headphones deliver uncompromising sound quality and unparalleled comfort, making them the perfect choice for discerning audiophiles and music enthusiasts alike.</p>
          </div>
          <div className="long-box-image">
            <img src="/images/hp22.png" alt="Image" />
          </div>
        </div>
      </div>

      <div className="statistics-section">
          <div className="statistics-item">
            <h3>Units Sold</h3>
            <p>1000+</p>
          </div>
          <div className="statistics-item">
            <h3>Happy Customers</h3>
            <p>500+</p>
          </div>
          <div className="statistics-item">
            <h3>Website Visitors</h3>
            <p>10,000+</p>
          </div>

        </div>

        <br />
        <br />
        <br />
    </>
  );
}

export default App
