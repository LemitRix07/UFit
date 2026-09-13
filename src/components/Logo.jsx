import React from 'react';

export default function Logo({ size = 'large', onClick }) {
  const isLarge = size === 'large';
  const fontSize = isLarge ? '28px' : '22px';
  
  return (
    <div 
      onClick={onClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        fontFamily: "'Inter', sans-serif",
        fontWeight: 900,
        fontSize: fontSize,
        letterSpacing: '0.02em',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none'
      }}
    >
      <span style={{ color: '#ff1a3c' }}>U</span>
      <span style={{ color: '#ffffff' }}>FIT</span>
    </div>
  );
}
