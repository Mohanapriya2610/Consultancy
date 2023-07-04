import React from 'react';
import '../../App.css';
import './HeroSection.css';
import Clogo from '../../images/img background.png';


function HeroSection() {
  return (
    <div className='hero-container'>
      <img src={Clogo} alt="bg" className='img1' />
      <h1>SAMUDHRIKA LAKSHANA</h1>
      <p>HANDCRAFTED BEAUTY</p>
      <div className='hero-btns'>
        
      </div>
    </div>
  );
}

export default HeroSection;