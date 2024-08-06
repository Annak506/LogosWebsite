import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import Blogs from './pages/Blogs';
import './App.css';
import App from './App.js'



// Correct usage with ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
