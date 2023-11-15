import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Information from "./pages/Information"
import drawingPen from "./assets/images/drawingPen.png";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">Logos <img src={drawingPen} width = "60px" style={{ marginTop: "15px" }} /> </Link>
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