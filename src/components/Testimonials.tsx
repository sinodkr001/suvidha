import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Manoj Dubey",
    business: "Shree Maakhan Wala",
    text: "Fast, simple, and reliable, exactly what I needed.",
    rating: 5
  },
  {
    name: "Kulvinder Singh",
    business: "Mobe",
    text: "Great POS system. Easy setup and smooth Operation.",
    rating: 5
  },
  {
    name: "Ram Kumar",
    business: "Swaad",
    text: "Customer support is top-notch. Highly recommended!",
    rating: 5
  },
  {
    name: "Raja Jha",
    business: "Yumyard",
    text: "Affordable and powerful. Best value POS I've found.",
    rating: 5
  },
  {
    name: "Ajesh Garg",
    business: "Besure Sainik Canteen",
    text: "Helps me track sales and inventory effortlessly.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-16">
          <div className="bg-orange-100 text-orange-600 px-6 py-3 rounded-full text-sm font-semibold mb-6 inline-block">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customers are lovin' it
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center relative overflow-hidden">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-orange-600">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600 font-medium">
                  {testimonials[currentIndex].business}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-orange-500 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;