import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import Blogs from './pages/Blogs';
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
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
