import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0A10] overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#13111C] to-[#0B0A10]"></div>
      
      {/* Purple glow effects */}
      <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[120px]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32">
        {/* Hero content zde */}
      </div>
    </div>
  );
};

export default HeroSection; 