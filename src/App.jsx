import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AmbulancePage from './pages/Ambulance';
import DepannagePage from './pages/Depannage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ambulance" element={<AmbulancePage />} />
        <Route path="/depannage" element={<DepannagePage />} />
      </Routes>
    </Router>
  );
}

export default App;
