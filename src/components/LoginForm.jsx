import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import googleLogo from '../assets/google_logo.svg';

export default function LoginForm({ onSignUp, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess({ email });
    }
  };

  return (
    <div 
      className="border-red-glow"
      style={{
        background: 'rgba(10, 2, 4, 0.92)',
        backdropFilter: 'blur(16px)',
        borderRadius: '20px',
        padding: '36px 32px 28px 32px',
        width: '100%',
        maxWidth: '430px',
        boxShadow: '0 0 35px rgba(255, 26, 60, 0.35), 0 10px 40px rgba(0, 0, 0, 0.8)',
        zIndex: 10
      }}
    >
      {/* Top Header Logo & Tagline */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <Logo size="large" />
        <div style={{ 
          color: '#9ea3ab', 
          fontSize: '12px', 
          fontWeight: 400, 
          letterSpacing: '0.05em', 
          marginTop: '6px' 
        }}>
          Move &nbsp;•&nbsp; Measure &nbsp;•&nbsp; Improve
        </div>
        {/* Red horizontal divider bar */}
        <div style={{
          width: '28px',
          height: '2px',
          backgroundColor: '#ff1a3c',
          margin: '10px auto 0 auto',
          borderRadius: '1px'
        }} />
      </div>

      {/* Welcome Back Titles */}
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 800, 
          color: '#ffffff',
          marginBottom: '6px'
        }}>
          Welcome Back
        </h2>
        <p style={{ 
          fontSize: '13px', 
          color: '#9ea3ab',
          fontWeight: 400
        }}>
          Log in to continue your fitness journey
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Email Field */}
        <div style={{ position: 'relative' }}>
          <Mail 
            size={18} 
            color="#6c707a" 
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
          />
          <input 
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-ufit"
            required
          />
        </div>

        {/* Password Field */}
        <div style={{ position: 'relative' }}>
          <Lock 
            size={18} 
            color="#6c707a" 
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
          />
          <input 
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-ufit"
            style={{ paddingRight: '42px' }}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#6c707a',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Remember Me & Forgot Password Row */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          fontSize: '13px',
          marginTop: '2px'
        }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#d1d5db' }}>
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="checkbox-red"
            />
            <span>Remember Me</span>
          </label>
          <a 
            href="#forgot" 
            onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }}
            style={{ color: '#ff1a3c', textDecoration: 'none', fontWeight: 500 }}
          >
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button 
          type="submit" 
          className="btn-primary-red"
          style={{ width: '100%', padding: '13px', fontSize: '15px', marginTop: '6px' }}
        >
          Login <ArrowRight size={18} strokeWidth={2.5} />
        </button>
      </form>

      {/* OR Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        margin: '20px 0',
        gap: '12px'
      }}>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#25262c' }} />
        <span style={{ fontSize: '11px', color: '#6c707a', fontWeight: 600 }}>OR</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#25262c' }} />
      </div>

      {/* Continue with Google */}
      <button 
        type="button" 
        onClick={() => alert('Google authentication simulated successfully!')}
        className="btn-google"
      >
        <img src={googleLogo} alt="Google logo" style={{ width: '18px', height: '18px' }} />
        <span>Continue with Google</span>
      </button>

      {/* Sign Up Link Footer */}
      <div style={{ 
        textAlign: 'center', 
        fontSize: '13px', 
        color: '#9ea3ab', 
        marginTop: '22px' 
      }}>
        Don't have an account?{' '}
        <span 
          onClick={onSignUp}
          style={{ color: '#ff1a3c', fontWeight: 600, cursor: 'pointer' }}
        >
          Sign Up
        </span>
      </div>
    </div>
  );
}
