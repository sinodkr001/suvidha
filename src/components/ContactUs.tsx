import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <div className="font-[Poppins]">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <span className="text-white bg-blue-600 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            GET IN TOUCH
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl leading-relaxed">
            We're here to help and answer any questions you might have
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0551068831426!2d77.4502699!3d28.6276213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf0644a77b557%3A0x7a180f0374914b34!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1709644774305!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-32 relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Visit Us</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              1559, 15th floor, Gaur City Mall<br />
              Sector 18, Greater Noida<br />
              Uttar Pradesh – 201301
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Call Us</h3>
            <p className="text-gray-600">
              <a href="tel:+918271718844" className="hover:text-blue-600 transition-colors inline-flex items-center group">
                <span>(+91) 82-7171-8844</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Email Us</h3>
            <p className="text-gray-600">
              <a href="mailto:sales@suvidhapos.in" className="hover:text-blue-600 transition-colors inline-flex items-center group">
                <span>sales@suvidhapos.in</span>
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
              </a>
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Working Hours</h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              Monday - Saturday<br />
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-xl text-gray-600">
                Have a question or want to know more? Send us a message and we'll get back to you shortly.
              </p>
            </div>

            <form className="max-w-3xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                  </div>
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="mb-8 group">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">Phone Number</label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="+91 98765 43210"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="mb-8 group">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">Subject</label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 bg-gray-50 focus:bg-white"
                    placeholder="How can we help you?"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="mb-8 group">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-blue-600">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 border-2 border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 