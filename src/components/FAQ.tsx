'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the Online Astronomy Competition?",
      answer: "The Online Astronomy Competition (OAC) is a free, online competition designed for high school students passionate about astronomy and space science. It covers all aspects of astronomy from planetary science to cosmology, challenging students with problems beyond standard coursework."
    },
    {
      question: "Who can participate in the OAC?",
      answer: "The OAC is open to all high school students in grades 9-12 who are 18 years old or younger at competition time. The competition is completely free and open to students worldwide, with no prerequisites or qualifications required."
    },
    {
      question: "How do I register for the OAC?",
      answer: "Registration is simple and free! Just fill out the registration form on our website with your basic information. You'll receive a confirmation email with competition details and instructions for participating."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! The OAC is completely free to participate in. There are no registration fees, hidden costs, or payment requirements. We believe astronomy education should be accessible to everyone."
    },
    {
      question: "What topics are covered in the competition?",
      answer: "The OAC covers stellar astrophysics, planetary science, observational astronomy, cosmology, orbital mechanics, telescope physics, galactic astronomy, and exoplanet science. Problems range from basic concepts to advanced applications."
    },
    {
      question: "When and where is the 2025 OAC held?",
      answer: "The 2025 OAC will be held on August 30, 2025, as an online competition. The competition window is from 12:00 to 23:59 Eastern Standard Time, allowing participants from different time zones to compete."
    },
    {
      question: "Do I need special software or equipment?",
      answer: "No special software or equipment is required. You'll only need a computer with internet access and a web browser. All problems are designed to be solved using standard mathematical and scientific knowledge."
    },
    {
      question: "What recognition do participants receive?",
      answer: "All participants receive a certificate of participation. Top performers receive special recognition certificates and may be featured on our website. The competition is also a valuable addition to college applications and academic portfolios."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-950/50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300">
            Find answers to common questions about the Online Astronomy Competition.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:scale-[1.02]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between rounded-lg transition-all duration-300 hover:bg-slate-700/50"
              >
                <span className="font-semibold text-white hover:text-orange-300 transition-colors duration-300">{faq.question}</span>
                <div className={`transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-orange-400 hover:text-orange-300 transition-colors duration-300" />
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-4 border-t border-slate-600 pt-4">
                  <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-300 mb-4">
            Have a question that's not answered here?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
