import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const chatFlow = [
  {
    question: 'What features does Suvidha POS offer?',
    answer: 'Suvidha POS offers comprehensive features including inventory management, sales reporting, employee tracking, customer management, multi-outlet support, and real-time analytics. Our system is designed to streamline your business operations.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial for all new users. No credit card required. You can explore all features and see how Suvidha POS can transform your business.'
  },
  {
    question: 'How do I get support?',
    answer: 'We provide 24/7 support through multiple channels: Phone: (+91) 82-7171-8844, Email: sales@suvidhapos.in, and WhatsApp. Our dedicated team is always ready to help!'
  },
  {
    question: 'What types of businesses can use Suvidha POS?',
    answer: 'Suvidha POS is perfect for restaurants, cafes, retail stores, salons, pharmacies, and any business that needs point-of-sale functionality. We have specialized solutions for different industry types.'
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing is flexible and depends on your business size and requirements.Contact us for a personalized quote!'
  }
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleQuestionClick = () => {
    setShowAnswer(true);
  };

  const handleNext = () => {
    setShowAnswer(false);
    setStep(step + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const submitContact = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL || 'https://suvidha-backend-rouge.vercel.app'}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: userInfo.name,
            email: userInfo.email,
            phone: userInfo.phone,
            subject: 'Chat Widget Contact Request',
            message: `User ${userInfo.name} (${userInfo.email}, ${userInfo.phone}) submitted contact information through the chat widget.`
          })
        });
        if (!response.ok) {
          throw new Error('Failed to submit contact information');
        }
        setSubmitted(true);
      } catch (error) {
        console.error('Failed to submit contact info:', error);
        alert('Failed to submit your information. Please try again or contact us directly.');
      } finally {
        setIsSubmitting(false);
      }
    };
    submitContact();
  };

  return (
    <>
      {/* Enhanced Floating Chat Icon */}
      <AnimatePresence>
        {!open && (
                     <motion.button
             className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 md:p-4 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-orange-500/50"
             onClick={() => setOpen(true)}
             aria-label="Open chat"
             initial={{ scale: 0, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ scale: 0, opacity: 0 }}
             whileHover={{ 
               scale: 1.1,
               boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)"
             }}
             whileTap={{ scale: 0.95 }}
           >
                           <div className="relative">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-sm font-semibold">Chat</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
           </motion.button>
        )}
      </AnimatePresence>

      {/* Enhanced Chat Popup */}
      <AnimatePresence>
        {open && (
                     <motion.div 
             className="fixed bottom-6 right-6 left-4 md:left-auto z-50 w-auto md:w-96 max-w-[calc(100vw-2rem)] md:max-w-full bg-white rounded-2xl shadow-2xl border border-orange-100 flex flex-col max-h-[600px]"
             initial={{ scale: 0.8, opacity: 0, y: 20 }}
             animate={{ scale: 1, opacity: 1, y: 0 }}
             exit={{ scale: 0.8, opacity: 0, y: 20 }}
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
           >
                         <div className="flex items-center justify-between px-6 py-4 border-b border-orange-100 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl">
               <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2">
                   <motion.div
                     className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center"
                     animate={{ rotate: [0, 360] }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   >
                     <Sparkles className="w-4 h-4 text-white" />
                   </motion.div>
                                       <div className="flex items-center gap-2">
                      <img 
                        src="/oldlogo (1).png" 
                        alt="Suvidha POS Logo" 
                        className="w-8 h-8 object-contain"
                      />
                      <span className="text-white font-bold text-lg">Suvidha POS</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-1 text-white/80">
                   <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                   <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                   <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                 </div>
               </div>
              <motion.button 
                onClick={() => setOpen(false)} 
                aria-label="Close chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-orange-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
                         <div className="p-4 md:p-6 flex-1 flex flex-col gap-4 min-h-[400px] max-h-[500px] overflow-y-auto">
            {/* Enhanced Chat Flow */}
            {step < chatFlow.length && !showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-800 font-medium">How can I help you today?</span>
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 text-orange-700 font-semibold px-4 py-3 rounded-xl text-left transition-all border border-orange-200 hover:border-orange-300 shadow-sm"
                  onClick={handleQuestionClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {chatFlow[step].question}
                </motion.button>
              </motion.div>
            )}
            
            {step < chatFlow.length && showAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <User className="w-5 h-5 text-blue-500 mt-1" />
                  <div className="text-gray-700 font-medium">Q: {chatFlow[step].question}</div>
                </div>
                <div className="flex items-start gap-3 mb-6">
                  <Bot className="w-5 h-5 text-orange-500 mt-1" />
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 text-gray-800 p-4 rounded-xl border border-orange-200">
                    {chatFlow[step].answer}
                  </div>
                </div>
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-bold self-end transition-all shadow-lg"
                  onClick={handleNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next Question
                </motion.button>
              </motion.div>
            )}
            
            {step === chatFlow.length && !submitted && (
              <motion.form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Bot className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-800 font-medium">Great! Let's get your contact details:</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      className="w-full border-2 border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={userInfo.phone}
                      onChange={handleInputChange}
                      className="w-full border-2 border-orange-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Contact Info
                    </div>
                  )}
                </motion.button>
              </motion.form>
            )}
            
            {submitted && (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <Sparkles className="w-8 h-8 text-green-600" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Thank you, {userInfo.name}!</h3>
                <p className="text-gray-600">Our team will contact you soon at {userInfo.email}</p>
              </motion.div>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget; 