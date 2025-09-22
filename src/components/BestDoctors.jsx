'use client';

const BestDoctors = () => {
  const doctorsData = [
    {
      specialty: "Cardiology (Heart Care)",
      doctors: [
        {
          name: "Dr. Naresh Trehan",
          designation: "Chairman & MD, Medanta Heart Institute",
          experience: "40+ years",
          hospital: "Medanta - The Medicity, Gurgaon",
          expertise: "Cardiac Surgery, Heart Transplant"
        },
        {
          name: "Dr. Ashok Seth",
          designation: "Chairman, Fortis Escorts Heart Institute",
          experience: "35+ years",
          hospital: "Fortis Escorts Heart Institute, Delhi",
          expertise: "Interventional Cardiology"
        },
        {
          name: "Dr. Purshotam Lal",
          designation: "Chairman, Metro Heart Institute",
          experience: "45+ years",
          hospital: "Metro Heart Institute, Delhi",
          expertise: "Interventional Cardiology, Angioplasty"
        }
      ]
    },
    {
      specialty: "Orthopedics & Spine",
      doctors: [
        {
          name: "Dr. H.S. Chhabra",
          designation: "Director, Indian Spinal Injuries Centre",
          experience: "30+ years",
          hospital: "Indian Spinal Injuries Centre, Delhi",
          expertise: "Spinal Surgery, Spinal Cord Injuries"
        },
        {
          name: "Dr. Raju Vaishya",
          designation: "Senior Consultant, Indraprastha Apollo",
          experience: "35+ years",
          hospital: "Indraprastha Apollo Hospitals, Delhi",
          expertise: "Knee & Hip Replacement, Sports Medicine"
        },
        {
          name: "Dr. A.K. Venkatachalam",
          designation: "Director, Max Hospital",
          experience: "25+ years",
          hospital: "Max Super Speciality Hospital, Delhi",
          expertise: "Joint Replacement, Arthroscopy"
        }
      ]
    },
    {
      specialty: "Neurology & Neurosurgery",
      doctors: [
        {
          name: "Dr. P.N. Renjen",
          designation: "Senior Director, Indraprastha Apollo",
          experience: "35+ years",
          hospital: "Indraprastha Apollo Hospitals, Delhi",
          expertise: "Stroke, Epilepsy, Movement Disorders"
        },
        {
          name: "Dr. Deepak Agrawal",
          designation: "Professor, AIIMS",
          experience: "20+ years",
          hospital: "AIIMS, New Delhi",
          expertise: "Neurosurgery, Brain Tumors"
        },
        {
          name: "Dr. B.S. Sharma",
          designation: "Director, Fortis Memorial",
          experience: "30+ years",
          hospital: "Fortis Memorial Research Institute, Gurgaon",
          expertise: "Neurosurgery, Spine Surgery"
        }
      ]
    },
    {
      specialty: "Oncology (Cancer Care)",
      doctors: [
        {
          name: "Dr. Vinod Raina",
          designation: "Senior Consultant, Fortis Hospital",
          experience: "35+ years",
          hospital: "Fortis Hospital, Delhi",
          expertise: "Medical Oncology, Chemotherapy"
        },
        {
          name: "Dr. Harit Chaturvedi",
          designation: "Chairman, Max Healthcare",
          experience: "30+ years",
          hospital: "Max Super Speciality Hospital, Delhi",
          expertise: "Surgical Oncology, GI Cancers"
        },
        {
          name: "Dr. Rajesh Mistry",
          designation: "Director, Artemis Hospital",
          experience: "25+ years",
          hospital: "Artemis Hospitals, Gurgaon",
          expertise: "Radiation Oncology"
        }
      ]
    },
    {
      specialty: "Fertility & Reproductive Medicine",
      doctors: [
        {
          name: "Dr. Rita Bakshi",
          designation: "Founder, International Fertility Centre",
          experience: "30+ years",
          hospital: "International Fertility Centre, Delhi",
          expertise: "IVF, Reproductive Endocrinology"
        },
        {
          name: "Dr. Shivani Sachdev Gour",
          designation: "Director, SCI IVF Hospital",
          experience: "20+ years",
          hospital: "SCI IVF Hospital, Delhi",
          expertise: "IVF, Surrogacy, Fertility Preservation"
        },
        {
          name: "Dr. Firuza Parikh",
          designation: "Director, Jaslok Hospital",
          experience: "35+ years",
          hospital: "Fortis La Femme, Delhi",
          expertise: "IVF, ICSI, Genetic Testing"
        }
      ]
    },
    {
      specialty: "Dental Treatments",
      doctors: [
        {
          name: "Dr. Sandesh Mayekar",
          designation: "Chief Dentist, Clove Dental",
          experience: "20+ years",
          hospital: "Clove Dental, Delhi NCR",
          expertise: "Oral Surgery, Implantology"
        },
        {
          name: "Dr. Priya Jain",
          designation: "Senior Consultant, Max Hospital",
          experience: "15+ years",
          hospital: "Max Super Speciality Hospital, Delhi",
          expertise: "Cosmetic Dentistry, Orthodontics"
        },
        {
          name: "Dr. Rajesh Khanna",
          designation: "Director, Smile Delhi",
          experience: "25+ years",
          hospital: "Smile Delhi Dental Clinic",
          expertise: "Dental Implants, Periodontics"
        }
      ]
    },
    {
      specialty: "Cosmetic & Plastic Surgery",
      doctors: [
        {
          name: "Dr. Rajat Gupta",
          designation: "Senior Consultant, Plastic Surgery",
          experience: "20+ years",
          hospital: "CK Birla Hospital, Delhi",
          expertise: "Aesthetic Surgery, Reconstructive Surgery"
        },
        {
          name: "Dr. Mohan Thomas",
          designation: "Chairman, Cosmetic Surgery Institute",
          experience: "25+ years",
          hospital: "Indraprastha Apollo Hospitals, Delhi",
          expertise: "Facial Plastic Surgery, Body Contouring"
        },
        {
          name: "Dr. Parag Telang",
          designation: "Director, Designer Bodyz",
          experience: "18+ years",
          hospital: "Designer Bodyz, Delhi",
          expertise: "Liposuction, Hair Transplant"
        }
      ]
    },
    {
      specialty: "General & Minimally Invasive Surgery",
      doctors: [
        {
          name: "Dr. Subhash Gupta",
          designation: "Chairman, Max Healthcare",
          experience: "35+ years",
          hospital: "Max Super Speciality Hospital, Delhi",
          expertise: "Liver Transplant, HPB Surgery"
        },
        {
          name: "Dr. Mahesh Goel",
          designation: "Senior Director, Fortis Hospital",
          experience: "25+ years",
          hospital: "Fortis Hospital, Delhi",
          expertise: "Laparoscopic Surgery, Bariatric Surgery"
        },
        {
          name: "Dr. Anil Arora",
          designation: "Chairman, Institute of Liver & Biliary Sciences",
          experience: "30+ years",
          hospital: "ILBS, Delhi",
          expertise: "Liver Surgery, Transplant Surgery"
        }
      ]
    },
    {
      specialty: "Ophthalmology (Eye Care)",
      doctors: [
        {
          name: "Dr. J.S. Titiyal",
          designation: "Professor & HOD, AIIMS",
          experience: "25+ years",
          hospital: "AIIMS, New Delhi",
          expertise: "Cataract Surgery, Corneal Diseases"
        },
        {
          name: "Dr. Mahipal Sachdev",
          designation: "Chairman, Centre for Sight",
          experience: "30+ years",
          hospital: "Centre for Sight, Delhi",
          expertise: "Retinal Surgery, LASIK"
        },
        {
          name: "Dr. Ikeda Lal",
          designation: "Senior Consultant, Sir Ganga Ram Hospital",
          experience: "35+ years",
          hospital: "Sir Ganga Ram Hospital, Delhi",
          expertise: "Vitreoretinal Surgery, Diabetic Retinopathy"
        }
      ]
    },
    {
      specialty: "ENT (Ear, Nose & Throat)",
      doctors: [
        {
          name: "Dr. K.K. Handa",
          designation: "Director, Medanta Hospital",
          experience: "35+ years",
          hospital: "Medanta - The Medicity, Gurgaon",
          expertise: "Head & Neck Surgery, Skull Base Surgery"
        },
        {
          name: "Dr. Ameet Kishore",
          designation: "Senior Consultant, Indraprastha Apollo",
          experience: "20+ years",
          hospital: "Indraprastha Apollo Hospitals, Delhi",
          expertise: "Rhinoplasty, Endoscopic Sinus Surgery"
        },
        {
          name: "Dr. Sanjay Sachdeva",
          designation: "Chairman, Max Hospital",
          experience: "25+ years",
          hospital: "Max Super Speciality Hospital, Delhi",
          expertise: "Cochlear Implants, Otology"
        }
      ]
    },
    {
      specialty: "Pediatrics & Pediatric Surgery",
      doctors: [
        {
          name: "Dr. Bakul Parekh",
          designation: "Chairperson, Fortis La Femme",
          experience: "30+ years",
          hospital: "Fortis La Femme, Delhi",
          expertise: "Pediatric Cardiology, Neonatology"
        },
        {
          name: "Dr. Ramesh Agarwal",
          designation: "Professor, AIIMS",
          experience: "25+ years",
          hospital: "AIIMS, New Delhi",
          expertise: "Pediatric Surgery, Neonatal Surgery"
        },
        {
          name: "Dr. Dhiren Gupta",
          designation: "Senior Pediatric Intensivist",
          experience: "20+ years",
          hospital: "Sir Ganga Ram Hospital, Delhi",
          expertise: "Pediatric ICU, Emergency Medicine"
        }
      ]
    },
    {
      specialty: "Alternative & Wellness",
      doctors: [
        {
          name: "Dr. Partap Chauhan",
          designation: "Director, Jiva Ayurveda",
          experience: "25+ years",
          hospital: "Jiva Ayurveda, Delhi NCR",
          expertise: "Ayurvedic Medicine, Panchakarma"
        },
        {
          name: "Dr. B.L. Sherwal",
          designation: "Director, Dr. Sherwal's Clinic",
          experience: "30+ years",
          hospital: "Sherwal Homeopathic Clinic, Delhi",
          expertise: "Homeopathy, Chronic Diseases"
        },
        {
          name: "Dr. Rajeev Sharma",
          designation: "Senior Consultant, AIIMS",
          experience: "20+ years",
          hospital: "AIIMS Integrated Medicine, Delhi",
          expertise: "Yoga Therapy, Naturopathy"
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Best Professional Doctors in Delhi NCR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our panel of highly qualified and experienced specialist doctors 
            from premier hospitals across Delhi NCR, providing world-class medical care
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Doctors Grid */}
        <div className="space-y-16">
          {doctorsData.map((specialty, specialtyIndex) => (
            <div key={specialtyIndex} className="bg-white rounded-2xl shadow-lg p-8">
              {/* Specialty Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                  {specialty.specialty}
                </h3>
                <div className="w-full h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
              </div>

              {/* Doctors Grid for this specialty */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specialty.doctors.map((doctor, doctorIndex) => (
                  <div 
                    key={doctorIndex}
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    {/* Doctor Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">
                        {doctor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-gray-900">
                        {doctor.name}
                      </h4>
                      <p className="text-sm font-medium text-blue-600">
                        {doctor.designation}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Experience:</span> {doctor.experience}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Hospital:</span> {doctor.hospital}
                      </p>
                      <p className="text-sm text-gray-700 font-medium">
                        <span className="text-blue-600">Expertise:</span> {doctor.expertise}
                      </p>
                    </div>

                    {/* Contact Button */}
                    <div className="mt-4 pt-4 border-t border-blue-100">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-600 transition-all duration-300">
                        Consult Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Finding the Right Doctor?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our medical coordinators will help you connect with the best specialist 
              doctors based on your specific medical needs and preferences.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestDoctors;