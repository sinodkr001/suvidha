import React from 'react';

const ContactUs = () => (
  <section className="w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 py-16 px-2 font-[Poppins]">
    <div className="w-full max-w-5xl bg-blue-50/70 rounded-3xl shadow-xl p-8 md:p-12 mx-auto animate-fade-in-up">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Form & Heading */}
        <div className="flex-1 min-w-[260px]">
          <div className="mb-3">
            <span className="inline-block px-4 py-1 border border-orange-400 text-orange-500 font-semibold rounded-full text-sm mb-2 bg-white/80">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">We are ready to help you</h2>
          <p className="text-gray-700 mb-7 text-base md:text-lg">Get in touch with the right people at Suvidha POS. Talk to our sales team, get support in regard to our services.</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/90 text-gray-900 text-base transition-all"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/90 text-gray-900 text-base transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/90 text-gray-900 text-base transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-orange-400 hover:bg-orange-500 text-white font-bold text-lg shadow-md transition-colors duration-200 mt-2"
            >
              Submit Now
            </button>
          </form>
        </div>
        {/* Right: Contact Info Cards */}
        <div className="flex-1 flex flex-col gap-4 min-w-[220px]">
          <div className="flex items-start gap-3 bg-white/80 border border-blue-100 rounded-2xl p-5 shadow">
            <span className="text-2xl mt-1">📍</span>
            <div>
              <div className="font-bold text-gray-900 text-lg">Address</div>
              <div className="text-gray-700 text-base">1559, 15th floor, Gaur City Mall Sector 18,<br/>Greater Noida Uttar Pradesh – 201301</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/80 border border-blue-100 rounded-2xl p-5 shadow">
            <span className="text-2xl mt-1">✉️</span>
            <div>
              <div className="font-bold text-gray-900 text-lg">Mail Us</div>
              <div className="text-blue-700 text-base">sales@suvidhapos.in</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white/80 border border-blue-100 rounded-2xl p-5 shadow">
            <span className="text-2xl mt-1">📞</span>
            <div>
              <div className="font-bold text-gray-900 text-lg">Telephone</div>
              <div className="text-gray-700 text-base">(+91) 82-7171-8844</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactUs; 