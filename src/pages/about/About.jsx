import Team from "../../components/team/Team";
import "./about.css";
import NumberCounter from "number-counter";
import img1 from "../../images/testimonails/1.webp";
import img2 from "../../images/testimonails/2.webp";
import img3 from "../../images/testimonails/3.jpg";
import img4 from "../../images/testimonails/4.png";
import img5 from "../../images/testimonails/5.png";
import img6 from "../../images/testimonails/6.webp";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";


const About = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000, 
      };

  return (
    <div className="about">
      <h2 className="title">About Us</h2>
      <div className="about-details">
        <div className="detail">
          <NumberCounter
            className="n"
            end={3000}
            start={0}
            delay={4}
            preFix="+"
          ></NumberCounter>
          <p>Students</p>
        </div>
        <div className="detail">
          <NumberCounter
            className="n"
            start={0}
            end={1800}
            delay={3}
            preFix="+"
          ></NumberCounter>
          <p>Instrutors</p>
        </div>
        <div className="detail">
          <NumberCounter
            className="n"
            start={0}
            end={2000}
            delay={3}
            preFix="+"
          ></NumberCounter>
          <p>Rooms</p>
        </div>
        <div className="detail">
          <NumberCounter
            className="n"
            start={0}
            end={100}
            delay={3}
            preFix="%"
          ></NumberCounter>
          <p>Successfully</p>
        </div>
      </div>
      <Team />
      <div className="testimonails">
        <h2 className="title">Our Client Says</h2>
        <div className="testimonails-flex">
            <Slider {...settings}>
          <div className="testimonail">
            <img src={img1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Ahmed Samy</h2>
            <h4>Frontend Developer</h4>
          </div>
          <div className="testimonail">
            <img src={img6} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Salma Ahmed</h2>
            <h4>Fullstack Developer</h4>
          </div>
          <div className="testimonail">
            <img src={img3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Ali Hamad</h2>
            <h4>Frontend Developer</h4>
          </div>
          <div className="testimonail">
            <img src={img4} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Nourhan Ezzat</h2>
            <h4>Backend Developer</h4>
          </div>
          <div className="testimonail">
            <img src={img2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Ahmed Samy</h2>
            <h4>Frontend Developer</h4>
          </div>
          <div className="testimonail">
            <img src={img5} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, aut pariatur? Excepturi voluptatibus nobis expedita
              atque iusto enim quia? Eligendi blanditiis a, non est quod dolorum
              impedit quaerat nulla animi?
            </p>
            <div>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
                <FaStar className="star-icon"/>
            </div>
            <h2>Esraa Samy</h2>
            <h4>Flutter Developer</h4>
          </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
