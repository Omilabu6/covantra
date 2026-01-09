import React from 'react';
import { motion } from "framer-motion";
import {
  Home,
  RefreshCw,
  Building,
  Wallet,
  Building2,
  ArrowRight,
} from "lucide-react";
import Navbar from '../components/Navbar';

const whoWeHelp = [
  {
    icon: Home,
    title: "Homeowners",
    description: "Renewing or refinancing with better options than your bank offered",
  },
  {
    icon: RefreshCw,
    title: "Buyers",
    description: "Needing alternative capital to close when traditional financing falls short",
  },
  {
    icon: Building,
    title: "Builders",
    description: "Construction projects needing term-out or restructure mid-project",
  },
  {
    icon: Wallet,
    title: "Consolidation",
    description: "Second-position strategies where appropriate for debt management",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Multi-family borrowers where traditional lending doesn't fit",
  },
];

const process = [
  { step: "01", title: "Submit your scenario and timeline" },
  { step: "02", title: "Receive a document checklist" },
  { step: "03", title: "Review and structure realistic options" },
  { step: "04", title: "Close through standard legal processes" },
  { step: "05", title: "Post-funding servicing communication" },
];

const faqs = [
  {
    question: "Is this crypto lending?",
    answer:
      "No. Borrower payments remain in CAD through normal payment rails. This is traditional mortgage lending with modern operational infrastructure.",
  },
  {
    question: "Do you replace my lawyer?",
    answer:
      "No. Closings remain standard legal processes and registration. We work with your chosen legal counsel.",
  },
  {
    question: "How fast can this move?",
    answer:
      "Timelines depend on documentation, appraisal, and complexity. We provide a realistic estimate after initial review.",
  },
];

const Borrowers = () => {
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
              Mortgage solutions for{" "}
              <span className="italic">real situations.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              If a bank decision does not reflect the full picture, we help structure a plan 
              that fits your asset and your timeline.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                Start a Scenario
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Who we help</h2>
            <p className="text-xl text-gray-600">
              We work with borrowers across a range of situations where traditional lending falls short.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeHelp.map((item, index) => (
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

      {/* Process */}
      <section className="bg-[#faf8f5] py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">What to expect</h2>
            <p className="text-xl text-gray-600">
              A clear process from initial conversation to closing and beyond.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 py-6 border-b border-gray-200 last:border-0"
              >
                <span className="font-serif text-4xl text-orange-500/50">{item.step}</span>
                <div className="pt-2">
                  <h4 className="font-serif text-xl text-gray-900">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Borrower FAQs</h2>
          </div>

          <div className="max-w-3xl space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="font-serif text-xl text-gray-900">{faq.question}</h4>
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
                Have a scenario? Let's talk.
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                We'll tell you what's realistic and outline the next steps.
              </p>
              <div className="mt-8">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start a Scenario
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

export default Borrowers;