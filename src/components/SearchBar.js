import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, onCategoryChange, selectedCategory }) => {
  const categories = ['All', 'Classic', 'Fiction', 'Science Fiction', 'Romance', 'Fantasy'];
  
  return (
    <div className="row mb-4">
      <div className="col-md-8">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Search books by title or author..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <select 
          className="form-select form-select-lg"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;