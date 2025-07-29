// NOTE: For best results, add this to your <head> in index.html:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
// And add 'font-poppins' to your Tailwind config if desired.
import React from 'react';

const AboutUs = () => (
  <div className="font-[Poppins]">
    {/* Hero Banner */}
    <div className="relative h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
        <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
          WHO WE ARE
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          About Us
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
          Discover Suvidha POS: Expertise in Point of Sale & Business Solutions
        </p>
      </div>
    </div>

    {/* Original Content */}
    <section className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-orange-50 font-[Poppins] py-20 px-4 lg:px-0 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 tracking-tight text-gray-900 drop-shadow-lg animate-fade-in-up">About Us</h1>
        {/* Company Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-20">
          <div className="space-y-5 animate-fade-in-left">
            <div className="text-xs text-blue-600 font-bold mb-2 tracking-widest uppercase">Our Company</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">We create innovative experiences that transform brands and grow businesses.</h2>
            <p className="text-gray-700 text-lg">Welcome to Suvidha POS, your premier destination for cutting-edge POS solutions across various industries. With years of experience in inventory management, hospitality, retail, and wholesale sectors, we specialize in providing tailored POS solutions to businesses of all sizes.</p>
            <p className="text-gray-700 text-lg">At Suvidha POS, we understand the diverse needs of our clients, which is why we offer POS solutions designed specifically for retail outlets, bars, restaurants, salons, liquor stores, and more. Our POS (Point of Sale) system is a versatile billing application that seamlessly integrates with a wide range of devices, including iPads, Android phones, tablets, as well as traditional and modern POS terminals.</p>
            <p className="text-gray-700 text-lg">One of the key features of our POS system is its ability to function both online and offline. Even in areas with limited internet connectivity, our POS system ensures uninterrupted operations by allowing transactions to be processed offline, with data syncing automatically once an internet connection is restored. Our intuitive dashboard provides real-time insights into sales performance, allowing administrators to stay informed from anywhere with an internet connection.</p>
            <p className="text-gray-700 text-lg">Moreover, at Suvidha POS, we understand the importance of flexible payment options. That's why our POS system offers a wide range of integrated payment methods suitable for different countries. Alternatively, clients can also opt to select their preferred payment provider and easily configure it within our system as a manual payment option.</p>
            <p className="text-gray-700 text-lg mt-4">Experience the efficiency, reliability, and flexibility of our POS solutions at Suvidha POS. Let us streamline your business operations and enhance your customer experience today.</p>
          </div>
          <div className="flex flex-col gap-8 items-center animate-fade-in-right">
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white/80 hover:scale-105 transition-transform duration-300">
              <img src="/public/process-new.png" alt="POS Illustration" className="w-full max-w-xs mx-auto object-cover" />
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden bg-white/80 hover:scale-105 transition-transform duration-300">
              <img src="/public/delivery-new.png" alt="Cloud POS" className="w-full max-w-xs mx-auto object-cover" />
            </div>
          </div>
        </div>
        {/* Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-20">
          <div className="animate-fade-in-left">
            <div className="text-xs text-blue-600 font-bold mb-2 tracking-widest uppercase">Our Vision</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Our customer centric is wonderful power</h3>
            <div className="rounded-3xl shadow-xl overflow-hidden bg-white/80 mb-4">
              <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&w=400&h=200&fit=crop" alt="Teamwork" className="w-full max-w-sm object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-4 animate-fade-in-right">
            <div className="text-xs text-blue-600 font-bold mb-2 tracking-widest uppercase">Change is Opportunity</div>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="bg-blue-50 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300">
                <span className="font-bold text-gray-900">DELIVER WOW</span><br />We aim to deliver WOW to our customers, whether with great customer service, intuitive software or value for money.
              </li>
              <li className="bg-blue-50 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300">
                <span className="font-bold text-gray-900">BE CRAZY</span><br />To innovate we need to be a little crazy, think out of the box and be agile. Don't be afraid to fail – fail fast and learn quickly, to find the best solutions for our customers and business.
              </li>
              <li className="bg-blue-50 rounded-xl p-4 shadow hover:shadow-lg transition-shadow duration-300">
                <span className="font-bold text-gray-900">HAPPY PEOPLE</span><br />We are all one big family, to be happy, we all need to be happy. Don't take yourself too seriously, have fun at work, play hard, work hard.
              </li>
            </ul>
          </div>
        </div>
        {/* Reasons to Partner */}
        <div className="mb-20 animate-fade-in-up">
          <div className="text-center text-xs text-yellow-600 font-bold mb-2 tracking-widest uppercase">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Reasons to Partner with Suvidha POS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">⏱️</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Quick response</h4>
              <p className="text-gray-600">We can log in to your PC or server remotely and resolve many issues immediately without the wait for a technician to travel to your location.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Business savvy</h4>
              <p className="text-gray-600">We design, evaluate and justify technology solutions from a thorough understanding of the business benefit for your company.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-white to-orange-50 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">100% Satisfaction Guarantee</h4>
              <p className="text-gray-600">We want you to be completely satisfied with our services. We will do whatever it takes to make you happy. No hassles, no problems.</p>
            </div>
          </div>
        </div>
        {/* Our Support */}
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">Onboarding</h4>
              <p className="text-gray-600">We provide a smooth and secure onboarding process at a stipulated time.</p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 via-white to-gray-50 rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-3">📄</div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">QR Code Designing</h4>
              <p className="text-gray-600">We design your customized QR code for stickers and standees.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Animations (TailwindCSS custom classes required) */}
      {/* Add these to your tailwind.config.js for fade-in effects: */}
      {/*
      theme: {
        extend: {
          keyframes: {
            'fade-in-up': {
              '0%': { opacity: 0, transform: 'translateY(40px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
            'fade-in-left': {
              '0%': { opacity: 0, transform: 'translateX(-40px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
            'fade-in-right': {
              '0%': { opacity: 0, transform: 'translateX(40px)' },
              '100%': { opacity: 1, transform: 'translateX(0)' },
            },
          },
          animation: {
            'fade-in-up': 'fade-in-up 1s ease-out',
            'fade-in-left': 'fade-in-left 1s ease-out',
            'fade-in-right': 'fade-in-right 1s ease-out',
          },
        },
      },
      */}
    </section>
  </div>
);

export default AboutUs; 