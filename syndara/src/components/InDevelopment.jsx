import React from 'react'
import { Users, FileText, BarChart3, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const Card3D = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// Sample platform capabilities data
const platformCapabilities = [
  {
    icon: Users,
    title: "Investor Portal",
    description: "Secure access for eligible investors to track their participation and returns"
  },
  {
    icon: FileText,
    title: "Servicing Workflows",
    description: "Automated processes for payment distribution and compliance tracking"
  },
  {
    icon: BarChart3,
    title: "Standardized Reporting",
    description: "Real-time reporting and analytics for all stakeholders"
  },
  {
    icon: Shield,
    title: "Compliance Framework",
    description: "Built-in regulatory compliance and audit trail capabilities"
  }
];

const InDevelopment = () => {
  return (
    <div className="py-12 md:py-16 pb-16 md:pb-30 px-6 md:px-10 bg-[#faf8f5]">
      <div className="max-w-6xl mx-auto">
        <div className="float-in" style={{ perspective: "1000px" }}>
          
          <h2 className="reveal-text font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900">
            What Syndara is building.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-5xl">
            A permissioned participation and servicing system designed to support eligible investor
            participation tracking, servicing workflows, and standardized reporting.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 md:pt-10 pr-0 lg:pr-20 gap-6 md:gap-8">
            {platformCapabilities.map((cap, index) => (
              <Card3D key={index} className="group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex min-h-[180px] md:min-h-[200px] items-start gap-4 p-5 md:p-6 rounded-xl bg-white border border-gray-300 hover:border-orange-600 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="mt-1 p-2.5 md:p-3 rounded-lg bg-gray-100 group-hover:bg-orange-100 transition-colors flex-shrink-0">
                    <cap.icon className="h-5 w-5 md:h-6 md:w-6 text-orange-600 transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h5 className="font-sans font-semibold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">{cap.title}</h5>
                    <p className="text-sm md:text-base leading-relaxed text-gray-600">{cap.description}</p>
                  </div>
                </motion.div>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InDevelopment