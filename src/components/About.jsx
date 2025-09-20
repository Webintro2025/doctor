import React from 'react'

const About = () => {
      return (
        <section className=" pt-5  bg-white">
          <div className=" flex flex-col gap-16 animate-fadein">
            {/* About1: Image left, text right */}
            <div className="px-4 py-6 flex flex-col md:flex-row items-center gap-10" style={{ background: 'rgba(121, 193, 190, 0.1)', borderRadius: '1rem' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/Alternative & Wellness.jpg" alt="Doctors Hand - About1" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">About Us</h2>
                <p className="text-black text-base md:text-lg mb-4">Doctor Hand is a trusted name in medical tourism and healthcare facilitation services, dedicated to connecting patients with world-class hospitals, highly qualified doctors, and advanced medical treatments across India. With our extensive network of renowned specialists and state-of-the-art facilities, we ensure that international and domestic patients receive top-quality, affordable, and safe medical care. Our commitment to excellence has made us a preferred choice for patients seeking advanced medical treatments in India. We work closely with accredited hospitals that meet international standards, ensuring that every patient receives the best possible care in a safe and comfortable environment. Our team of experienced medical coordinators provides personalized guidance throughout the entire treatment journey, from initial consultation to post-treatment recovery.</p>
              </div>
            </div>
            {/* About2: Text left, image right */}
            <div className="flex flex-col md:flex-row-reverse items-center px-10 py-6 gap-8">
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/Financial & Legal Assistance.jpg" alt="Doctors Hand - About2" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">Our Services</h2>
                <p className="text-black text-base md:text-lg mb-4">From complex surgeries like bone marrow transplant, brain tumor surgery, cardiac and organ transplants to elective treatments such as cosmetic surgery, dental procedures, fertility care, and wellness therapies, Doctor Hand is your one-stop solution for comprehensive healthcare. Our medical services span across multiple specialties including oncology, neurosurgery, orthopedics, gastroenterology, and reproductive medicine. We collaborate with top-tier hospitals equipped with cutting-edge technology, robotic surgery systems, and advanced diagnostic facilities. Our network includes centers of excellence for specialized treatments like cancer care, heart surgery, joint replacement, and minimally invasive procedures. Each treatment plan is customized to meet individual patient needs, ensuring optimal outcomes with reduced recovery time and enhanced quality of life.</p>
              </div>
            </div>
            {/* About3: Image left, text right */}
            <div className="w-full flex flex-col md:flex-row items-center px-4 py-6 gap-10" style={{ background: 'rgba(118, 178, 96, 0.1)', borderRadius: '1rem' }}>
              <div className="md:w-1/2 w-full flex justify-center">
                  <img src="/Orthopedics & Spine.jpg" alt="Doctors Hand - About3" className="rounded-2xl shadow-lg w-full max-w-xs object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#23286b] mb-4 tracking-wide">Our Promise</h2>
                <p className="text-black text-base md:text-lg mb-4">We believe in patient-first service, offering not only medical excellence but also end-to-end support including travel, logistics, accommodation, and personalized assistance for patients and their families. Our comprehensive care extends beyond medical treatment to include visa assistance, airport transfers, comfortable accommodation arrangements, language interpretation services, and 24/7 patient support. We understand that medical travel can be overwhelming, which is why our dedicated team handles every detail of your journey with care and precision. From pre-treatment consultations and second opinions to post-treatment follow-ups and rehabilitation support, we ensure a seamless healthcare experience. Our transparent pricing, no hidden costs policy, and flexible payment options make quality healthcare accessible and affordable for patients from around the world.</p>
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

export default About