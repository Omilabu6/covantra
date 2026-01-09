import React from 'react';
import { motion } from "framer-motion";
import { Building2, Wallet, Clock, ArrowRight } from "lucide-react";
import Navbar from '../components/Navbar';

const caseStudies = [
  {
    icon: Building2,
    title: "Multi-family financing",
    location: "Edmonton, Alberta",
    description:
      "Public posts reference financing of a 42-unit property in Edmonton, Alberta.",
    improvement:
      "What Syndara will improve: consistent participation reporting and standardized servicing operations.",
  },
  {
    icon: Wallet,
    title: "Structured consolidation",
    location: "Calgary, Alberta",
    description:
      "Public posts reference a syndicated loan of $602,000 for debt consolidation in Calgary.",
    improvement:
      "What Syndara will improve: clearer allocation logic and statement generation.",
  },
  {
    icon: Clock,
    title: "Construction refinance scenario",
    location: "Various locations",
    description:
      "Public posts discuss cases where traditional construction financing falls short and refinancing is needed.",
    improvement:
      "What Syndara will improve: cleaner workflows across time-sensitive files.",
  },
];

const CaseStudies = () => {
  return (
    <div>
        <Navbar />
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />

        <div className="relative container mx-auto px-6 py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Every scenario is different. These examples are shared at a high level to protect privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="p-4 rounded-xl bg-gray-100 shrink-0">
                    <study.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <h3 className="font-serif text-2xl text-gray-900">{study.title}</h3>
                      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full w-fit">
                        {study.location}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{study.description}</p>
                    <p className="mt-4 text-gray-900 font-medium">{study.improvement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf8f5] py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-gray-900">
                Have a similar scenario?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We're happy to discuss what's realistic and outline next steps.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit a Scenario
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a 
                  href="/contact?type=investor"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 text-lg font-medium rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Request Early Access
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;