import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="display-4 text-center mb-5">About Our Bookstore</h1>
          
          <div className="row mb-5">
            <div className="col-md-6 mb-4">
              <div className="bg-light p-5 rounded text-center h-100">
                <div className="fs-1 text-primary mb-3">📚</div>
                <h4>Our Bookstore</h4>
                <p className="mb-0">Dedicated to bringing stories to life</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <h3>Our Story</h3>
              <p>
                Founded with a passion for literature, our bookstore has been dedicated to bringing 
                the joy of reading to book lovers around the world. We believe in the power of books 
                to transform lives, inspire creativity, and connect people across cultures.
              </p>
              <p>
                Our carefully curated collection features books across all genres, from timeless 
                classics to contemporary bestsellers, ensuring there's something for every reader.
              </p>
              <Link to="/books" className="btn btn-primary mt-3">
                Explore Our Collection
              </Link>
            </div>
          </div>

          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">🎯</div>
                  <h5>Our Mission</h5>
                  <p>To make quality literature accessible to everyone and foster a lifelong love of reading through our diverse collection and community events.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">👁️</div>
                  <h5>Our Vision</h5>
                  <p>To be the world's most beloved destination for book lovers and literary enthusiasts, creating spaces where stories come alive.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">💎</div>
                  <h5>Our Values</h5>
                  <p>Quality, accessibility, community, and exceptional customer service guide everything we do in serving our readers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-5 rounded">
            <h3 className="text-center mb-4">Why Choose Us?</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3">✅ Wide selection of books across all genres</li>
                  <li className="mb-3">✅ Competitive prices and regular discounts</li>
                  <li className="mb-3">✅ Fast and reliable shipping worldwide</li>
                  <li className="mb-3">✅ Expert book recommendations</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3">✅ Easy 30-day return policy</li>
                  <li className="mb-3">✅ Excellent customer support</li>
                  <li className="mb-3">✅ Community book clubs and events</li>
                  <li className="mb-3">✅ Regular new arrivals and updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <h4>Ready to explore our world of books?</h4>
            <p className="lead">Start your reading journey with us today</p>
            <Link to="/books" className="btn btn-primary btn-lg me-3">
              Browse Books
            </Link>
            <Link to="/contact" className="btn btn-outline-primary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;