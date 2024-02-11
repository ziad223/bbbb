import "./team.css";
import img1 from '../../images/team/01.jpg';
import img2 from '../../images/team/02.jpg';
import img3 from '../../images/team/03.jpg';
import img4 from '../../images/team/04.jpg';
import { FaFacebook , FaTwitter , FaSkype } from "react-icons/fa";
import React from "react";

const Team = () => {
  return (
    <div className="team" >
      <div className="team-con container">
     <div className="product-title">
     <h2>Our Team</h2>
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form.
      </p>
     </div>
      <div className="team-content">
        <div className="char">
            <img src={img1} alt="" />
            <h2>Amal Ibrahim</h2>
            <h4>Frontend Developer</h4>
            <div>
                <FaFacebook className="team-icon"/>
                <FaTwitter className="team-icon"/>
                <FaSkype className="team-icon"/>

            </div>
        </div>
        <div className="char">
            <img src={img2} alt="" />
            <h2>Sami Azab</h2>
            <h4>Backend Developer</h4>
            <div>
                <FaFacebook className="team-icon"/>
                <FaTwitter className="team-icon"/>
                <FaSkype className="team-icon"/>

            </div>
        </div>
        <div className="char">
            <img src={img3} alt="" />
            <h2>Amal Ibrahim</h2>
            <h4>Frontend Developer</h4>
            <div>
                <FaFacebook className="team-icon"/>
                <FaTwitter className="team-icon"/>
                <FaSkype className="team-icon"/>

            </div>
        </div>
        <div className="char">
            <img src={img4} alt="" />
            <h2>Esraa Adel</h2>
            <h4>Fullstack Developer</h4>
            <div>
                <FaFacebook className="team-icon"/>
                <FaTwitter className="team-icon"/>
                <FaSkype className="team-icon"/>

            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Team;
