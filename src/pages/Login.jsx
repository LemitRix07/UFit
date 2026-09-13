import React from 'react';
import Logo from '../components/Logo';
import LoginVisual from '../components/LoginVisual';
import LoginForm from '../components/LoginForm';

export default function Login({ onNavigate }) {
  return (
    <div className="bg-ufit-grid" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar with Logo */}
      <header style={{
        width: '100%',
        padding: '32px 5vw 10px 5vw',
        position: 'relative',
        zIndex: 20
      }}>
        <Logo size="large" onClick={() => onNavigate('Home')} />
      </header>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 5vw 40px 5vw',
        width: '100%',
        gap: '4vw'
      }}>
        {/* Left Side: Female Sprinter Visual */}
        <LoginVisual />

        {/* Right Side: Login Card */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <LoginForm 
            onSignUp={() => onNavigate('Register')} 
            onLoginSuccess={(user) => {
              alert(`Successfully logged in as ${user.email}!`);
              onNavigate('Home');
            }}
          />
        </div>
      </main>
    </div>
  );
}
