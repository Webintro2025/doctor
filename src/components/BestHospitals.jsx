"use client";
import React from 'react';

const BestHospitals = () => {
  const hospitals = [
    {
      name: "Medanta – The Medicity, Gurgaon",
      location: "CH Baktawar Singh Road, Near Rajiv Chowk, Sector 38, Gurgaon, Haryana 122001",
      image: "/mehdanta.png",
      doctors: [
        "Dr. Naresh Trehan — Cardiothoracic & Vascular Surgery",
        "Dr. Ashok Rajgopal — Orthopaedics & Joint Replacement",
        "Dr. Arvinder Singh Soin — Liver Transplant & Hepatobiliary Surgery"
      ]
    },
    {
      name: "Fortis Memorial Research Institute (FMRI), Gurgaon",
      location: "Sector 44, Opposite HUDA City Centre, Gurgaon, Haryana 122002",
      image: "/Fortis.png",
      doctors: [
        "Dr. Vinod Raina — Medical Oncology",
        "Dr. Nikhil Kumar — Interventional Cardiology",
        "Dr. Rahul Gupta — Neurosurgery"
      ]
    },
    {
      name: "Indraprastha Apollo Hospital, New Delhi",
      location: "Sarita Vihar, Mathura Road, New Delhi 110076",
      image: "/Indra.png",
      doctors: [
        "Dr. Anupam Sibal — Pediatrics & Hepatology",
        "Dr. A. S. Soin — Liver Transplant Surgery",
        "Dr. Richa Chaturvedi — Endocrinology"
      ]
    },
    {
      name: "Max Super Speciality Hospital, Saket, New Delhi",
      location: "Press Enclave Road, Saket, New Delhi 110017",
      image: "/Max.png  ",
      doctors: [
        "Dr. Balbir Singh — Cardiology",
        "Dr. Harit Chaturvedi — Surgical Oncology",
        "Dr. Dinesh Khullar — Nephrology"
      ]
    },
    {
      name: "BLK-Max Super Speciality Hospital, New Delhi",
      location: "Pusa Road, Rajendra Place, New Delhi 110005",
      image: "/BLK.png",
      doctors: [
        "Dr. Man Mohan Mehndiratta — Neurology",
        "Dr. Ajay Kumar — Gastroenterology",
        "Dr. Deepak Chaudhary — Orthopaedics"
      ]
    },
    {
      name: "Sir Ganga Ram Hospital, New Delhi",
      location: "Rajinder Nagar, New Delhi 110060",
      image: "/ganga.png",
      doctors: [
        "Dr. D. S. Rana — Nephrology",
        "Dr. Arvind Kumar — Chest & Robotic Surgery",
        "Dr. Sudhir Chadha — Urology"
      ]
    },
    {
      name: "Artemis Hospital, Gurgaon",
      location: "Sector 51, Gurgaon, Haryana 122001",
      image: "/artemis.png",
      doctors: [
        "Dr. I. P. S. Oberoi — Orthopaedics",
        "Dr. Hari Goyal — Medical Oncology",
        "Dr. Vipul Nanda — Plastic Surgery"
      ]
    },
    {
      name: "Fortis Escorts Heart Institute, Okhla, New Delhi",
      location: "Okhla Road, New Friends Colony, New Delhi 110025",
      image: "/okhala.png",
      doctors: [
        "Dr. Ashok Seth — Interventional Cardiology",
        "Dr. T. S. Kler — Cardiology",
        "Dr. Sandeep Attawar — Cardiac Surgery"
      ]
    },
    {
      name: "Venkateshwar Hospital, Dwarka, New Delhi",
      location: "Sector 18A, Dwarka, New Delhi 110075",
      image: "/venki.png",
      doctors: [
        "Dr. A. K. Singhal — Cardiology",
        "Dr. Pradeep Jain — Surgical Gastroenterology",
        "Dr. R. S. Mishra — Neurosurgery"
      ]
    },
    {
      name: "Primus Super Speciality Hospital, Chanakyapuri, New Delhi",
      location: "Chandragupta Marg, Chanakyapuri, New Delhi 110021",
      image: "/prime.png",
      doctors: [
        "Dr. Surya Bhan — Orthopaedics",
        "Dr. A. K. Banerji — Neurosurgery",
        "Dr. Sushma Bhardwaj — Gynecology"
      ]
    },
    {
      name: "CK Birla Hospital, Gurgaon",
      location: "Sector 51, Gurgaon, Haryana 122018",
      image: "/ck.png",
      doctors: [
        "Dr. Rohan Sinha — Orthopaedics",
        "Dr. Aruna Kalra — Obstetrics & Gynecology",
        "Dr. Sumit Gupta — Pediatrics"
      ]
    },
    {
      name: "Dharamshila Narayana Superspeciality Hospital, Delhi",
      location: "Dharamshila Marg, Vasundhara Enclave, New Delhi 110096",
      image: "/dharm.png",
      doctors: [
        "Dr. Anshuman Kumar — Surgical Oncology",
        "Dr. S. K. Gupta — Radiation Oncology",
        "Dr. V. P. Singh — Medical Oncology"
      ]
    },
    {
      name: "Max Smart Super Speciality Hospital, Saket",
      location: "Press Enclave Marg, Saket District Centre, New Delhi 110017",
      image: "/Max.png",
      doctors: [
        "Dr. Viveka Kumar — Interventional Cardiology",
        "Dr. Bipin Walia — Neurosurgery",
        "Dr. Anupam Bhargava — Urology"
      ]
    },
    {
      name: "Batra Hospital & Medical Research Centre, Tughlakabad, New Delhi",
      location: "1, Tughlakabad Institutional Area, Mehrauli-Badarpur Road, New Delhi 110062",
      image: "/batra.png",
      doctors: [
        "Dr. Sanjay Sachdeva — ENT Surgery",
        "Dr. Arvind Gupta — Cardiology",
        "Dr. Alok Gupta — Oncology"
      ]
    },
    {
      name: "Metro Heart Institute, Faridabad",
      location: "Sector 16A, Faridabad, Haryana 121002",
      image: "/metro.png",
      doctors: [
        "Dr. S. S. Bansal — Cardiology",
        "Dr. Vinay Kumar Bahl — Cardiac Surgery",
        "Dr. Anil Kumar — Internal Medicine"
      ]
    },
    {
      name: "Asian Institute of Medical Sciences, Faridabad",
      location: "Badkal Flyover Road, Sector 21A, Faridabad 121001",
      image: "/asian.png",
      doctors: [
        "Dr. Ashok Seth — Cardiology (Visiting)",
        "Dr. A. K. Jain — General Surgery",
        "Dr. Harsh Vardhan — Oncology"
      ]
    },
    {
      name: "Fortis Hospital, Noida",
      location: "Sector 62, Noida, Uttar Pradesh 201301",
      image: "/noida.png",
      doctors: [
        "Dr. Rajeev Agarwal — Surgical Oncology",
        "Dr. Vinay Aggarwal — Cardiology",
        "Dr. Nikhil Agarwal — Orthopaedics"
      ]
    },
    {
      name: "Kailash Hospital, Noida",
      location: "H-33, Sector 27, Noida, Uttar Pradesh 201301",
      image: "/kailash.png",
      doctors: [
        "Dr. P. K. Gupta — Cardiology",
        "Dr. Shubhra Goyal — Obstetrics & Gynecology",
        "Dr. Manoj Kumar — Neurology"
      ]
    },
    {
      name: "Yatharth Super Speciality Hospital, Greater Noida",
      location: "Plot No. 32, Knowledge Park III, Greater Noida, Uttar Pradesh 201306",
      image: "/ya.png",
      doctors: [
        "Dr. Anand Sharma — Cardiology",
        "Dr. Sanjeev Singh — Neurosurgery",
        "Dr. Piyush Jain — Orthopaedics"
      ]
    },
    {
      name: "Amrita Hospital, Faridabad",
      location: "Mata Amritanandamayi Marg, Sector 88, Faridabad 121002",
      image: "/am.png",
      doctors: []
    },
    {
      name: "Paras Hospitals, Gurgaon",
      location: "C-1, Sushant Lok Phase I, Sector 43, Gurgaon, Haryana 122002",
      image: "/paras.png",
      doctors: [
        "Dr. (Lt. Gen.) Ved Chaturvedi — Rheumatology",
        "Dr. Manish Sharma — Orthopaedics",
        "Dr. Vivek Logani — Joint Replacement Surgery"
      ]
    },
    {
      name: "Sharda Hospital, Greater Noida",
      location: "Plot No. 32-34, Knowledge Park III, Greater Noida, Uttar Pradesh 201310",
      image: "/sh.png",
      doctors: [
        "Dr. Neeraj Mahajan — General Surgery",
        "Dr. Rahul Bhargava — Hematology",
        "Dr. Alok Sharma — Orthopaedics"
      ]
    },
    {
      name: "Jaipur Golden Hospital, Rohini, Delhi",
      location: "2, Institutional Area, Sector 3, Rohini, New Delhi 110085",
      image: "/ja.png",
      doctors: [
        "Dr. Anil Kumar Kansal — Neurosurgery",
        "Dr. Deepak Goel — Orthopaedics",
        "Dr. S. C. L. Gupta — General Medicine"
      ]
    },
    {
      name: "Sri Balaji Action Medical Institute, Paschim Vihar, Delhi",
      location: "FC-34, A-4, Paschim Vihar, New Delhi 110063",
      image: "/shr.png",
      doctors: [
        "Dr. R. C. Dalela — Urology",
        "Dr. K. S. Bhargava — Internal Medicine",
        "Dr. Rajiv Anand — Neurology"
      ]
    },
    {
      name: "Moolchand Medcity, Lajpat Nagar, Delhi",
      location: "Lajpat Nagar III, Near Moolchand Metro Station, New Delhi 110024",
      image: "/mc.png",
      doctors: [
        "Dr. A. K. Banerji — Neurosurgery",
        "Dr. Jyoti Bindal — Obstetrics & Gynecology",
        "Dr. Rajeev Chawla — Endocrinology"
      ]
    },
    {
      name: "Holy Family Hospital, Okhla Road, New Delhi",
      location: "Okhla Road, Jamia Nagar, New Delhi 110025",
      image: "/holi.png",
      doctors: [
        "Dr. Ramesh Babu — Cardiology",
        "Dr. Sanjay D’Cruz — ENT",
        "Dr. Rekha Sharma — Pediatrics"
      ]
    },
    {
      name: "St. Stephen’s Hospital, Tis Hazari, Delhi",
      location: "St. Stephen’s Hospital Marg, Tis Hazari, New Delhi 110054",
      image: "/st.png",
      doctors: [
        "Dr. Sudhir Kalhan — General Surgery",
        "Dr. Ritu Saxena — Gynecology",
        "Dr. Sushil Kumar Jain — Pediatrics"
      ]
    },
    {
      name: "Pushpawati Singhania Research Institute (PSRI), Delhi",
      location: "Press Enclave Marg, Sheikh Sarai Phase II, New Delhi 110017",
      image: "/pri.png",
      doctors: [
        "Dr. Peush Sahni — Gastroenterology",
        "Dr. Anil Agarwal — Urology",
        "Dr. Ashok Kumar — Nephrology"
      ]
    },
    {
      name: "Rockland Hospital (now Medeor), Qutub Institutional Area, Delhi",
      location: "B-33-34, Qutub Institutional Area, New Delhi 110016",
      image: "/rock.png",
      doctors: [
        "Dr. P. K. Mishra — Cardiology",
        "Dr. S. K. Gupta — General Medicine",
        "Dr. Meera Luthra — Gynecology"
      ]
    },
    {
      name: "Max Hospital, Patparganj, Delhi",
      location: "108A, I.P. Extension, Patparganj, New Delhi 110092",
      image: "/maxx.png",
      doctors: [
        "Dr. Vivek Raj — Gastroenterology",
        "Dr. Anil Bansal — Cardiology",
        "Dr. Rakesh Dua — Neurosurgery"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top 30 Private Hospitals in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Delhi NCR
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the best hospitals with world-class facilities and renowned specialists.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Hospitals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* Hospital Image */}
              <div className="h-72 w-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center relative overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
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

                {/* Doctors */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Renowned Doctors:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {hospital.doctors.map((doctor, idx) => (
                      <li key={idx}>{doctor}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestHospitals;