import React from "react";
import './Footer.css'

const socialMediaImages = require.context('../../assets/socialMedia')

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-social-media">
        <a href="https://github.com/katherine-na" target="_blank" rel="noopener noreferrer" >
            <img className="footer-image" src={socialMediaImages(`./github.png`)} alt="logo-github"/>
        </a>
        <a href="https://www.linkedin.com/in/katherine-negrete-07b65b240/" target="_blank" rel="noopener noreferrer">
            <img className="footer-image" src={socialMediaImages(`./linkeding.jpeg`)} alt="logo-linkeding"/>
        </a>
      </div>
      <div className="footer-info">
        <p>© Handcrafted by Katherine Negrete 2022</p>
        <p>CDMX, México</p>
      </div>
    </section>
  );
};

export default Footer;
