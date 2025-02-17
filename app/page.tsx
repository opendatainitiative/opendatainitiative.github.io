import React from 'react';
import SocialButtons from './components/SocialButtons';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <SocialButtons />
      
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="text-center space-y-6">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering citizens with data-driven insights into government operations, 
            focusing on Northern California's regulatory landscape and policy implementation.
          </p>
        </section>
      </div>
    </div>
  );
} 