import React from 'react';
import './Footer.css'; 
import white from "./assets/white.jpg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="logo">
           <img src={white} className="pp1-img"></img> HeartsOfHope
          </h2>
          <p className="footer-p">"Small hands, big potential."</p>
          <address className="footer-add">
            <p>Kovaipudur , Coimbatore , Tamil Nadu</p>
            <p>9566559280</p>
            <p>Hohcharity@gmail.com</p>
          </address>
          <div className="social-icons">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-google"></i></a>
            <a href="#"><i className="fa fa-pinterest"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Pages</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Fundraise</a></li>
            <li><a href="#">GetInvolved</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Latest News</h3>
          <ul>
            <li><a href="/resource">Adoptions in India reach pre-pandemic levels at over 4,000 in a year</a> <span>June 14, 2024</span></li>
            <li><a href="/resource">India's nonprofit sector facing a crisis? Here’s the inside scoop</a> <span>March 5, 2024</span></li>
            <li><a href="/resource">Coronavirus pandemic: Helped by parents, children are doing charitable acts</a> <span>July 2, 2024</span></li>
          </ul>
        </div>

        <div className="footer-section">
  <h3>Contact Form</h3>
  <form>
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="Email Address" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">SEND</button>
  </form>
</div>

      </div>
    </footer>
  );
};

export default Footer;
