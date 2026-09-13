import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {
  const [currentView, setCurrentView] = useState('Home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#060102' }}>
      {currentView === 'Home' && <Home onNavigate={handleNavigate} />}
      {currentView === 'Login' && <Login onNavigate={handleNavigate} />}
      {currentView === 'Register' && <Login onNavigate={handleNavigate} />}
      {currentView === 'Features' && (
        <div className="bg-ufit-grid" style={{ minHeight: '100vh', padding: '60px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', color: '#ff1a3c', marginBottom: '20px' }}>UFIT AI Features</h1>
          <p style={{ color: '#9ea3ab', marginBottom: '40px' }}>Real-time motion tracking, AI workout feedback, and goal analytics.</p>
          <button onClick={() => handleNavigate('Home')} className="btn-primary-red">
            Back to Home
          </button>
        </div>
      )}
      {currentView === 'About' && (
        <div className="bg-ufit-grid" style={{ minHeight: '100vh', padding: '60px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', color: '#ff1a3c', marginBottom: '20px' }}>About UFIT</h1>
          <p style={{ color: '#9ea3ab', marginBottom: '40px' }}>The next-generation AI fitness companion built to help you move, measure and improve.</p>
          <button onClick={() => handleNavigate('Home')} className="btn-primary-red">
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
