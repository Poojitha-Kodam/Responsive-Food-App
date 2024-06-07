import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-right">
          <img src={assets.logo1} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dolore quos perferendis voluptatum, exercitationem, debitis
            reiciendis Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-left">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>12364448665</li>
            <li>asascnio.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2024 Company, Inc. All rights reserved.</div>
    </div>
  );
};

export default Footer;
