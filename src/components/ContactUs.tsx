import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, Sparkles, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollToTop } from '../hooks/useScrollToTop';

const ContactUs = () => {
  useScrollToTop();
  
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
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://suvidha-backend-rouge.vercel.app'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      alert('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="font-[Poppins] overflow-x-hidden">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center z-10">
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-white px-8 py-4 rounded-2xl text-sm font-semibold mb-8 backdrop-blur-sm border border-orange-500/20 shadow-[0_0_15px_rgba(251,146,60,0.1)]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(251,146,60,0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-orange-400" />
            </motion.div>
            GET IN TOUCH
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 text-orange-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Contact{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600">
                Us
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-orange-600 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-pink-50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,146,60,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
                 <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
         <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative z-10">
          <motion.div 
            className="w-full h-[400px] relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 mt-8">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: "1559, 15th floor, Gaur City Mall<br />Sector 18, Greater Noida<br />Uttar Pradesh – 201301",
                  link: null
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "(+91) 82-7171-8844",
                  link: "tel:+918271718844"
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "sales@suvidhapos.in",
                  link: "mailto:sales@suvidhapos.in"
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Monday - Saturday<br />9:00 AM - 7:00 PM",
                  link: null
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(251,146,60,0.2)"
                  }}
                >
                  <div className="mb-6 relative">
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon className="w-8 h-8 text-orange-600" />
                    </motion.div>
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-orange-600 to-pink-600 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">{item.title}</h3>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-gray-600 group-hover:text-orange-600 transition-colors inline-flex items-center group"
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.content }} />
                      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    </a>
                  ) : (
                    <p 
                      className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16 relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16,185,129,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
                                   <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-teal-500/5 via-cyan-500/5 to-emerald-500/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
                     <motion.div 
             className="bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-xl mx-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Send us a{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 500, damping: 10 }}
                >
                  Message
                </motion.span>
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Have a question or want to know more? Send us a message and we'll get back to you shortly.
              </motion.p>
            </div>

            <motion.form 
              className="max-w-3xl mx-auto" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group">
                                     <label htmlFor="name" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-orange-600">Your Name</label>
                   <div className="relative">
                     <input
                       type="text"
                       id="name"
                       name="name"
                       value={formState.name}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-500"
                       placeholder="John Doe"
                     />
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                  </div>
                </div>
                                 <div className="group">
                   <label htmlFor="email" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-orange-600">Email Address</label>
                   <div className="relative">
                     <input
                       type="email"
                       id="email"
                       name="email"
                       value={formState.email}
                       onChange={handleChange}
                       className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-500"
                       placeholder="john@example.com"
                     />
                     <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                   </div>
                 </div>
              </div>

                             <div className="mb-8 group">
                 <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-orange-600">Phone Number</label>
                 <div className="relative">
                   <input
                     type="tel"
                     id="phone"
                     name="phone"
                     value={formState.phone}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-500"
                     placeholder="+91 98765 43210"
                   />
                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                 </div>
               </div>

                             <div className="mb-8 group">
                 <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-orange-600">Subject</label>
                 <div className="relative">
                   <input
                     type="text"
                     id="subject"
                     name="subject"
                     value={formState.subject}
                     onChange={handleChange}
                     className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-500"
                     placeholder="How can we help you?"
                   />
                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                 </div>
               </div>

                             <div className="mb-8 group">
                 <label htmlFor="message" className="block text-gray-700 font-medium mb-2 transition-colors group-focus-within:text-orange-600">Message</label>
                 <div className="relative">
                   <textarea
                     id="message"
                     name="message"
                     value={formState.message}
                     onChange={handleChange}
                     rows={6}
                     className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition-all duration-300 bg-white/80 backdrop-blur-sm focus:bg-white text-gray-800 placeholder-gray-500 resize-none"
                     placeholder="Write your message here..."
                   ></textarea>
                   <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-focus-within:opacity-10 -z-10 blur transition-opacity duration-300"></div>
                 </div>
               </div>

              <div className="text-center">
                                 <motion.button
                   type="submit"
                   disabled={isSubmitting}
                   className="inline-flex items-center px-8 py-4 border-2 border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; 