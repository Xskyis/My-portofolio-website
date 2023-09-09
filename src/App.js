import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import Headroom from 'react-headroom';

function App() {
  return (
    <div className="App">
        <Headroom>
          <Navbar />
        </Headroom>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
