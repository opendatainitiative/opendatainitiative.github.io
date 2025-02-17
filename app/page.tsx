import React from 'react';
import SocialButtons from './components/SocialButtons';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-32 pb-16">
      <SocialButtons />
      
      <div className="max-w-3/4 mx-auto space-y-12">
        <section className="text-center space-y-6">
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering citizens with data-driven insights into government operations, 
            focusing on Northern California's regulatory landscape and policy implementation.
          </p>
        </section>
        
        {/* New Coming Soon Section */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            More consistent content from AI agents doing research, analysis, and posting the results here.
          </p>
        </section>
      </div>
    </div>
  );
}