import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Information from "./pages/Information"
import inkBottle from "./assets/images/inkBottle.png";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/"> #Logos </Link>
        <nav>
          <Link to="/about">Over ons</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);