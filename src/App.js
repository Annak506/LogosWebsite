import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import Blogs from './pages/Blogs';
import Reviews from './pages/Reviews';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <strong>#Logos</strong>
        </Link>
        <nav>
          <Link to="/about">Over ons</Link>
          <Link to="/information">Cursussen</Link>
          <Link to ="/reviews">Recensies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
