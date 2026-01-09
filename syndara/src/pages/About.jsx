// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  MessageSquare,
  BarChart3,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Navbar from '../components/Navbar';

const values = [
  {
    icon: Shield,
    title: "Compliance-first execution",
    description: "Every decision starts with what's permissible and sustainable.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "No jargon, no hidden terms. Just honest conversation about what's possible.",
  },
  {
    icon: BarChart3,
    title: "Consistent reporting",
    description: "Standardized information that you can rely on, every time.",
  },
  {
    icon: Zap,
    title: "Practical technology",
    description: "Tools that reduce friction, not complexity for its own sake.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
              Operators first.{" "}
              <span className="italic font-light">Technology second.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              About Syndara
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Syndara is being built by an active Canadian mortgage team operating under 
                Mortgage Architects, Tara Borle's Team. The team publicly states{" "}
                <strong className="text-black">$175,000,000 mortgages funded since 2020</strong>{" "}
                across residential and commercial activity.
              </p>
              <p>
                We are building Syndara because the mortgage business is real, but the operational 
                layer is still too manual. Our goal is to scale responsibly by improving 
                participation tracking, servicing workflows, and reporting quality—without 
                changing legal closing standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              What we stand for
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-gray-100 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
            Want to work with us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Reach out to discuss your scenario or explore investor opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;