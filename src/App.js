import React from 'react';
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



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
      <Footer/>
    </div>
  );
}

export default App;
