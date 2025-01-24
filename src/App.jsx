/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer
import Home from './pages/Home';  // Import the Home page component
import About from './pages/About';  // Import the About page component
import Projects from './pages/Projects';  // Import the Projects page component
import Contact from './pages/Contact';  // Import the Contact page component
import './App.css'; // Ensure this file exists in the src directory

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header that appears on all pages */}
        
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
          <Route path="/about" element={<About />} /> {/* About page route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects page route */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        </Routes>
        
        <Footer /> {/* Footer that appears on all pages */}
      </div>
    </Router>
  );
}

export default App;
