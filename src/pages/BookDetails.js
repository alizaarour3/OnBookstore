import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';

const BookDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="container py-5 text-center">
        <h2>Book not found</h2>
        <Link to="/books" className="btn btn-primary">
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={book.image} 
            alt={book.title}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/books">Books</Link>
              </li>
              <li className="breadcrumb-item active">{book.title}</li>
            </ol>
          </nav>

          <h1 className="display-5">{book.title}</h1>
          <p className="lead">by {book.author}</p>
          
          <div className="mb-3">
            <span className="badge bg-primary me-2">{book.category}</span>
            <span className="text-warning">
              {'★'.repeat(Math.floor(book.rating))}
              {'☆'.repeat(5 - Math.floor(book.rating))}
              <small className="text-muted"> ({book.rating})</small>
            </span>
          </div>

          <p className="fs-4 text-success mb-4">${book.price}</p>
          
          <p className="mb-4">{book.description}</p>

          <div className="d-grid gap-2 d-md-flex">
            <button 
              className="btn btn-primary btn-lg me-md-2"
              onClick={() => onAddToCart(book)}
              disabled={!book.inStock}
            >
              {book.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <Link to="/books" className="btn btn-outline-secondary btn-lg">
              Continue Shopping
            </Link>
          </div>

          <div className="mt-4">
            <h5>Book Details</h5>
            <ul className="list-unstyled">
              <li><strong>Author:</strong> {book.author}</li>
              <li><strong>Category:</strong> {book.category}</li>
              <li><strong>Availability:</strong> 
                <span className={book.inStock ? 'text-success' : 'text-danger'}>
                  {book.inStock ? ' In Stock' : ' Out of Stock'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;