import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home({ onNavigate }) {
  return (
    <div className="bg-ufit-grid" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab="Home" onNavigate={onNavigate} />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
        <HeroSection onGetStarted={() => onNavigate('Register')} />
      </main>
    </div>
  );
}
