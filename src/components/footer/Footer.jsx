import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                   Made with ❤️💕 by  Abhishek kumar choudhary ©
            
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/abhishekkumar.chaudhary.9022?mibextid=ZbWKwL"><span className="icon"  >
                        <FaFacebookF />
                    </span></a>

                    <a href="https://instagram.com/chy_avi_?igshid=ZDdkNTZiNTM="><span className="icon">
                        <FaInstagram />
                    </span></a>

                    <a href="https://twitter.com/Amarjee88682034"> <span className="icon">
                        <FaTwitter />
                    </span></a>
                   
                   <a  href="https://www.linkedin.com/in/abhishek-kumar-choudhary-7224a9206"><span className="icon">
                        <FaLinkedin />
                    </span></a>
                    
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
