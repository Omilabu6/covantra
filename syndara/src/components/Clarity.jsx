import React, { useState } from 'react';

// Icon Components
const ArrowLeft = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// FeatureCard Component
const FeatureCard = ({ title, description, icon, variant, delay = 0 }) => {
  const isLive = variant === "live";
  
  return (
    <div
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`aspect-square rounded-2xl mb-5 p-6 flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] overflow-hidden ${
          isLive ? "bg-orange-100" : "bg-orange-100"
        }`}
      >
        <img
          src={icon}
          alt={title}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="font-sans text-lg font-semibold text-gray-900 mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Clarity Component
const Clarity = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const liveFeatures = [
    {
      title: "Mortgage Origination",
      description: "Complete mortgage origination and structuring services for seamless property financing.",
      icon: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop",
    },
    {
      title: "Underwriting Guidance",
      description: "Expert underwriting guidance and comprehensive deal planning support.",
      icon: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop",
    },
    {
      title: "Legal Closing",
      description: "Standard legal closing and registration handled with precision and care.",
      icon: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop",
    },
    {
      title: "Borrower Support",
      description: "Ongoing servicing communication and dedicated borrower support channels.",
      icon: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
    },
    {
      title: "Additional Service 1",
      description: "Extra service description for demonstration purposes.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      title: "Additional Service 2",
      description: "Another service to show carousel functionality.",
      icon: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
    },
  ];

  const developmentFeatures = [
    {
      title: "Investor Tracking",
      description: "Permissioned participation tracking for eligible investors with full transparency.",
      icon: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    },
    {
      title: "Reporting & Statements",
      description: "Standardized investor reporting and automated statement generation.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      title: "Operational Tools",
      description: "Powerful tools to reduce spreadsheet work and streamline email admin.",
      icon: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop",
    },
    {
      title: "Partner Onboarding",
      description: "Simplified partner onboarding designed for scaled distribution.",
      icon: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
    },
  ];

  const maxIndex = Math.max(0, liveFeatures.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="relative py-16 md:py-24 lg:py-34 px-6 md:px-10 overflow-hidden bg-[#faf8f5]">
     <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-4 md:mb-6 opacity-0 animate-fade-up" 
            style={{ animationDelay: '100ms' }}
          >
            Clarity on what exists today
          </h2>

          <p 
            className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-up" 
            style={{ animationDelay: '200ms' }}
          >
            We believe in transparency. Here's exactly what's live and what we're building.
          </p>
        </div>

        {/* Live Today Section */}
        <div className="mb-16 md:mb-24 mt-8 md:mt-10">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Live Today</span>
              <div className="w-16 h-px bg-orange-600" />
            </div>
          </div>

          <div className="flex items-start gap-8">
            {/* Title on left */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <h3 
                className="font-serif text-4xl lg:text-5xl font-normal text-gray-900 opacity-0 animate-fade-up" 
                style={{ animationDelay: '300ms' }}
              >
                What's<br />available?
              </h3>
              <div 
                className="flex gap-3 mt-8 opacity-0 animate-fade-up" 
                style={{ animationDelay: '400ms' }}
              >
                <button 
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ArrowLeft />
                </button>
                <button 
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <ArrowRight />
                </button>
              </div>
            </div>

            {/* Feature cards with carousel */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="flex gap-6 transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / itemsPerPage + 1.5)}%)`,
                }}
              >
                {liveFeatures.map((feature, index) => (
                  <div key={feature.title} className="flex-shrink-0 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                    <FeatureCard
                      title={feature.title}
                      description={feature.description}
                      icon={feature.icon}
                      variant="live"
                      delay={350 + index * 100}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="lg:hidden flex justify-center gap-3 mt-8">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* In Development Section */}
        <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 mt-12 md:mt-20 shadow-lg border border-gray-300">
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">In Development</span>
              <div className="w-16 h-px bg-orange-600" />
            </div>
          </div>

          <div className="mb-8 md:mb-10">
            <h3 
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 opacity-0 animate-fade-up" 
              style={{ animationDelay: '600ms' }}
            >
              What we're building next
            </h3>
            <p 
              className="text-gray-600 text-sm md:text-base mt-3 max-w-xl opacity-0 animate-fade-up" 
              style={{ animationDelay: '650ms' }}
            >
              Exciting features in our pipeline to enhance your investment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                variant="development"
                delay={700 + index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Clarity;