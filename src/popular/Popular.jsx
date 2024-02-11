import './popular.css';
import img1 from '../images/brands/01.png';
import img2 from '../images/brands/02.png';
import img3 from '../images/brands/03.png';
import img4 from '../images/brands/04.png';
import img5 from '../images/brands/05.png';
import img6 from '../images/brands/06.png';
import React from 'react';
const Popular = () => {
  return (
    <div className='popular'>
     <div className="popular-con container">
     <div className="product-title">
     <h2>Popular Brands</h2>
     </div>
       <div className="popular-content">
      <img src={img1} alt="popular" />
      <img src={img2} alt="popular" />
      <img src={img3} alt="popular" />
      <img src={img4} alt="popular" />
      <img src={img5} alt="popular" />
      <img src={img6} alt="popular" />
       </div>
     </div>
    </div>
  )
}

export default Popular
