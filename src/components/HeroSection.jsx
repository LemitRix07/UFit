import React from 'react';
import { Activity, BarChart2, Target, ArrowRight } from 'lucide-react';
import FeatureCard from './FeatureCard';
import heroVisual from '../assets/hero_runner_clean.png';

export default function HeroSection({ onGetStarted }) {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 5vw 40px 5vw',
      width: '100%',
      minHeight: 'calc(100vh - 100px)',
      gap: '4vw'
    }}>
      {/* Left Column: Headline & Description & CTA */}
      <div style={{
        flex: '1',
        maxWidth: '640px',
        zIndex: 10
      }}>
        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(52px, 5.2vw, 82px)',
          fontWeight: 900,
          lineHeight: '1.04',
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          marginBottom: '28px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ color: '#ffffff' }}>MOVE YOUR</div>
          <div style={{ color: '#ffffff' }}>BODY.</div>
          <div style={{ color: '#ff1a3c' }}>MEASURE.</div>
          <div style={{ color: '#ff1a3c' }}>IMPROVE.</div>
        </h1>

        {/* Supporting Description */}
        <p style={{
          color: '#9ea3ab',
          fontSize: '17px',
          lineHeight: '1.6',
          fontWeight: 400,
          marginBottom: '38px',
          maxWidth: '480px'
        }}>
          Your AI-powered fitness companion built to help you<br />
          move, measure and improve.
        </p>

        {/* Get Started Button */}
        <button 
          onClick={onGetStarted}
          className="btn-primary-red"
          style={{
            padding: '15px 36px',
            fontSize: '17px',
            borderRadius: '14px'
          }}
        >
          Get Started <ArrowRight size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* Right Column: Runner Visual & Floating Feature Cards */}
      <div style={{
        flex: '1.3',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '740px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {/* Runner Image isolated with transparent background */}
          <img 
            src={heroVisual} 
            alt="UFIT Athletic Runner" 
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '68vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          {/* Floating Feature Card 1: Better Health */}
          <FeatureCard 
            icon={Activity} 
            line1="Better" 
            line2="Health" 
            style={{ top: '20%', left: '2%' }}
          />

          {/* Floating Feature Card 2: Track Progress */}
          <FeatureCard 
            icon={BarChart2} 
            line1="Track" 
            line2="Progress" 
            style={{ top: '40%', right: '-3%' }}
          />

          {/* Floating Feature Card 3: Reach Goals */}
          <FeatureCard 
            icon={Target} 
            line1="Reach" 
            line2="Goals" 
            style={{ bottom: '16%', right: '5%' }}
          />
        </div>
      </div>
    </section>
  );
}
