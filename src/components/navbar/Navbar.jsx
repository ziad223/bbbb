import "./navbar.css";
import svg from '../../images/footer/icon.png';
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";


const Navbar = ({cartItems}) => {
  const [open , setOpen] = useState(false);

  function isOpen(){
    setOpen(!open)
  }

  useEffect(function(){
    window.onscroll = function(){
      if(window.scrollY > 0){
        document.querySelector(".navbar").style.backgroundColor = '#ddd';
        document.querySelector("hr").style.display = 'none';
       }else{
        document.querySelector(".navbar").style.backgroundColor = '#fff';
        document.querySelector("hr").style.display = 'block';
       }
    }
  } , [])
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <Link to="/">
            <img src={svg} alt="" />
          </Link>
        </div>
        <div className="middle-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
       <FiMenu className="menu" onClick={isOpen}/>
        <div className="right-nav">
        {/* <FaRegHeart className="heart-icon"/> */}
           <Link to='/cart'>
           <MdOutlineShoppingBag className="nav-icon" />
            <span>{cartItems.length}</span>
           </Link>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
