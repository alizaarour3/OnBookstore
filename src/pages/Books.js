import React, { useState } from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const Books = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Debug: Log books data
  console.log('Total books available:', books.length);
  books.forEach(book => {
    console.log(`Book ${book.id}: ${book.title}`);
  });

  // Get all unique categories from books
  const categories = ['All', ...new Set(books.map(book => book.category))];

  // Filter books
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-5">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="display-4 text-center mb-3">Our Book Collection</h1>
          <p className="lead text-center text-muted">
            Discover {books.length} amazing books from various genres
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="row align-items-end">
                {/* Search Input */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="search" className="form-label fw-bold">Search Books</label>
                  <input
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search by title or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                {/* Category Filter */}
                <div className="col-md-6 mb-3">
                  <label htmlFor="category" className="form-label fw-bold">Filter by Category</label>
                  <select 
                    className="form-select"
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category} {category !== 'All' && `(${books.filter(b => b.category === category).length})`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">
              Showing <strong>{filteredBooks.length}</strong> of <strong>{books.length}</strong> books
              {searchTerm && (
                <span> for "<strong>{searchTerm}</strong>"</span>
              )}
              {selectedCategory !== 'All' && (
                <span> in <span className="badge bg-primary">{selectedCategory}</span></span>
              )}
            </p>
            
            {(searchTerm || selectedCategory !== 'All') && (
              <button 
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="row">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard 
              key={book.id} 
              book={book} 
              onAddToCart={onAddToCart}
            />
          ))
        ) : (
          /* No Results Found */
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-body text-center py-5">
                <div className="fs-1 text-muted mb-3">📚</div>
                <h3>No books found</h3>
                <p className="text-muted mb-4">
                  Try adjusting your search criteria or browse all categories.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  View All Books
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light border-0">
            <div className="card-body">
              <h5 className="text-center mb-4">Collection Statistics</h5>
              <div className="row text-center">
                <div className="col-md-3 mb-3">
                  <div className="fs-3 fw-bold text-primary">{books.length}</div>
                  <div className="text-muted">Total Books</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="fs-3 fw-bold text-success">
                    {books.filter(book => book.inStock).length}
                  </div>
                  <div className="text-muted">In Stock</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="fs-3 fw-bold text-warning">
                    {categories.length - 1}
                  </div>
                  <div className="text-muted">Categories</div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="fs-3 fw-bold text-info">
                    {books.filter(book => book.rating >= 4.5).length}
                  </div>
                  <div className="text-muted">Bestsellers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;