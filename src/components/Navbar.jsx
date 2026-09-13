import React from 'react';
import Logo from './Logo';

export default function Navbar({ activeTab = 'Home', onNavigate }) {
  return (
    <header style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '32px 5vw 10px 5vw',
      position: 'relative',
      zIndex: 20
    }}>
      {/* Left: Logo */}
      <Logo size="large" onClick={() => onNavigate('Home')} />

      {/* Center: Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '48px'
      }}>
        {['Home', 'Features', 'About'].map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => onNavigate(tab)}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? '#ff1a3c' : '#9ea3ab',
                fontSize: '15px',
                fontWeight: isActive ? 600 : 400,
                cursor: 'pointer',
                position: 'relative',
                paddingBottom: '6px',
                transition: 'color 0.2s ease'
              }}
            >
              {tab}
              {isActive && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '5%',
                  width: '90%',
                  height: '2px',
                  backgroundColor: '#ff1a3c',
                  borderRadius: '1px'
                }} />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right: Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
        <button 
          onClick={() => onNavigate('Login')}
          className="btn-outline-dark"
        >
          Login
        </button>
        <button 
          onClick={() => onNavigate('Register')}
          className="btn-pill-red"
        >
          Register
        </button>
      </div>
    </header>
  );
}
