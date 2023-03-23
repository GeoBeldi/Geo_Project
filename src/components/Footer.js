import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#758", marginRight: "2rem" }} />
            <div>
              <p>St. Benedict's Close</p>
              <p>Hampshire</p>
            </div>
          </div>
          <div className="phone">
            <h5>
              <FaPhone
                size={25}
                style={{ color: "#758", marginRight: "2rem" }}
              />
              07721058836
            </h5>
          </div>
          <div className="email">
            <h5>
              <FaMailBulk
                size={25}
                style={{ color: "#758", marginRight: "2rem" }}
              />
              georgiana.beldiman1990@gmail.com
            </h5>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            This is me, Georgiana Beldiman, and I am happy to discuss new
            projects and future collaborations
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#758", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#758", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#758", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
