import React from 'react'
import { FaSnowflake, FaVial, FaShieldVirus, FaPumpMedical, FaProcedures, FaBiohazard, FaLightbulb, FaWind, FaTint, FaFlask, FaTemperatureLow } from 'react-icons/fa';


const WhatWeDo = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center animate-fadein">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-6 tracking-wide">What We Do</h2>
        <p className="text-black text-base md:text-lg mb-8">At Doctor Hand, our mission is to simplify healthcare for patients across the globe by providing end-to-end medical tourism and patient support services. We understand that seeking treatment in another country can feel overwhelming, so we make the process accessible, reliable, and stress-free.</p>
        <p className="text-black text-base md:text-lg mb-8 font-semibold">Here's how we help you at every stage of your medical journey:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#FFF7E6] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#76B260] mb-2">1. Comprehensive Medical Care</h3>
            <p className="text-black">We connect patients with top hospitals, globally recognized doctors, and advanced medical facilities in India. Whether you need a complex surgery like a bone marrow transplant, cardiac surgery, or organ transplant, or specialized treatments such as fertility care, cosmetic surgery, dental procedures, or eye treatments, we ensure that you receive the right treatment from the right expert at the right time.</p>
          </div>
          <div className="bg-[#E6FFF7] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#79C1BE] mb-2">2. Travel & Logistics Support</h3>
            <p className="text-black">From the moment you decide to travel, we take care of all the details. Our services include medical visa assistance, international and domestic flight bookings, airport pickups, and hotel or guest house arrangements close to the hospital. We make sure your journey is smooth and hassle-free, so you can focus on your health.</p>
          </div>
          <div className="bg-[#F0F4FF] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#76B260] mb-2">3. Administrative Coordination</h3>
            <p className="text-black">We handle the often complicated paperwork and formalities for you. This includes hospital appointments, admission processes, medical records transfer, and coordination with doctors. Our team ensures that your treatment schedule is well-organized, saving you time and reducing stress.</p>
          </div>
          <div className="bg-[#FFF0F6] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#79C1BE] mb-2">4. Patient & Family Support</h3>
            <p className="text-black">We believe in caring not just for patients, but also for their families. Each patient is assigned a dedicated case manager who offers 24/7 assistance, translation services, emotional support, and guidance throughout the treatment process. Families are kept updated and made comfortable during their stay.</p>
          </div>
          <div className="bg-[#F7FFF0] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#76B260] mb-2">5. Tourism & Wellness Add-Ons</h3>
            <p className="text-black">India is not only known for advanced medical treatments but also for its rich culture, spiritual wellness, and natural therapies. While healing, patients and families can explore India's historical sites, heritage, and wellness retreats. We also provide Ayurveda, yoga, and spa packages to promote holistic recovery.</p>
          </div>
          <div className="bg-[#E6FFF7] rounded-xl p-6 shadow">
            <h3 className="text-xl font-bold text-[#79C1BE] mb-2">6. Financial & Legal Assistance</h3>
            <p className="text-black">Transparency is at the heart of our services. We provide accurate cost estimates, detailed treatment packages, and clear billing with no hidden charges. Our team also assists with insurance claims, medical loans, and any required legal documentation to ensure financial clarity and peace of mind.</p>
          </div>
        </div>
        <p className="text-black text-base md:text-lg mt-10">Our comprehensive approach ensures that every aspect of your medical journey is carefully managed, allowing you to focus entirely on your recovery and well-being while we handle everything else with professional expertise and compassionate care.</p>
      </div>
      <style>{`
        @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
      `}</style>
    </section>
  );
}

export default WhatWeDo