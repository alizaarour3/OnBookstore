import React from 'react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';

const Home = ({ onAddToCart }) => {
  const featuredBooks = books.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Discover Your Next Favorite Book
              </h1>
              <p className="lead mb-4">
                Explore our vast collection of books across all genres. 
                From classic literature to modern bestsellers, find the perfect read for every occasion.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/books" className="btn btn-light btn-lg">
                  Browse All Books
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="fs-1" style={{fontSize: '8rem'}}>📚</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2>Why Choose Our Bookstore?</h2>
              <p className="lead">We offer the best reading experience</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">🚚</div>
                  <h5>Free Shipping</h5>
                  <p>Free delivery on all orders over $25. Fast and reliable shipping to your doorstep.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">⭐</div>
                  <h5>Quality Books</h5>
                  <p>Carefully curated selection of bestsellers and hidden gems across all genres.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 h-100">
                <div className="card-body">
                  <div className="fs-1 text-primary mb-3">📱</div>
                  <h5>Easy Returns</h5>
                  <p>30-day return policy for your peace of mind. Customer satisfaction guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <h2 className="text-center">Featured Books</h2>
              <p className="text-center text-muted">Check out some of our most popular titles</p>
            </div>
          </div>
          <div className="row">
            {featuredBooks.map(book => (
              <div key={book.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img 
                    src={book.image} 
                    className="card-img-top" 
                    alt={book.title}
                    style={{ height: '300px', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x300/6c757d/ffffff?text=No+Image";
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">by {book.author}</p>
                    <p className="card-text flex-grow-1">{book.description.substring(0, 100)}...</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <strong className="text-success">${book.price}</strong>
                      <div>
                        <Link 
                          to={`/book/${book.id}`} 
                          className="btn btn-outline-primary btn-sm me-2"
                        >
                          Details
                        </Link>
                        <button 
                          className="btn btn-primary btn-sm"
                          onClick={() => onAddToCart(book)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/books" className="btn btn-primary btn-lg">
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-dark text-white">
        <div className="container text-center">
          <h2>Ready to Start Reading?</h2>
          <p className="lead mb-4">Join thousands of happy readers who found their next favorite book with us</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/books" className="btn btn-primary btn-lg">
              Browse Collection
            </Link>
            <Link to="/contact" className="btn btn-outline-light btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;