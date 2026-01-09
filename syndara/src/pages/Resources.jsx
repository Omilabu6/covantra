import React from 'react';
import Navbar from '../components/Navbar';

const BookOpen = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const ArrowRight = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const resources = [
  {
    title: "Mortgage renewals: what to review before signing",
    category: "Borrower Guide",
    description: "Key considerations when your mortgage term is ending.",
  },
  {
    title: "Breaking a mortgage early: penalties and options",
    category: "Borrower Guide",
    description: "Understanding the costs and alternatives when you need to exit early.",
  },
  {
    title: "Construction financing gaps: what borrowers can do",
    category: "Borrower Guide",
    description: "Options when traditional construction financing falls short.",
  },
  {
    title: "Private vs bank financing: when each fits",
    category: "Education",
    description: "Comparing traditional bank lending with private mortgage solutions.",
  },
  {
    title: "Rate environment education and planning",
    category: "Education",
    description: "Understanding how rate changes impact your mortgage strategy.",
  },
  {
    title: "What servicing means and why it matters",
    category: "Investor Guide",
    description: "The operational side of mortgage management explained.",
  },
  {
    title: "Key terms: LTV, refinance, term-out, participation",
    category: "Glossary",
    description: "Definitions of common mortgage and investment terminology.",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Hero */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Resources
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Practical guides for borrowers and investors. Clear explanations and plain language.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="text-gray-500" />
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {resource.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-xl bg-gray-100 text-center">
            <p className="text-lg text-gray-900">
              More resources coming soon. Have a scenario?
            </p>
            <button className="mt-4 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg font-medium inline-flex items-center transition-colors">
              Send it
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}