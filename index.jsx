import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Information from "./pages/Information"
import inkBottle from "./assets/images/inkBottle.png";
import Blogs from "./pages/Blogs";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          {" "}
          <strong>#Logos</strong>{" "}
        </Link>
        <nav>
          <Link to="/about">Over ons</Link>
          <Link to="/blogs">Blogs</Link>
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

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);