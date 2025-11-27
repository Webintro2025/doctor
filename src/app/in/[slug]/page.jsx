import React from 'react';
import { locations } from '../../../marketplace';
import ContactForm from '@/components/ContactForm';

// Clean Doctor Hand location page — single, valid file
export function generateMetadata({ params }) {
  const slug = params?.slug || 'location';
  const locationName =
    (Array.isArray(locations)
      ? locations.find((loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase())
      : null) || slug.replace(/-/g, ' ');

  const title = `Kidney Treatment Service Provider in ${locationName} | Doctor Hand`;
  const description = `Need Kidney Treatment Service Provider in ${locationName} Call Doctor Hand, Liver Treatment Service Provider in ${locationName}, Kidney Treatment Service Provider in ${locationName}, India.`;

  const keywords = [
    `(Nephrology) Kidney Treatment Service Provider in ${locationName}`,
    `(Hepatology) Liver Treatment Service Provider in ${locationName}`,
    `Liver Treatment Service Provider in ${locationName}`,
    `(Cardiology) Heart Care Service Provider in ${locationName}`,
    `Heart Care Service Provider in ${locationName}`,
    `Orthopedics & Spine Treatment Service Provider in ${locationName}`,
    `Fertility & Reproductive Medicine Service Provider in ${locationName}`,
    `Neurology & Neurosurgery Service Provider in ${locationName}`,
    `(Oncology) Cancer Care Service Provider in ${locationName}`,
    `Pediatrics & Pediatric Surgery Service Provider in ${locationName}`,
    `Best kidney treatment in ${locationName}`,
    `Kidney transplant service provider in ${locationName}`,
    `Liver transplant service provider in ${locationName}`,
    `Heart surgery service provider in ${locationName}`,
    `Cancer treatment service provider in ${locationName}`,
    `Best hospitals for nephrology in ${locationName}`,
    `Medical facilitator in ${locationName}`,
    `Doctor Hand medical tourism ${locationName}`,
  ];

  return {
    title,
    description,
    alternates: { canonical: `https://doctorshand.com/in/${slug}` },
    keywords,
    openGraph: {
      title,
      description,
      url: `https://doctorshand.com/in/${slug}`,
      siteName: 'Doctor Hand',
      images: [{ url: '/logo.jpeg', width: 1200, height: 630, alt: 'Doctor Hand Logo' }],
    },
  };
}

export default function LocationPage({ params }) {
  const slug = params?.slug || 'your-area';
  const locationName =
    (Array.isArray(locations)
      ? locations.find((loc) => loc.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase())
      : null) || slug.replace(/-/g, ' ');

  return (
    <main className="w-full ">
     



<div className="relative bg-[#79C1BE] w-full h-[220px] xs:h-[3=200px] sm:h-[380px] md:h-[280px] lg:h-[300px] xl:h-[400px]">
  
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-10">
    <h1 className="text-white font-serif text-sm xs:text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-5xl leading-tight drop-shadow-md">
      Kidney Treatment Service Provider in {locationName}
    </h1>
    <p className="text-white font-medium text-[10px] xs:text-xs sm:text-sm md:text-base mt-2 sm:mt-4 max-w-xs xs:max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl drop-shadow">
      Welcome To <a href="https://doctorshand.com/">Doctor Hand</a>, If You Are Looking For <strong>Kidney Treatment Service Provider in {locationName}</strong>, We Are The Best Option For You. We Manufacture <strong>Best Kidney Treatment Service Provider in {locationName}</strong>, <strong>Liver Treatment Service Provider in {locationName}, Cancer Care Service Provider in {locationName}, India.</strong>
    </p>
    <button
      className="mt-4 sm:mt-6 bg-red-600 hover:bg-red-700 text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-normal py-1.5 xs:py-2 px-4 xs:px-6 rounded-full flex items-center space-x-2 shadow"
      type="button"
    >
      <span><a href="https://doctorshand.com/contact">Contact Now</a></span>
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
</div>






<div className="bg-white px-10">
  <main className="w-full px-3 xs:px-4 sm:px-6 py-6 sm:py-8 md:py-10">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
 
        <section className="w-full md:w-1/2 text-black">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] font-semibold mb-3 sm:mb-4 md:mb-6 max-w-[600px]">
            Kidney Treatment Service Provider in {locationName} – Doctor Hand
          </h2>
          <p className="mb-4 sm:mb-6 max-w-[600px] text-xs xs:text-sm sm:text-base leading-relaxed font-normal">
            Doctor Hand proudly stands as one of the most reliable and comprehensive <strong>Kidney Treatment Service Provider in {locationName}</strong>, offering world-class medical guidance, seamless healthcare facilitation, and access to {locationName}’s top nephrologists and advanced kidney-care hospitals. With a mission to deliver safe, affordable, and highly effective medical solutions, we ensure that international and domestic patients receive expert treatment for all kidney-related disorders in a smooth, stress-free manner.

            Kidney diseases require specialized care, accurate diagnosis, and advanced technology. As a leading <strong> Kidney Treatment Service Provider in {locationName}</strong>, we collaborate with accredited hospitals equipped with modern dialysis units, advanced transplant facilities, robotic surgical systems, and highly experienced nephrologists. Whether a patient requires kidney transplant, chronic kidney disease management, dialysis support, kidney stone removal, or complex renal surgeries, our trusted medical network ensures the highest success rates and global-standard treatment outcomes.
          </p>
        </section>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          alt={`Kidney Treatment Service Provider in ${locationName}`}
          className="object-cover rounded-lg w-full max-w-[350px] xs:max-w-[400px] sm:max-w-[450px] md:max-w-[500px] h-auto shadow"
          height={500}
          src="/Nephrology.png"
          width={500}
        />
      </div>
    </div>
  </main>
</div>



<hr />




<div className="bg-white w-full px-16 xs:px-16 sm:px-16 py-6 sm:py-10 flex flex-col md:flex-row md:space-x-10 lg:space-x-20 ">
  <div className="w-full md:w-1/2 flex flex-col justify-center">
    <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl leading-[1.2] mb-3 sm:mb-6 font-semibold">
      Liver Treatment Service Provider in {locationName} 
    </h2>
    <p className="text-xs xs:text-sm sm:text-base leading-relaxed max-w-xl">
      Patients need these services because navigating healthcare especially for serious conditions like <a href="https://en.wikipedia.org/wiki/Kidney_disease"> kidney disease</a>, liver disorders, heart problems, cancer, neurological issues, fertility challenges, or pediatric illnesses—can be overwhelming without expert guidance.<strong> Liver Treatment Service Provider in {locationName}</strong>. Medical treatments often require choosing the right specialist, finding an accredited hospital, understanding complex procedures, estimating costs, arranging travel, and managing post-treatment recovery.
      <br />
      <br />
      Many patients struggle with long waiting times, lack of advanced technology, or high treatment costs in their home country. This is where a trusted medical facilitator like Doctor Hand becomes essential. By acting as a reliable <strong>(Nephrology) Kidney Treatment Service Provider in {locationName}</strong>, we help patients access world-class doctors, state-of-the-art facilities, faster appointments, transparent pricing, and safer treatment environments. Our support ensures that patients receive the right treatment at the right time while enjoying a smooth, stress-free medical journey from consultation to recovery.
    </p>
  </div>
  <div className="w-full md:w-1/3 bg-gray-200 rounded-xl p-4 sm:p-6 md:p-8 mt-8 md:mt-0 flex flex-col justify-center shadow-sm">
    <h2 className="text-base xs:text-lg sm:text-xl mb-4 sm:mb-6 text-center font-semibold">Get A Consultation</h2>
   <ContactForm />
  </div>
</div>











<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Our Extended Medical Expertise & Treatment Categories
  </h2>
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    While our core strength lies in being a leading <strong>Kidney Treatment Service Provider in {locationName}</strong>, Doctor Hand also offers an extensive range of other advanced medical disciplines through our strong association with {locationName}’s most reputed specialists and multi-super-specialty hospitals.
  </p>
  <p className="text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    Below is a detailed explanation of all treatment categories we provide:
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-4 leading-[1.6] list-none">
    <li>
      <span className="font-bold">1. Liver Treatment Service Provider in {locationName}</span><br />
      Doctor Hand is recognized for its excellence in offering advanced liver care, making us a trusted liver treatment service provider for patients across the globe. Our network includes top hepatologists and liver transplant specialists who manage complex conditions such as cirrhosis, fatty liver disease, hepatitis, liver cancer, and end-stage liver failure.
      <br />
      <br />
      We work with hospitals equipped with world-class liver ICUs, transplant programs, and minimally invasive surgical technologies. From diagnosis and donor matching to post-transplant rehabilitation, our team ensures a seamless and reliable experience. Throughout the process, our expertise as a <strong>Liver Treatment Service Provider in {locationName}</strong> helps us maintain the highest standards of care and coordination.
    </li>
    <li>
      <span className="font-bold">2. Heart Care Service Provider in {locationName}</span><br />
      Cardiac care requires precision, experience, and immediate medical support. Doctor Hand connects patients with {locationName}’s top cardiologists and heart surgeons known for exceptional results in angioplasty, bypass surgery, heart transplants, valve replacement, electrophysiology treatments, and pediatric heart surgeries.
      <br />
      <br />
      We ensure that patients receive care in hospitals equipped with cutting-edge Cath Labs, advanced imaging systems, and 24×7 cardiac emergency departments. Even though our primary expertise lies in nephrology as a <strong>(Cardiology) Heart Care Service Provider in {locationName}</strong>, our multi-disciplinary network delivers world-class heart care with equally unmatched quality.
    </li>
    <li>
      <span className="font-bold">3. Orthopedics And Spine Treatment Service Provider in {locationName}</span><br />
      From joint replacement to complex spine surgeries, Doctor Hand offers complete orthopedic and spine care through {locationName}’s leading surgeons. Patients can access treatment for knee replacement, hip replacement, sports injuries, trauma care, scoliosis, spinal deformities, slipped disc, and minimally invasive spinal surgeries.
      <br />
      <br />
      We ensure that international patients get the best rehabilitation facilities, physiotherapy support, and post-operative care—an approach rooted in the same medical precision that defines our role as a trusted <strong>Orthopedics And Spine Treatment Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">4. Fertility And Reproductive Medicine Service Provider in {locationName}</span><br />
      Doctor Hand also supports couples seeking fertility solutions by connecting them with {locationName}’s most experienced IVF specialists and modern reproductive medicine centers. We provide guidance for IVF, ICSI, IUI, egg/sperm donation, surrogacy coordination, and fertility preservation for cancer patients.
      <br />
      <br />
      Our facilities follow global standards and ensure privacy, emotional support, and high success rates. The reliability and transparency that define our reputation as a <strong>Fertility And Reproductive Medicine Service Provider in {locationName}</strong> are equally reflected in our fertility services.
    </li>
    <li>
      <span className="font-bold">5. Neurology And Neurosurgery Service Provider in {locationName}</span><br />
      Neurological conditions require highly advanced technology and expert hands. Doctor Hand offers seamless access to top neuro specialists for treatment related to brain tumors, stroke, epilepsy, Parkinson’s disease, spinal disorders, and neurological trauma.
      <br />
      <br />
      We collaborate with hospitals featuring high-end MRI systems, neuro-navigation, intraoperative monitoring, and robotic-assisted neurosurgery. Our structured coordination, similar to our established expertise as a <strong>Neurology And Neurosurgery Service Provider in {locationName}</strong>, ensures every patient receives highly specialized and safe care.
    </li>
    <li>
      <span className="font-bold">6. (Oncology) Cancer Care Service Provider in {locationName}</span><br />
      Doctor Hand partners with {locationName}'s best cancer hospitals and oncologists to provide comprehensive cancer diagnosis, treatment, and rehabilitation. Our services cover medical, surgical, and radiation oncology, including targeted therapy, immunotherapy, bone marrow transplant, and personalized cancer care.
      <br />
      <br />
      From early detection to advanced cancer management, we stand with patients at every step, following the same trusted standards that make us a preferred <strong>Cancer Care Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">7. Pediatrics And Pediatric Surgery Service Provider in {locationName}</span><br />
      We provide specialized pediatric consultations and surgical treatments for newborns, infants, and children. This includes neonatal care, congenital disorder correction, pediatric cardiac surgery, pediatric orthopedics, and pediatric oncology guidance.
      <br />
      <br />
      Our association with child-friendly hospitals ensures painless procedures, emotional support, and high-quality recovery care. The compassion and precision we offer as a leading <strong>Pediatrics And Pediatric Surgery Service Provider in {locationName}</strong> extend equally to our pediatric services.
    </li>
  </ul>

<div className="bg-[linear-gradient(90deg,#79C1BE_0%,#FFFFFF_50%,#76B260_100%)] border border-blue-200 rounded-xl p-4 sm:p-6 mt-6 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">

    <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-blue-800 mb-2 text-center">📞 Contact us today to discuss your requirements, request a quote, or place an order.</h3>
  <p className="text-xs xs:text-sm sm:text-base text-gray-800 mb-2 text-center">If you are Looking for the <strong>Best Kidney Treatment Service Provider in {locationName}</strong>? Doctor Hand is your trusted partner.</p> <br/> 
      <ul className="list-disc pl-4 sm:pl-6 text-xs xs:text-sm sm:text-base text-gray-700 mb-2">
      <li>👉 <strong>Call Now:</strong> +91-7899294918</li>
      <li>👉 <strong>Visit Our Website</strong> <a href="https://doctorshand.com/">www.doctorshand.com</a></li>
      <li>👉 <strong>Our Email Address</strong> – mdtahir000@gmail.com </li>
    </ul>
  </div>
</div>

<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-center mx-auto text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif leading-[1.2] mb-4 sm:mb-6 text-black max-w-2xl sm:max-w-3xl md:max-w-4xl">
    Why Choose Us?
  </h2>
  <p className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6]">
    <strong>1. Leading Kidney Treatment Service Provider in {locationName}</strong>
    <br />
    Doctor Hand stands at the forefront of kidney care in {locationName}, offering unmatched expertise, global-standard facilities, and seamless patient assistance. As a trusted <strong>Liver Treatment Service Provider in {locationName}</strong>, we ensure that every patient receives accurate diagnosis, advanced treatment options, and compassionate care from start to finish. Our close collaboration with {locationName}’s top nephrologists, transplant surgeons, dialysis centers, and specialty hospitals allows us to deliver reliable, results-oriented kidney treatment solutions. From chronic kidney disease management to complex transplant procedures, our team provides transparent guidance and professional support throughout the entire medical journey.
  </p>
  <ul className="space-y-4 sm:space-y-6 text-xs xs:text-sm sm:text-base mt-2 sm:mt-3 leading-[1.6] list-none">
    <li>
      <span className="font-bold">2. Network of Accredited &amp; World-Class Hospitals</span><br />
      We partner only with internationally accredited hospitals known for their advanced infrastructure, modern ICUs, and specialized kidney-care units. These medical centers are equipped with high-end imaging systems, robotic surgery platforms, state-of-the-art dialysis units, and dedicated transplant programs. Our strong hospital network ensures that every patient has access to the best treatment environment, leading-edge technology, and highly skilled specialists. This commitment to quality is one of the major reasons why patients trust us as a top <strong>Kidney Treatment Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">3. Personalized Treatment Guidance at Every Step</span><br />
      At Doctor Hand, we believe that every patient’s medical journey is unique. That’s why we offer personalized care and one-on-one assistance throughout the entire process. From choosing the right specialist and planning diagnostic tests to arranging treatment schedules and managing follow-up care, our coordinators provide structured, clear, and stress-free guidance. Our patient-first approach ensures that individuals and families feel supported emotionally, medically, and logistically while working with a reliable <strong>Heart Care Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">4. Affordable, Transparent And Hassle-Free Services</span><br />
      Medical care becomes truly effective when patients receive the right treatment without financial stress. Doctor Hand maintains complete transparency in pricing, treatment planning, and hospital charges. We help international and domestic patients access top-quality kidney care at affordable costs compared to global healthcare standards. There are no hidden fees, no confusing processes, and no unexpected expenses — just honest, ethical, and reliable support. This clarity and fairness make us a widely preferred <strong>Fertility And Reproductive Medicine Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">5. Assistance for International Patients</span><br />
      Handling medical travel can be overwhelming, especially for international patients. Doctor Hand provides end-to-end assistance including visa support, airport pick-up/drop, hotel or guesthouse arrangements, interpreter services, local transportation, and complete treatment coordination. Our dedicated international helpdesk ensures that patients from abroad feel safe, comfortable, and well-guided throughout their stay. This global standard of hospitality further strengthens our position as a trusted <strong>Cancer Care Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">6. Experienced Team of Medical Coordinators</span><br />
      Behind every successful treatment journey is a team of professionals who understand medical procedures, patient needs, and hospital systems. Our medical coordinators are highly trained and experienced in handling complex cases, emergency situations, and transplant-related requirements. They stay connected with patients, doctors, and families round-the-clock to ensure smooth communication and quick decision-making. Their commitment to excellence is one of the biggest strengths of Doctor Hand as a dependable <strong>Orthopedics And Spine Treatment Service Provider in {locationName}</strong>.
    </li>
    <li>
      <span className="font-bold">7. Multi-Specialty Expertise Beyond Nephrology</span><br />
      While we specialize in kidney care, we also offer comprehensive support in other major fields such as hepatology, cardiology, oncology, neurosurgery, orthopedics, pediatrics, and fertility treatments. Our ability to deliver multi-disciplinary care under one umbrella gives patients more convenience, better coordination, and faster recovery. This holistic service approach showcases our strong foundation as a leading <strong>Liver Treatment Service Provider in {locationName}</strong> with wide-reaching medical capabilities.
    </li>
    <li>
      <span className="font-bold">8. Fast Appointments, Smooth Processes &amp; Zero Delays</span><br />
      In critical kidney cases, time is extremely valuable. We prioritize quick appointments with top nephrologists, rapid diagnostic evaluations, and streamlined hospital admissions to ensure immediate attention. Our strong hospital partnerships help us minimize waiting times and provide early treatment access for patients requiring urgent care. This efficiency, combined with our medical dedication, makes Doctor Hand a preferred choice for anyone seeking a reliable <strong>Pediatrics And Pediatric Surgery Service Provider in {locationName}</strong>.
    </li>
  </ul>
</div>

<hr />
<div className="w-full mx-auto px-16 xs:px-16 sm:px-16 py-6 sm:py-8 md:py-10">
  <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif mb-2 sm:mb-4">Conclusion:-</h2>
  <p className="text-xs xs:text-sm sm:text-base font-sans text-black leading-relaxed">
 Doctor Hand continues to stand strong as a trusted, responsible, and highly dedicated <strong> Kidney Treatment Service Provider in {locationName}</strong>, committed to delivering world-class medical assistance to patients worldwide. Whether you need kidney treatment, liver care, heart surgery, fertility support, cancer management, neurology expertise, or pediatric care our team ensures a smooth, safe, and stress-free journey toward better health. With our compassionate guidance and access to {locationName}’s top hospitals, we make quality healthcare accessible, affordable, and truly patient centric.
  </p>
</div>

    </main>
  );
}