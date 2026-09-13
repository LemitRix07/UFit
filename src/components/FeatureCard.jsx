import React from 'react';

export default function FeatureCard({ icon: Icon, line1, line2, style = {} }) {
  return (
    <div 
      className="feature-card"
      style={{
        position: 'absolute',
        zIndex: 10,
        ...style
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ff1a3c'
      }}>
        {Icon && <Icon size={22} strokeWidth={2} />}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.25'
      }}>
        <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: 600 }}>{line1}</span>
        <span style={{ color: '#d1d5db', fontSize: '13px', fontWeight: 500 }}>{line2}</span>
      </div>
    </div>
  );
}
