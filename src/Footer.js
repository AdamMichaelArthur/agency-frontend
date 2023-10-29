import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start mt-auto">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Get In Touch</h5>
            <p>
              We're here to help you take your construction business to the next level. Contact us to start getting more leads and winning more jobs.
            </p>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/testimonial" className="text-white">Testimonials</Link>
              </li>
              <li>
                <Link to="/video" className="text-white">Video</Link>
              </li>
              <li>
                <Link to="/case-study" className="text-white">Case Studies</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-white">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/services" className="text-white">Services</Link>
              </li>
              <li>
                <Link to="/local-seo" className="text-white">Local SEO</Link>
              </li>
              <li>
                <Link to="/google-ads" className="text-white">Google Ads</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/google-ads" className="text-white">Google Ads</a>
              </li>
              <li>
                <a href="/local-seo" className="text-white">Local SEO</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Legal</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/privacy-policy" className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-white">Terms and Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center p-3" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
        © 2023: 
        <a className="text-white" href="https://hammerheadads.com/"> Hammerhead Ads</a>
      </div>
    </footer>
  );
}

export default Footer;
