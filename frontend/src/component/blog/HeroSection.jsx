// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20 md:py-28 px-4 shadow-lg">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 animate-fade-in-up">
        {subtitle}
      </p>
    </section>
  );
};

export default HeroSection;