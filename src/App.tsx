import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CreatorDashboard from './pages/CreatorDashboard';
import CardCustomization from './pages/CardCustomization';
import RecipientView from './pages/RecipientView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-analog-cream font-body text-analog-dark">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatorDashboard />} />
          <Route path="/customize" element={<CardCustomization />} />
          <Route path="/view/:cardId" element={<RecipientView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 