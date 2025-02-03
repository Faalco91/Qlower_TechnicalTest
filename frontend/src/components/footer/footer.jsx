import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
        <hr className="footer-separator" /> {/* Ajoutez cette ligne pour la barre horizontale */}
        <div className="footer-content">
            <p>&copy; 2025 Qlower. Tous droits réservés.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.x.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;