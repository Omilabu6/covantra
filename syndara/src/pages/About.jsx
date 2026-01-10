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
      <section className="relative  text-black overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-6 pt-30 ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-8xl translate-y-10 font-normal leading-tight tracking-tight">
              Operators first.{" "}
              <span className="italic font-light">Technology second.</span>
            </h1>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='w-[90%] '><img src="/whiteHouse.jpg" alt="" className='w-full rounded-[2em]' /></div> 
        </div>
      </section>

      {/* About Content */}
      <section className="py-30 px-15">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between gap-20">
            <div>
                <h2 className="text-2xl font-bold text-black ">
                ABOUT SYNDARA
                </h2>
                <h3 className='mt-4 text-lg'>Our mission is to simplify mortgage operations through smart technology—helping teams work faster, stay compliant, and scale sustainably.</h3>
            </div>
            <div className="space-y-4 max-w-2xl mt-20 text-2xl text-gray-600 leading-relaxed">
              <p>
               Syndara is being built by an active Canadian mortgage team operating under Mortgage Architects, led by Tara Borle’s Team. Since 2020, the team has publicly funded over $175,000,000 in mortgages across both residential and commercial markets, working closely with borrowers, investors, and legal professionals across Canada.
                 </p>
                 <p> We created Syndara because while the mortgage business itself is well-established and trusted, the operational layer behind it remains heavily manual, fragmented, and time-consuming. From participation tracking to servicing workflows and reporting, many processes still rely on spreadsheets, emails, and repetitive admin work.
                   </p>
                   <p>
                    Our mission is to modernize this backend without disrupting what already works. Syndara focuses on scaling responsibly by improving transparency, accuracy, and efficiency while fully respecting existing legal closing standards and regulatory requirements.
                     </p>
                   <p> By streamlining internal operations, Syndara helps mortgage teams spend less time on paperwork and more time building relationships, closing deals, and delivering better service to clients and partners.
                   </p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          <div className="px-14 mb-16">
            {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-4 md:mb-6 leading-tight">
                 What we stand for
                </h1>

                {/* Subheading */}
                <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-4xl leading-relaxed">
                  Principles that guide every decision we make.
                </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-orange-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-orange-100 flex-shrink-0">
                  <value.icon className="h-6 w-6 text-orange-600" />
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
      <section className="py-20 px-6 bg-[#faf8f5] text-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
            Want to work with us?
          </h2>
          <p className="text-lg  mb-8">
            Reach out to discuss your scenario or explore investor opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white text-lg font-medium rounded-lg hover:bg-orange-600 transition-colors"
            >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;