import React from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <Header/>
      
    <div className="pagecontent">
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
