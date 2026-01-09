import React from 'react';
import Navbar from '../components/Navbar';

const CheckCircle2 = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Clock = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const FileCheck = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Scale = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
);

const Users = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const BarChart3 = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const ArrowRight = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const existsToday = [
  "Origination, underwriting, and closing through standard processes",
  "Legal registration remains fully traditional",
  "Borrower servicing occurs through normal payment rails",
];

const syndaraAdds = [
  "Permissioned investor onboarding and participation records",
  "Operational servicing workflows that reduce manual reconciliation",
  "Standardized statements and reporting designed for scale",
];

const flow = [
  {
    step: "01",
    title: "Origination and underwriting remain traditional",
    Icon: FileCheck,
  },
  {
    step: "02",
    title: "Legal closing and registration remain traditional",
    Icon: Scale,
  },
  {
    step: "03",
    title: "Eligible investors onboard through a permissioned process",
    Icon: Users,
  },
  {
    step: "04",
    title: "Participation records are tracked in a permissioned ledger",
    Icon: BarChart3,
  },
  {
    step: "05",
    title: "Servicing workflows support allocations and statements",
    Icon: Clock,
  },
  {
    step: "06",
    title: "Reporting creates a consistent record over time",
    Icon: FileCheck,
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
      {/* Hero */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 opacity-90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
              Traditional mortgages.{" "}
              <span className="italic">Modern administration.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              We don't change how mortgages are closed or registered. We add an operational 
              layer that makes participation tracking, servicing, and reporting cleaner.
            </p>
          </div>
        </div>
      </section>

      {/* What Exists vs What Syndara Adds */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
                <CheckCircle2 />
                What exists today
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                Traditional processes remain unchanged
              </h2>
              <ul className="mt-6 space-y-4">
                {existsToday.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-sm font-medium mb-6">
                <Clock />
                What Syndara adds (in development)
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                Modern administration layer
              </h2>
              <ul className="mt-6 space-y-4">
                {syndaraAdds.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 rounded-full bg-amber-600 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Syndara Flow */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">
              The Syndara flow
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple progression from traditional origination to modern reporting.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flow.map((item, index) => {
                const Icon = item.Icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-serif text-3xl text-amber-600/40">{item.step}</span>
                      <div className="p-2 rounded-lg bg-gray-100">
                        <Icon className="text-blue-900" />
                      </div>
                    </div>
                    <p className="text-gray-900 font-medium">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-normal">
              Ready to learn more?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Whether you're a borrower or investor, we'd be happy to discuss how this works.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium inline-flex items-center justify-center transition-colors">
                Submit a Scenario
                <ArrowRight className="ml-2" />
              </button>
              <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-lg font-medium transition-colors">
                Request Early Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}