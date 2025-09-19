import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from './components/Footer';


export default function App() {
  // state for loading bar progress
  const [progress, setProgress] = useState(0);

  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;

  
  return (
    <div>
      <Router>
        {/* Loading bar */}
        <LoadingBar
          color="#f11946"
          progress={progress}   
          height={3}
        />

        {/* Navbar */}
        <NavBar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" />} />
          <Route path="/about" element={<About key="about" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}
