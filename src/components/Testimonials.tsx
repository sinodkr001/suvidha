import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ram Kumar",
    business: "Swaad Restaurant",
    text: "Customer support is top-notch. Highly recommended! The POS system has transformed how we manage our restaurant operations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Sharma",
    business: "Fresh Mart",
    text: "Amazing POS solution! Easy to use and incredibly reliable. Our sales have increased by 30% since implementation.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rajesh Patel",
    business: "Coffee Corner",
    text: "The offline capability saved us during internet outages. Seamless synchronization when back online. Perfect for our busy cafe.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-orange-50">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Customers are lovin' it
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-2xl p-10 pt-14 relative flex flex-col items-center text-center min-h-[400px] transition-transform duration-300 hover:-translate-y-2 hover:shadow-3xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-500 text-white rounded-full p-3 shadow-lg border-4 border-orange-50">
                <Quote className="w-8 h-8" />
              </div>
              {/* Stars */}
              <div className="flex justify-center mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              {/* Text */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic font-medium">
                "{testimonial.text}"
              </p>
              {/* Divider */}
              <div className="w-16 h-1 bg-orange-100 rounded-full mx-auto mb-6" />
              {/* User */}
              <div className="flex items-center justify-center gap-5 mt-auto">
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange-500 shadow"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 font-medium">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;