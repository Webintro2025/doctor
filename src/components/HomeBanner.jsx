"use client";
import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';

const desktopImages = ['/banner1.jpg' , '/banner2.jpg'];
const mobileImages = ['/banner1M.jpg','/banner2M.jpg'];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);

  // Check if screen is mobile/tablet
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint for better mobile detection
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <>
      {/* Banner Section */}
      <div className="w-full relative overflow-hidden h-[250px] sm:h-[320px] md:h-[400px] lg:h-[550px] bg-gray-100 border border-blue-300">
        {images.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt="banner"
            className={`w-full h-full absolute top-0 left-0 transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{ objectFit: 'cover' }}
          />
        ))}
        
        {/* Contact Form - Desktop Only (Top Right) */}
        <div className="absolute top-4 right-8 z-30 w-96 max-w-[calc(100vw-2rem)] hidden md:block">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
            <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Quick Enquiry</h3>
            <ContactForm />
          </div>
        </div>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-md z-20"
          aria-label="Previous slide"
        >
          <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-blue-900 rounded-full p-1 sm:p-2 shadow-md z-20"
          aria-label="Next slide"
        >
          <svg width="18" height="18" className="sm:w-6 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
      
      {/* Mobile Contact Form - Below Banner */}
      <div className="md:hidden bg-gradient-to-r from-blue-50 to-white py-6 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
          <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Quick Enquiry</h3>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;