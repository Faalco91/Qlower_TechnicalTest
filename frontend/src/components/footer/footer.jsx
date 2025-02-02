import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
        <hr className="footer-separator" /> {/* Ajoutez cette ligne pour la barre horizontale */}
        <div className="footer-content">
            <p>&copy; 2025 Qlower. Tous droits réservés.</p>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;