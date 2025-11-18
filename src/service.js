const serviceData = {
  // --- General Medical Care & Support ---
  comprehensiveMedicalCare: {
    title: "Comprehensive Medical Care",
    services: [
      "Advanced treatments: Cardiology, Orthopedics, Fertility, Oncology, Dentistry, Cosmetic Surgery",
      "Preventive health check-ups & diagnostics",
      "Organ transplantation assistance",
      "Alternative & wellness therapies: Ayurveda, Yoga, Spa, Physiotherapy",
      "Post-surgery rehabilitation & recovery programs"
    ],
    image: "/Comprehensive Medical Care.jpg"
  },
  travelAndLogistics: {
    title: "Travel & Logistics Support",
    services: [
      "Medical visa guidance and processing",
      "International & domestic flight bookings",
      "Airport transfers with comfort & safety",
      "Accommodation: Hotels, serviced apartments, hospital guesthouses",
      "Local transport: Chauffeur-driven cars, ambulance service if required"
    ],
    image: "/Travel and Logistics Support.jpeg"
  },
  administrativeCoordination: {
    title: "Administrative Coordination",
    services: [
      "Detailed case evaluation & expert second opinions",
      "Transparent cost estimation & treatment plans",
      "Seamless appointment scheduling",
      "Hospital & insurance coordination",
      "Professional interpreter & translation services"
    ],
    image: "/Administrative Coordination.jpg"
  },
  patientAndFamilySupport: {
    title: "Patient & Family Support",
    services: [
      "Dedicated case manager / personal concierge",
      "24x7 helpline & emergency assistance",
      "Customized dietary & special meal arrangements",
      "Nursing and attendant support (outside hospital if needed)",
      "Companion care services for family members"
    ],
    image: "/Patient and Family Support.jpg"
  },
  tourismAndWellness: {
    title: "Tourism & Wellness Add-Ons",
    services: [
      "Tailored sightseeing packages",
      "Cultural and heritage experiences",
      "Pre/post-treatment relaxation retreats",
      "Spa & holistic wellness programs"
    ],
    image: "/Tourism and Wellness AddOns.jpg"
  },
  financialAndLegal: {
    title: "Financial & Legal Assistance",
    services: [
      "Medical insurance facilitation & claim support",
      "Foreign exchange guidance",
      "Assistance with legal documents, medical records, discharge summaries",
      "Flexible payment options & installment plans"
    ],
    image: "/Financial and Legal Assistance.jpg"
  },

  // --- Specialties ---
  cardiology: {
    title: "Cardiology (Heart Care)",
    services: [
      "Angioplasty & Stent Placement",
      "Coronary Artery Bypass Surgery (CABG)",
      "Heart Valve Replacement / Repair",
      "Pacemaker & ICD Implantation",
      "Heart Transplant (where available)"
    ],
    image: "/Cardiology (Heart Care).jpg"
  },
  orthopedics: {
    title: "Orthopedics and Spine",
    services: [
      "Knee Replacement (Total / Partial)",
      "Hip Replacement",
      "Shoulder & Elbow Surgery",
      "Spinal Fusion & Disc Replacement",
      "Arthroscopy (Knee, Shoulder, Hip)",
      "Sports Injury Treatments"
    ],
    image: "/Orthopedics and Spine.jpg"
  },
  neurology: {
    title: "Neurology and Neurosurgery",
    services: [
      "Brain Tumor Surgery",
      "Stroke Management & Rehabilitation",
      "Deep Brain Stimulation (DBS)",
      "Epilepsy Surgery",
      "Spinal Cord Surgery",
      "Parkinson’s Disease Treatment"
    ],
    image: "/Neurology and Neurosurgery.jpg"
  },
  oncology: {
    title: "Oncology (Cancer Care)",
    services: [
      "Chemotherapy & Immunotherapy",
      "Radiation Therapy (IMRT, CyberKnife, Proton Therapy)",
      "Bone Marrow / Stem Cell Transplant",
      "Surgical Oncology (Breast, Lung, Colorectal, etc.)",
      "Targeted Therapy & Precision Medicine"
    ],
    image: "/Oncology (Cancer Care).jpg"
  },
  fertility: {
    title: "Fertility and Reproductive Medicine",
    services: [
      "IVF (In-Vitro Fertilization)",
      "ICSI, IUI, Egg/Sperm Donation",
      "Surrogacy Programs (legal framework dependent)",
      "Male & Female Infertility Treatments",
      "Gynecology Surgery (Fibroids, Endometriosis)"
    ],
    image: "/Fertility and Reproductive Medicine.jpg"
  },
  dental: {
    title: "Dental Treatments",
    services: [
      "Dental Implants",
      "Smile Designing & Cosmetic Dentistry",
      "Root Canal Treatment",
      "Crowns & Bridges",
      "Full Mouth Rehabilitation",
      "Orthodontics (Braces, Aligners)"
    ],
    image: "/Dental Treatments.jpg"
  },
  cosmetic: {
    title: "Cosmetic and Plastic Surgery",
    services: [
      "Liposuction & Tummy Tuck",
      "Breast Augmentation / Reduction / Lift",
      "Rhinoplasty (Nose Surgery)",
      "Facelift & Botox / Fillers",
      "Hair Transplant",
      "Reconstructive Surgery (Burn, Trauma, Cleft Lip/Palate)"
    ],
    image: "/Cosmetic and Plastic Surgery.jpg"
  },
  generalSurgery: {
    title: "General and Minimally Invasive Surgery",
    services: [
      "Gallbladder, Appendix & Hernia Surgery",
      "Bariatric (Weight Loss) Surgery – Gastric Bypass, Sleeve Gastrectomy",
      "Laparoscopic & Robotic Surgeries",
      "Liver & Kidney Transplants"
    ],
    image: "/General and Minimally Invasive Surgery.jpg"
  },
  ophthalmology: {
    title: "Ophthalmology (Eye Care)",
    services: [
      "LASIK / SMILE Eye Surgery",
      "Cataract Surgery (Phaco, Multifocal Lens)",
      "Glaucoma Treatment",
      "Corneal Transplant",
      "Retinal Surgery"
    ],
    image: "/Ophthalmology (Eye Care).jpg"
  },
  ent: {
    title: "ENT (Ear, Nose and Throat)",
    services: [
      "Cochlear Implant",
      "Sinus Surgery",
      "Tonsillectomy & Adenoidectomy",
      "Voice & Throat Surgery"
    ],
    image: "/ear.jpg"
  },
  pediatrics: {
    title: "Pediatrics and Pediatric Surgery",
    services: [
      "Congenital Heart Surgery",
      "Pediatric Orthopedics",
      "Neonatal Intensive Care",
      "Pediatric Cancer Treatments"
    ],
    image: "/Pediatrics and Pediatric Surgery.jpg"
  },
  alternative: {
    title: "Alternative and Wellness",
    services: [
      "Ayurveda & Panchakarma",
      "Yoga & Meditation Retreats",
      "Naturopathy & Holistic Healing",
      "Physiotherapy & Rehabilitation",
      "Spa & Wellness Programs"
    ],
    image: "/Alternative and Wellness.jpg"
  },
  nephrology: {
  title: "Nephrology",
  services: [
    "Chronic Kidney Disease (CKD) Management",
    "Dialysis (Hemodialysis & Peritoneal Dialysis)",
    "Kidney Transplant Evaluation & Surgery",
    "Hypertension & Electrolyte Disorder Treatment",
    "Kidney Stone Management (Laser, ESWL, PCNL)"
  ],
  image: "/Nephrology.png"
},
hepatology: {
  title: "Hepatology",
  services: [
    "Liver Cirrhosis & Fatty Liver Disease Management",
    "Hepatitis (A, B, C & Autoimmune Hepatitis) Treatment",
    "Liver Transplant Evaluation & Surgery",
    "Alcohol-Related Liver Disease Treatment",
    "Liver Cancer Diagnosis & Treatment"
  ],
  image: "/Hepatology.png"
}

};

export default serviceData;