import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';  // Sidebar'ı dahil ettik
import Footer from './components/Footer';    // Footer'ı dahil ettik
import Ekibimiz from './components/Ekibimiz';    // Footer'ı dahil ettik
import './App.css';
import vid from "../images/video.mov"

// Sayfalar
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from "./pages/Blog";

function App() {
  return (
    
    <Router>
      
      <div className="App">
       
        <Sidebar />  {/* Sidebar'ı buraya dahil ettik */}
        <div className="content">
          <Link to="/"><h2 className='logom'>MASTAR</h2></Link> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <video autoPlay loop muted playsInline>
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <Footer />  {/* Footer'ı sayfanın altına ekledik */}
      </div>
    </Router>
  );
}

export default App;
