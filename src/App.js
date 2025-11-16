import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import Blogs from './pages/Blogs';
import Expats from './pages/Expats';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <strong>#Logos</strong>
        </Link>
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/about">Over ons</Link>
         
 <div className="dropdown">
      <button className="dropbtn">Cursussen ▼</button>
      <div className="dropdown-content">
        <Link to="/information#ambacht">Schrijven als ambacht</Link>
        <Link to="/information#persoonlijk">Het persoonlijk verhaal</Link>
        <Link to="/information#schrijftherapie">Schrijftherapie en empowerment</Link>
        <Link to="/information#expats">Expats en reizigers</Link>
        <Link to="/information#kinderen">Kinderverhalen</Link>
        <Link to="/information#thrillers">Thrillers </Link>
        <Link to="/information#theater">Theater</Link>
      </div>
    </div>

          <Link to="/reviews">Recensies</Link>
          <Link to="https://logosblogs.netlify.app/">Blogs</Link>
          <Link to="https://logosexpats.netlify.app/">Expats</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/expats" element ={<Expats />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
