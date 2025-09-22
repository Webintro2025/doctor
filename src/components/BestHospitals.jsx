"use client";
import React from 'react';

const BestHospitals = () => {
  const hospitals = [
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      location: "New Delhi",
      image: "/hospitals/aiims.jpg",
      specialties: ["Cardiology", "Neurosurgery", "Oncology", "Orthopedics"]
    },
    {
      name: "Fortis Healthcare",
      location: "Multiple Locations - Delhi NCR",
      image: "/hospitals/fortis.jpg",
      specialties: ["Heart Surgery", "Transplants", "Cancer Care", "Emergency"]
    },
    {
      name: "Max Healthcare",
      location: "Saket, Gurgaon, Noida",
      image: "/hospitals/max.jpg",
      specialties: ["Minimal Invasive Surgery", "Robotic Surgery", "IVF", "Dental"]
    },
    {
      name: "Apollo Hospitals",
      location: "Delhi, Noida",
      image: "/hospitals/apollo.jpg",
      specialties: ["Multi-organ Transplant", "Pediatric Surgery", "Neurology", "Orthopedics"]
    },
    {
      name: "Medanta - The Medicity",
      location: "Gurgaon",
      image: "/hospitals/medanta.jpg",
      specialties: ["Heart Surgery", "Liver Transplant", "Robotic Surgery", "Cancer Care"]
    },
    {
      name: "BLK-Max Super Speciality Hospital",
      location: "Rajinder Nagar, Delhi",
      image: "/hospitals/blk.jpg",
      specialties: ["Bone Marrow Transplant", "Liver Transplant", "Heart Surgery", "Neurosurgery"]
    },
    {
      name: "Sir Ganga Ram Hospital",
      location: "Rajinder Nagar, Delhi",
      image: "/hospitals/gangaram.jpg",
      specialties: ["Kidney Transplant", "Gastroenterology", "Cardiology", "Oncology"]
    },
    {
      name: "Artemis Hospital",
      location: "Gurgaon",
      image: "/hospitals/artemis.jpg",
      specialties: ["Cancer Care", "Heart Surgery", "Neurosurgery", "Joint Replacement"]
    },
    {
      name: "Jaypee Hospital",
      location: "Noida",
      image: "/hospitals/jaypee.jpg",
      specialties: ["Cardiology", "Oncology", "Neurology", "Orthopedics"]
    },
    {
      name: "Manipal Hospital",
      location: "Dwarka, Delhi",
      image: "/hospitals/manipal.jpg",
      specialties: ["Multi-specialty", "Emergency Care", "Pediatrics", "Women's Health"]
    },
    {
      name: "Indian Spinal Injuries Centre",
      location: "Vasant Kunj, Delhi",
      image: "/hospitals/isic.jpg",
      specialties: ["Spinal Surgery", "Rehabilitation", "Neurosurgery", "Orthopedics"]
    },
    {
      name: "Primus Super Speciality Hospital",
      location: "Chanakyapuri, Delhi",
      image: "/hospitals/primus.jpg",
      specialties: ["Bariatric Surgery", "Joint Replacement", "Cardiology", "Oncology"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Private Hospitals in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Delhi & NCR
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            World-class healthcare facilities offering advanced medical treatments with international standards
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Hospital Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for hospital image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm6 2a1 1 0 00-1 1v2a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-600 font-medium">Hospital Image</span>
                  </div>
                </div>
              </div>

              {/* Hospital Info */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                  {hospital.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {hospital.location}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.specialties.slice(0, 2).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                    {hospital.specialties.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                        +{hospital.specialties.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Get Treatment Info
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Hospital?
            </h3>
            <p className="text-gray-600 mb-6">
              Our medical tourism experts will help you select the best hospital and doctor for your specific medical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                Free Consultation
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200">
                Compare Hospitals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestHospitals;