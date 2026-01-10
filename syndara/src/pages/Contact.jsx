import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Send = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ArrowRight = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
];

const purposes = [
  "Purchase",
  "Refinance",
  "Renewal",
  "Construction",
  "Other",
];

const investorCategories = [
  "Accredited Investor",
  "Eligible Investor",
  "Institutional",
  "Other",
];


export default function Contact() {
  const [formType, setFormType] = useState("borrower");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          <p className="font-semibold">Form submitted</p>
          <p className="text-sm">We'll be in touch within 1-2 business days.</p>
        </div>
      )}

      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Background Image */}
        <img 
          src="/hotel.jpg" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white/10" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/60 to-gray-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-200">
              Tell us what you are trying to do and when you need it done.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-2xl mx-auto">
          {/* Form Type Toggle */}
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg mb-8">
            <button
              onClick={() => setFormType("borrower")}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                formType === "borrower"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Borrower / Builder
            </button>
            <button
              onClick={() => setFormType("investor")}
              className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
                formType === "investor"
                  ? "bg-white shadow-sm text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Investor
            </button>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-300">
            <div className="transition-opacity duration-300">
              {formType === "borrower" ? (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Full name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="province" className="block text-sm font-medium text-gray-900">
                        Province
                      </label>
                      <select
                        id="province"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select province</option>
                        {provinces.map((province) => (
                          <option key={province} value={province.toLowerCase()}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-sm font-medium text-gray-900">
                        Property location
                      </label>
                      <input
                        id="location"
                        type="text"
                        placeholder="City, Province"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="purpose" className="block text-sm font-medium text-gray-900">
                        Purpose
                      </label>
                      <select
                        id="purpose"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select purpose</option>
                        {purposes.map((purpose) => (
                          <option key={purpose} value={purpose.toLowerCase()}>
                            {purpose}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-900">
                        Approx. loan amount
                      </label>
                      <input
                        id="amount"
                        type="text"
                        placeholder="$500,000"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-900">
                      Timeline
                    </label>
                    <input
                      id="timeline"
                      type="text"
                      placeholder="e.g., Closing in 30 days"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Additional details (optional)
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us more about your scenario..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-600/90 text-white rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Submit Scenario
                    <Send className="ml-2" />
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="investor-name" className="block text-sm font-medium text-gray-900">
                        Full name
                      </label>
                      <input
                        id="investor-name"
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="investor-email" className="block text-sm font-medium text-gray-900">
                        Email
                      </label>
                      <input
                        id="investor-email"
                        type="email"
                        placeholder="you@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="jurisdiction" className="block text-sm font-medium text-gray-900">
                        Jurisdiction
                      </label>
                      <select
                        id="jurisdiction"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select jurisdiction</option>
                        {provinces.map((province) => (
                          <option key={province} value={province.toLowerCase()}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                        Investor category
                      </label>
                      <select
                        id="category"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select category</option>
                        {investorCategories.map((category) => (
                          <option key={category} value={category.toLowerCase()}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="ticket" className="block text-sm font-medium text-gray-900">
                      Typical ticket size
                    </label>
                    <input
                      id="ticket"
                      type="text"
                      placeholder="e.g., $100,000 - $250,000"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="investor-message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <textarea
                      id="investor-message"
                      placeholder="Tell us about your investment interests..."
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-orange-600 hover:bg-orange-600/90 text-white rounded-lg font-medium inline-flex items-center justify-center transition-colors"
                  >
                    Request Early Access
                    <ArrowRight className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}