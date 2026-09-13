import React from 'react';
import { Dumbbell, Heart, TrendingUp } from 'lucide-react';
import FeatureCard from './FeatureCard';
import loginVisual from '../assets/login_runner_clean.png';

export default function LoginVisual() {
  return (
    <div style={{
      flex: '1.2',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {/* Female Sprinter visual with transparent background */}
        <img 
          src={loginVisual} 
          alt="UFIT Athletic Runner Female" 
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '66vh',
            objectFit: 'contain',
            display: 'block'
          }}
        />

        {/* Floating Feature Card 1: Stronger You */}
        <FeatureCard 
          icon={Dumbbell} 
          line1="Stronger" 
          line2="You" 
          style={{ top: '16%', left: '0%' }}
        />

        {/* Floating Feature Card 2: Healthier Tomorrow */}
        <FeatureCard 
          icon={Heart} 
          line1="Healthier" 
          line2="Tomorrow" 
          style={{ top: '28%', right: '0%' }}
        />

        {/* Floating Feature Card 3: Every Step Counts */}
        <FeatureCard 
          icon={TrendingUp} 
          line1="Every" 
          line2="Step Counts" 
          style={{ bottom: '16%', left: '-2%' }}
        />
      </div>
    </div>
  );
}
