"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Curve = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: -50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
  <div className="relative bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left side with curved right border */}
        <div
          className="relative w-full md:w-1/2 flex flex-col justify-center rounded-r-full items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(90deg, #79C1BE 0%, #FFFFFF 50%, #76B260 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* CARDIAC SURGERY */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Cardiac Surgery
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      World-class cardiac surgery procedures including bypass, valve replacement, and heart transplants. Our expert surgeons use cutting-edge technology for optimal patient outcomes.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#76B260] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-heartbeat text-white text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* NEUROSURGERY */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Neurosurgery
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Advanced neurological surgeries including brain tumor removal, spinal surgery, and complex neurological procedures performed by internationally trained specialists.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#76B260] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-brain text-white text-2xl"></i>
              </motion.div>
            </motion.div>
            {/* JOINT REPLACEMENT */}
            <motion.div 
              className="flex items-center space-x-6"
              variants={itemVariants}
              whileHover="hover"
            >
              <div>
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Joint Replacement
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Complete knee, hip, and shoulder replacement surgeries using the latest prosthetic technology and minimally invasive techniques for faster recovery.
                </p>
              </div>
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#76B260] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-walking text-white text-2xl"></i>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Center image */}
        <motion.div 
          className="relative w-full md:w-auto -mx-20 md:mx-0 z-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            rotate: 15,
            rotateY: 15,
            rotateX: 10,
            transition: { duration: 0.4 }
          }}
        >
          <img
            alt="Medical equipment and hospital furniture"
            className="object-contain"
            height={500}
            src="/Travel and Logistics Support.jpeg"
            width={600}
          />
        </motion.div>
        {/* Right side with curved left border */}
        <div
          className="relative w-full rounded-l-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-6 py-8 sm:py-12 md:py-24"
          style={{
            background: 'linear-gradient(270deg, #79C1BE 0%, #FFFFFF 50%, #76B260 100%)',
          }}
        >
          <motion.div 
            className="max-w-md space-y-8 sm:space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ORGAN TRANSPLANT */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#79C1BE] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-hand-holding-heart text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Organ Transplant
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Comprehensive organ transplant services including kidney, liver, and heart transplants with state-of-the-art facilities and experienced transplant teams.
                </p>
              </div>
            </motion.div>
            {/* COSMETIC SURGERY */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#79C1BE] w-20 h-20 items-center justify-center xs:flex sm:flex md:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-user-md text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Cosmetic Surgery
                </h3>
                      <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                        Advanced cosmetic and plastic surgery procedures performed by board-certified surgeons. From reconstructive to aesthetic procedures, achieving natural-looking results.
                </p>
              </div>
            </motion.div>
            {/* FERTILITY TREATMENT */}
            <motion.div 
              className="flex items-center space-x-6 justify-end"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div 
                className="flex-shrink-0 rounded-full bg-[#79C1BE] w-20 h-20 items-center justify-center sm:flex"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fas fa-baby text-white text-2xl"></i>
              </motion.div>
              <div className="text-left">
                <h3 className="text-black font-semibold text-base sm:text-lg leading-6">
                  Fertility Treatment
                </h3>
                    <p className="text-black text-xs sm:text-sm leading-6 max-w-xs mx-auto mt-2">
                      Complete fertility solutions including IVF, ICSI, and advanced reproductive technologies with high success rates and personalized treatment plans.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Curve;