import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <span className="fs-3 me-2">📚</span>
          <span>BookStore</span>
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/"
                onClick={() => setIsNavCollapsed(true)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/books"
                onClick={() => setIsNavCollapsed(true)}
              >
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/about"
                onClick={() => setIsNavCollapsed(true)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contact"
                onClick={() => setIsNavCollapsed(true)}
              >
                Contact
              </Link>
            </li>
          </ul>
          
          <div className="d-flex">
            <Link to="/books" className="btn btn-outline-light me-2">
              🔍 Search Books
            </Link>
            <button className="btn btn-primary position-relative">
              🛒 Cart
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;