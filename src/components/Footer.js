import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">📚 BookStore</h5>
            <p className="mt-3">Your trusted partner for quality books and exceptional reading experiences.</p>
            <div className="d-flex mt-4">
              <span className="fs-5 me-3">📘</span>
              <span className="fs-5 me-3">📗</span>
              <span className="fs-5">📙</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none hover-primary">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/books" className="text-light text-decoration-none hover-primary">
                  Books
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none hover-primary">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none hover-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a href="/books" className="text-light text-decoration-none hover-primary">
                  Fiction
                </a>
              </li>
              <li className="mb-2">
                <a href="/books" className="text-light text-decoration-none hover-primary">
                  Non-Fiction
                </a>
              </li>
              <li className="mb-2">
                <a href="/books" className="text-light text-decoration-none hover-primary">
                  Science Fiction
                </a>
              </li>
              <li className="mb-2">
                <a href="/books" className="text-light text-decoration-none hover-primary">
                  Fantasy
                </a>
              </li>
              <li className="mb-2">
                <a href="/books" className="text-light text-decoration-none hover-primary">
                  Classic Literature
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Info</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="me-2 mt-1">✉️</span>
                  <div>
                    <strong>Email:</strong><br />
                    <a 
                      href="mailto:alizaarour983@gmail.com" 
                      className="text-light text-decoration-none"
                    >
                      alizaarour983@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="me-2 mt-1">📞</span>
                  <div>
                    <strong>Phone:</strong><br />
                    <a 
                      href="tel:+96181667908" 
                      className="text-light text-decoration-none"
                    >
                      +961 81 667 908
                    </a>
                  </div>
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-start">
                  <span className="me-2 mt-1">📍</span>
                  <div>
                    <strong>Location:</strong><br />
                    <span className="text-light">
                      Amchit Kfarsela, Lebanon
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-start">
                  <span className="me-2 mt-1">🕒</span>
                  <div>
                    <strong>Hours:</strong><br />
                    <span className="text-light">
                      Mon-Fri: 9AM-6PM<br />
                      Sat: 10AM-4PM
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="bg-light my-4" />
        
        {/* Copyright Section */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; 2025 BookStore. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">Made by Ali Zaarour for Books Lovers</p>
          </div>
        </div>

        {/* Additional Social/Contact Links */}
        <div className="row mt-3">
          <div className="col-12 text-center">
            <div className="d-flex justify-content-center gap-4">
              <a 
                href="mailto:alizaarour983@gmail.com" 
                className="text-light text-decoration-none d-flex align-items-center"
              >
                <span className="me-2">✉️</span>
                Email Us
              </a>
              <a 
                href="tel:+96181667908" 
                className="text-light text-decoration-none d-flex align-items-center"
              >
                <span className="me-2">📞</span>
                Call Now
              </a>
              <a 
                href="https://www.google.com/maps/place/Kfar+Sal/@34.1347921,35.6280422,4353m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x151f5c8e16a1ba11:0xb4f17ed2cfece310!2sAamchit!3b1!8m2!3d34.1489249!4d35.6377739!16zL20vMGZrZzdo!3m5!1s0x151f5c9f58797ec3:0x38ca65bc46442b86!8m2!3d34.1347588!4d35.6486419!16s%2Fg%2F1tf8jzgg?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light text-decoration-none d-flex align-items-center"
              >
                <span className="me-2">📍</span>
                Find Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;