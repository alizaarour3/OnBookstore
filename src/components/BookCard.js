import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onAddToCart }) => {
  // Function to handle image loading errors
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/200x300/6c757d/ffffff?text=Cover+Not+Found";
    e.target.alt = `Cover not available for ${book.title}`;
  };

  // Function to render star ratings
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="d-flex align-items-center">
        <div className="text-warning">
          {'★'.repeat(fullStars)}
          {hasHalfStar && '½'}
          {'☆'.repeat(emptyStars)}
        </div>
        <small className="text-muted ms-1">({rating})</small>
      </div>
    );
  };

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm book-card hover-effect">
        <div className="position-relative">
          {/* Book Image */}
          <img 
            src={book.image} 
            className="card-img-top" 
            alt={`Cover of ${book.title} by ${book.author}`}
            style={{ 
              height: '300px', 
              objectFit: 'cover',
              width: '100%',
              borderBottom: '1px solid #dee2e6'
            }}
            onError={handleImageError}
            loading="lazy"
          />
          
          {/* Out of Stock Badge */}
          {!book.inStock && (
            <div className="position-absolute top-0 start-0 m-2">
              <span className="badge bg-danger px-2 py-1">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Bestseller Badge */}
          {book.rating >= 4.5 && book.inStock && (
            <div className="position-absolute top-0 end-0 m-2">
              <span className="badge bg-warning text-dark px-2 py-1">
                ⭐ Bestseller
              </span>
            </div>
          )}
          
          {/* New Arrival Badge */}
          {book.year >= 2020 && (
            <div className="position-absolute bottom-0 start-0 m-2">
              <span className="badge bg-success px-2 py-1">
                New
              </span>
            </div>
          )}
        </div>
        
        {/* Card Body */}
        <div className="card-body d-flex flex-column">
          {/* Book Title */}
          <h5 className="card-title text-dark fw-bold" style={{ minHeight: '3rem' }}>
            {book.title}
          </h5>
          
          {/* Author */}
          <p className="card-text text-muted mb-2">
            by <span className="fst-italic">{book.author}</span>
          </p>
          
          {/* Description */}
          <p className="card-text flex-grow-1 small text-secondary mb-3">
            {book.description.substring(0, 120)}...
          </p>
          
          {/* Category and Rating */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge bg-primary rounded-pill px-3 py-2">
              {book.category}
            </span>
            {renderRating(book.rating)}
          </div>
          
          {/* Additional Info */}
          <div className="d-flex justify-content-between align-items-center small text-muted mb-3">
            {book.pages && (
              <span>📖 {book.pages} pages</span>
            )}
            {book.year && (
              <span>📅 {book.year}</span>
            )}
          </div>
          
          {/* Price and Actions */}
          <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top">
            <div>
              <strong className="text-success fs-4">${book.price}</strong>
              {book.originalPrice && (
                <small className="text-muted text-decoration-line-through ms-2">
                  ${book.originalPrice}
                </small>
              )}
            </div>
            
            <div className="d-flex gap-2">
              {/* Details Button */}
              <Link 
                to={`/book/${book.id}`} 
                className="btn btn-outline-primary btn-sm px-3"
              >
                Details
              </Link>
              
              {/* Add to Cart Button */}
              <button 
                className={`btn btn-sm px-3 ${
                  book.inStock ? 'btn-primary' : 'btn-secondary'
                }`}
                onClick={() => onAddToCart(book)}
                disabled={!book.inStock}
                title={book.inStock ? 'Add to cart' : 'Out of stock'}
              >
                {book.inStock ? (
                  <>
                    <span className="me-1">+</span>
                    Cart
                  </>
                ) : (
                  'Sold Out'
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Quick Actions Footer */}
        <div className="card-footer bg-transparent border-top-0 py-2">
          <div className="d-flex justify-content-between align-items-center small">
            <button 
              className="btn btn-link text-decoration-none text-muted p-0"
              onClick={() => {/* Add to wishlist functionality */}}
              title="Add to wishlist"
            >
              ♡ Wishlist
            </button>
            
            <button 
              className="btn btn-link text-decoration-none text-muted p-0"
              onClick={() => {/* Quick view functionality */}}
              title="Quick view"
            >
              👁️ Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;