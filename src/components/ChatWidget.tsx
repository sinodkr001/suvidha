import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const chatFlow = [
  {
    question: 'What features does Suvidha POS offer?',
    answer: 'Suvidha POS offers inventory management, sales reporting, employee tracking, and more.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! We offer a 14-day free trial for all new users.'
  },
  {
    question: 'How do I get support?',
    answer: 'You can contact our 24/7 support team via phone, email, or WhatsApp.'
  }
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '' });
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
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        style={{ display: open ? 'none' : 'block' }}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-full bg-white rounded-2xl shadow-2xl border border-orange-100 flex flex-col">
          <div className="flex items-center justify-between px-5 py-4 border-b border-orange-100 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl">
            <span className="text-white font-bold text-lg">Suvidha Chat</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="p-5 flex-1 flex flex-col gap-4 min-h-[250px]">
            {/* Chat Flow */}
            {step < chatFlow.length && !showAnswer && (
              <>
                <div className="text-gray-800 font-medium mb-2">Select a question:</div>
                <button
                  className="bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-lg text-left transition-all border border-orange-100"
                  onClick={handleQuestionClick}
                >
                  {chatFlow[step].question}
                </button>
              </>
            )}
            {step < chatFlow.length && showAnswer && (
              <>
                <div className="text-gray-700 mb-2 font-semibold">Q: {chatFlow[step].question}</div>
                <div className="bg-orange-50 text-gray-800 p-3 rounded-lg mb-4">{chatFlow[step].answer}</div>
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold self-end transition-all"
                  onClick={handleNext}
                >
                  Next
                </button>
              </>
            )}
            {step === chatFlow.length && !submitted && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="text-gray-800 font-medium mb-2">Please enter your details for contact:</div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={userInfo.phone}
                  onChange={handleInputChange}
                  className="border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all"
                >
                  Submit
                </button>
              </form>
            )}
            {submitted && (
              <div className="text-green-600 font-semibold text-center py-8">
                Thank you, {userInfo.name}!<br />Our team will contact you soon.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget; 