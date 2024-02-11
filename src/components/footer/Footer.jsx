import "./footer.css";
import img1 from "../../images/footer/01.png";
import img2 from "../../images/footer/02.png";
import img3 from "../../images/footer/03.png";
import img4 from "../../images/footer/04.png";
import img5 from "../../images/footer/05.png";
import img6 from "../../images/footer/06.png";
import svg from "../../images/footer/white-logo.svg";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import React from "react";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-up">
          <div className="footer-up-left">
          <img src={svg} alt="" />
          </div>
          <div className="footer-up-middle">
            <h2>Subscribe to our Newsletter</h2>
            <p>Get all the latest information, Sales and Offers.</p>
          </div>
          <div className="footer-up-right">
            <input type="text" placeholder="Email address..." />
            <button>Subscribe</button>
          </div>
        </div>
        <hr />
        <div className="footer-middle">
          <div className="footer-middle-div">
            <h2>Bravo Company</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatibus? Inventore excepturi harum eum expedita! Cupiditate temporibus provident omnis voluptatibus libero architecto aperiam nobis, fugiat officiis cum voluptas, sequi quasi.
            </p>
          </div>
          <div className="footer-middle-div">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="#" ><FaFacebook /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaWhatsapp /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
            </ul>
          </div>
          <div className="footer-middle-div">
            <h2>Social Media</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>          
        </div>
        <hr />
        <div className="footer-bottom">
          <p>Copyright by@Bravo Team - 2024</p>
          <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
