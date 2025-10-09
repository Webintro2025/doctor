"use client";
import React from 'react'
import { motion } from 'framer-motion'


const Choose = () => {
  return (
    <section className="w-full py-16 px-2 sm:px-8 bg-white">
            <div className="w-full animate-fadein">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-black mb-8 tracking-wide drop-shadow-lg">Why Choose Us</h2>
        <p className="text-black text-lg md:text-xl mb-8 text-center">Choosing the right healthcare partner can make all the difference in your treatment journey. At Doctor Hand, we go beyond just connecting you with hospitals – we become your trusted guide and support system throughout the entire process. Here's why patients from around the world choose us:</p>
        <ul className="list-none space-y-6 mb-8 w-full max-w-5xl mx-auto">
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#79C1BE]"><span className="font-bold text-[#76B260] text-lg">✔ Expert Network of Doctors & Hospitals</span><span className="text-black mt-2">We work with India's leading multi-specialty hospitals, JCI/NABH accredited institutions, and globally renowned surgeons. From complex organ transplants to advanced cosmetic procedures, we ensure you get the best medical expertise backed by modern technology and international standards of care.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#76B260]"><span className="font-bold text-[#76B260] text-lg">✔ End-to-End Assistance</span><span className="text-black mt-2">Your journey with us begins the moment you reach out. We provide complete assistance with medical visas, travel planning, hospital appointments, documentation, admission, treatment, and even post-treatment follow-ups once you return home. You don't have to worry about a single step—we handle it all.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#79C1BE]"><span className="font-bold text-[#76B260] text-lg">✔ Affordable Excellence</span><span className="text-black mt-2">Healthcare in India offers world-class treatments at a fraction of the cost compared to the US, UK, or Europe. We ensure transparent pricing, tailored treatment packages, and no compromise on quality or safety, making advanced medical care affordable and accessible.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#76B260]"><span className="font-bold text-[#76B260] text-lg">✔ Patient-Centric Approach</span><span className="text-black mt-2">We place the patient and their family at the heart of everything we do. Our dedicated care managers provide personalized guidance, emotional support, translation services, and 24/7 assistance. We ensure that you feel safe, comfortable, and respected throughout your treatment journey.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#79C1BE]"><span className="font-bold text-[#76B260] text-lg">✔ Trusted & Transparent</span><span className="text-black mt-2">With Doctor Hand, there are no hidden charges, false promises, or last-minute surprises. We believe in honest communication, clear medical opinions, and genuine guidance, making sure you are always fully informed and confident about your decisions.</span></li>
          <li className="rounded-xl p-4 shadow flex flex-col border border-[#76B260]"><span className="font-bold text-[#76B260] text-lg">✔ Holistic Experience</span><span className="text-black mt-2">Beyond medical treatment, we help patients and their families explore India's cultural richness, wellness therapies, Ayurveda, yoga, and meditation programs. This combination of advanced medicine with traditional healing makes recovery smoother, healthier, and more fulfilling.</span></li>
        </ul>
        <div className="text-center space-y-4 mb-8">
          <p className="text-black text-lg md:text-xl font-semibold">✨ With Doctor Hand, you don't just get treatment—you get a partner who truly cares for your health, comfort, and peace of mind.</p>
          <div className="space-y-2 text-black text-base md:text-lg">
        
            <p>📞 Call / WhatsApp: +91 7899294918</p>
            <p className="font-semibold">🌐 Doctor Hand – Your Trusted Partner in Medical Tourism</p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default Choose;