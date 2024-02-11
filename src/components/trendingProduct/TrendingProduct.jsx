import './trendingProduct.css';
import img1 from '../../images/products/product-1.jpg';
import img2 from '../../images/products/product-2.jpg';
import img3 from '../../images/products/product-3.jpg';
import img4 from '../../images/products/product-4.jpg';
import img5 from '../../images/products/product-5.jpg';
import img6 from '../../images/products/product-6.jpg';
import img7 from '../../images/products/product-7.jpg';
import img8 from '../../images/products/product-8.jpg';
import { FaStar } from "react-icons/fa";
import React from 'react';


const TrendingProduct = () => {
  return (
    <div className="trending-products">
      <div className="title">
        <h2>Trending Product</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
        <div className="trending-content container">
            <div className="trending-product">
            <img src={img1} alt="product" />
            <h4>Watches</h4>
            <h3>Xiaomi Mi Band 5</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$199.00</h2>
            </div>
            <div className="trending-product">
            <img src={img2} alt="product" />
            <h4>Speaker</h4>
            <h3>Big Power Sound Speaker</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$275.00</h2>
            </div>
            <div className="trending-product">
            <img src={img3} alt="product" />
            <h4>Camera</h4>
            <h3>WiFi Security Camera</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$399.00</h2>
            </div>
            <div className="trending-product">
            <img src={img4} alt="product" />
            <h4>Phones</h4>
            <h3>iphone 6x plus</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$400.00</h2>
            </div>
            <div className="trending-product">
            <img src={img5} alt="product" />
            <h4>Headphones</h4>
            <h3>Wireless Headphones</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$350.00</h2>
            </div>
            <div className="trending-product">
            <img src={img6} alt="product" />
            <h4>Speaker</h4>
            <h3>Mini Bluetooth Speaker</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$70.00</h2>
            </div>
            <div className="trending-product">
            <img src={img7} alt="product" />
            <h4>Headphones</h4>
            <h3>PX7 Wireless Headphones</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$100.00</h2>
            </div>
            <div className="trending-product">
            <img src={img8} alt="product" />
            <h4>Laptop</h4>
            <h3>Apple MacBook Air</h3>
            <div>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <FaStar className="star-icon"/>
           <h6>4.0 Review(s)</h6>
            </div>
            <h2>$899.00</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
