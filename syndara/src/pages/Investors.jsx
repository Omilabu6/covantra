import React from 'react';
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  BarChart3,
  Clock,
  Building2,
  Briefcase,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import Navbar from '../components/Navbar';

const buildingFor = [
  {
    icon: FileText,
    title: "Permissioned Records",
    description: "Participation records designed for private distributions with full compliance",
  },
  {
    icon: BarChart3,
    title: "Consistent Statements",
    description: "Transaction history and statements that eliminate guesswork",
  },
  {
    icon: Shield,
    title: "Defined Allocation Logic",
    description: "Clear logic for distributions that you can rely on",
  },
  {
    icon: Clock,
    title: "Standardized Updates",
    description: "Servicing updates and reporting on a consistent cadence",
  },
];

const experience = [
  {
    icon: Building2,
    title: "Multi-family/commercial financings",
    description: "Experience with larger, complex property types",
  },
  {
    icon: Briefcase,
    title: "Structured and syndicated solutions",
    description: "Track record of participation-based deals",
  },
  {
    icon: Shield,
    title: "Complex refinance scenarios",
    description: "Construction and time-sensitive files handled successfully",
  },
];

const Investors = () => {
  return (
    <div>
        <Navbar />
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(255,255,255,0.04)_0%,_transparent_50%)]" />

        <div className="relative container mx-auto px-6 py-20 md:py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
              Private mortgage participation with{" "}
              <span className="italic">clearer reporting.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Syndara is building a permissioned system to modernize participation tracking, 
              servicing workflows, and reporting for private mortgage capital—backed by a team 
              with $175M+ funded since 2020.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a 
                href="/contact?type=investor"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Join Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Note */}
      <section className="bg-white border-b border-gray-200 py-5">
        <div className="container mx-auto px-6">
          <p className="text-sm text-gray-600 text-center">
            <strong className="text-gray-900">Eligibility note:</strong> Participation 
            opportunities, if offered, are available only to eligible investors, subject 
            to applicable exemptions and onboarding requirements.
          </p>
        </div>
      </section>

      {/* What We're Building */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              What Syndara is building for investors
            </h2>
            <p className="text-xl text-gray-600">
              A platform designed to bring clarity and consistency to private mortgage participation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {buildingFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="p-3 rounded-lg bg-gray-100 inline-block">
                  <item.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Qualified */}
      <section className="bg-[#faf8f5] py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
              Why we're qualified to build it
            </h2>
            <p className="text-xl text-gray-600">
              We are not starting from theory. Our experience spans real-world execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto p-4 rounded-xl bg-white border border-gray-200 inline-block">
                  <item.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Note */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto p-8 rounded-xl bg-red-50 border border-red-200"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-xl text-gray-900">Risk Disclosure</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">
                  Private mortgage investing involves risk, including borrower default, illiquidity, 
                  and collateral value changes. Returns are not guaranteed, and past results do not 
                  predict future results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-tight">
                Interested in early access?
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Request onboarding details and we'll be in touch about eligibility.
              </p>
              <div className="mt-8">
                <a 
                  href="/contact?type=investor"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;