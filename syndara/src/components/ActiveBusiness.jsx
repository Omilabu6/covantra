import React from 'react';
import { CheckCircle } from 'lucide-react';

const ActiveBusiness = () => {
  return (
    <div className="bg-[#faf8f5] py-12 md:py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6 md:mb-8">
          <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
          <span className="text-orange-600 font-medium text-sm md:text-base">Active Business</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 leading-tight">
          Mortgage solutions for real situations.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl leading-relaxed">
          We actively support purchase, refinance, renewal, consolidation, and construction-related scenarios through standard underwriting and legal closing processes.
        </p>

        {/* Common Situations */}
        <h2 className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4 md:mb-6">
          COMMON SITUATIONS WE HANDLE
        </h2>

        {/* List Items */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-0">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Clients who went to their bank first and need a better structure
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Construction financing that falls short mid-project
            </p>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-orange-600 mt-2 flex-shrink-0"></div>
            <p className="text-base md:text-lg text-gray-900">
              Consolidation and strategic refinances
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center md:justify-end items-end px-0 md:px-20 md:-mt-20 mt-8'>
        <img src="/bg.png" alt="Property" className='rounded-3xl w-full md:w-auto max-w-2xl' />
      </div>
    </div>
  );
};

export default ActiveBusiness;