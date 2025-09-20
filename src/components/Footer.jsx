import React from 'react'
import { productDropdownList } from '../data/productList';

const Footer = () => {
  return (
<>
  <div className="bg-[#79C1BE] bg-opacity-20 text-black">
  <footer className="w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
      <div className="md:w-1/4 flex flex-col gap-4 items-start">
        <a href="/" className="cursor-pointer">
          <img src="/logo.jpeg" alt="APS Lab Instruments Logo" className="h-16 w-auto mb-2 animate-fadein" />
        </a>
        <a href="/" className="cursor-pointer">
          <h4 className="text-3xl font-extrabold leading-none tracking-wide text-black animate-fadein hover:text-[#76B260] transition-colors duration-200">
          Doctors Hand
          </h4>
        </a>
        <p className="text-xs md:text-sm max-w-[280px] text-black">
          B 12/3, Okhla Phase-2, Industrial Area Delhi -110020
        </p>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 text-black">
          Quick Links :
        </h2>
        <nav className="flex flex-col gap-2 text-sm md:text-base text-black">
          <a href="/" className="hover:text-[#76B260]">Home</a>
          <a href="/about" className="hover:text-[#76B260]">About Us</a>
          <a href="#" className="hover:text-[#76B260]">Product's</a>
          <a href="/contact" className="hover:text-[#76B260]">Contact Us</a>
        </nav>
      </div>
      <div className="md:w-1/5 flex flex-col gap-4">
        <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 text-black">
          Services :
        </h2>
        <nav className="grid grid-cols-2 gap-1 sm:flex sm:flex-col sm:gap-2 text-xs sm:text-sm md:text-base text-black max-h-56 overflow-auto custom-scrollbar px-1 sm:px-0">
          {productDropdownList.map((item) => (
            <a key={item.slug} href={item.slug} className="hover:text-[#76B260] transition-colors duration-200 py-1 sm:py-0">
              {item.name}
            </a>
          ))}
        </nav>
        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
            background: #79C1BE;
            border-radius: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #76B260;
            border-radius: 8px;
          }
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #76B260 black;
          }
        `}</style>
      </div>
  <div className="md:w-1/4 flex flex-col gap-2 text-black">
  <h2 className="text-lg font-serif underline underline-offset-4 decoration-black decoration-1 pb-1 mb-2 text-black">
          Reach Us :
        </h2>
        <div className="flex items-center gap-2 mb-1 animate-fadein">
          <i className="fas fa-map-marker-alt" style={{color: 'black'}}></i>
          <span>B 12/3, Okhla Phase-2, Industrial Area Delhi -110020</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-id-card" style={{color: 'black'}}></i>
          <span>GST- 07AAOFT1902C1ZG</span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-phone-alt" style={{color: 'black'}}></i>
          <span>Call/Whatsapp: <a href="tel:+917899294918" className="hover:text-[#76B260] transition-colors duration-200">+91-7899294918</a> </span>
        </div>
        <div className="flex items-center gap-2 animate-fadein">
          <i className="fas fa-envelope" style={{color: 'black'}}></i>
          <span>Mail: <a href="mailto:mdtahir000@gmail.com" className="hover:text-[#76B260] transition-colors duration-200">mdtahir000@gmail.com</a></span>
        </div>
      
        <style>{`
          @keyframes fadein { from { opacity: 0; transform: translateY(30px);} to { opacity: 1; transform: translateY(0);} }
          .animate-fadein { animation: fadein 0.8s cubic-bezier(0.4,0,0.2,1); }
        `}</style>
      </div>
    </div>
 <hr />

    <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 text-center text-black text-xs md:text-sm font-serif">
      © 2025 All Rights Reserved. Doctors Hand. Developed & Managed By With
      <span className="text-[#76B260]">❤</span>
      <a href="https://webintro.in" target="_blank" className="text-[#76B260] hover:underline" rel="noopener noreferrer">Webintro.in</a>,
      <a href="https://webintro.in/delhi/" target="_blank" className="text-[#76B260] hover:underline" rel="noopener noreferrer">Google Promotion Services</a>
    </div>
    
  </footer>
  </div>

</>
  )
}

export default Footer