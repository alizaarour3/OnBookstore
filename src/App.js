import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Contact from './pages/Contact';
import BookDetails from './pages/BookDetails';
import './styles/App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
    alert(`${book.title} added to cart!`);
  };

  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header cartItems={cartItems} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/books" element={<Books onAddToCart={addToCart} />} />
            <Route path="/book/:id" element={<BookDetails onAddToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;