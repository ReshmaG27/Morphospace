import React from "react";
import fb from '../../images/fb2.png'; // Facebook image
import insta from '../../images/insta2.png'; // Instagram image
import twitter from '../../images/x.png'; // Twitter image
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are a family-owned furniture store committed to offering the
            finest quality furniture for every room in your home.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <ul>
            <li>Email: customizeurfurnitures@gmail.com</li>
            <li>Phone: +91 9874563210</li>
            <li>Address: 123 T.Nagar, Chennai - 600 015</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media-links">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" id="fb">
                <img src={fb} alt="Facebook" className="social-icon" />
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" id="twitter">
                <img src={twitter} alt="Twitter" className="social-icon" />
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" id="insta">
                <img src={insta} alt="Instagram" className="social-icon" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Furniture Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
