// import React from 'react'
// import { Users, FileText, BarChart3, Shield } from 'lucide-react'
// import { motion } from 'framer-motion'

// const Card3D = ({ children, className }) => (
//   <div className={className}>{children}</div>
// );

// // Sample platform capabilities data
// const platformCapabilities = [
//   {
//     icon: Users,
//     title: "Investor Portal",
//     description: "Secure access for eligible investors to track their participation and returns"
//   },
//   {
//     icon: FileText,
//     title: "Servicing Workflows",
//     description: "Automated processes for payment distribution and compliance tracking"
//   },
//   {
//     icon: BarChart3,
//     title: "Standardized Reporting",
//     description: "Real-time reporting and analytics for all stakeholders"
//   },
//   {
//     icon: Shield,
//     title: "Compliance Framework",
//     description: "Built-in regulatory compliance and audit trail capabilities"
//   }
// ];

// const InDevelopment = () => {
//   return (
//     <div className="py-12 md:py-16 pb-16 md:pb-30 px-6 md:px-10 bg-[#faf8f5]">
//       <div className="max-w-6xl mx-auto">
//         <div className="float-in" style={{ perspective: "1000px" }}>
          
//           <h2 className="reveal-text font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900">
//             What Syndara is building.
//           </h2>
//           <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-5xl">
//             A permissioned participation and servicing system designed to support eligible investor
//             participation tracking, servicing workflows, and standardized reporting.
//           </p>

//           <div className="grid grid-cols-1 lg:grid-cols-2 pt-8 md:pt-10 pr-0 lg:pr-20 gap-6 md:gap-8">
//             {platformCapabilities.map((cap, index) => (
//               <Card3D key={index} className="group">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="flex min-h-[180px] md:min-h-[200px] items-start gap-4 p-5 md:p-6 rounded-xl bg-white border border-gray-300 hover:border-orange-600 transition-all shadow-sm hover:shadow-md"
//                 >
//                   <div className="mt-1 p-2.5 md:p-3 rounded-lg bg-gray-100 group-hover:bg-orange-100 transition-colors flex-shrink-0">
//                     <cap.icon className="h-5 w-5 md:h-6 md:w-6 text-orange-600 transition-colors" />
//                   </div>
//                   <div className="flex-1 flex flex-col justify-center">
//                     <h5 className="font-sans font-semibold text-lg md:text-xl text-gray-900 mb-2 md:mb-3">{cap.title}</h5>
//                     <p className="text-sm md:text-base leading-relaxed text-gray-600">{cap.description}</p>
//                   </div>
//                 </motion.div>
//               </Card3D>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default InDevelopment
import React from 'react';
import { Users, FileText, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

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

const PhoneMockup = ({ activeIndex }) => {
  const activeCard = platformCapabilities[activeIndex];
  const Icon = activeCard.icon;

  return (
    <div className="relative w-full max-w-[240px] md:max-w-[260px] mx-auto">
      {/* Phone Frame */}
      <div className="relative bg-gray-800 rounded-[2.2rem] p-2 shadow-2xl">
        {/* Phone Screen */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-[1.8rem] aspect-[9/19] overflow-hidden relative transition-all duration-500">
          {/* Screen Content */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 p-5 flex flex-col"
          >
            {/* Top Section */}
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="w-16 h-16 rounded-xl bg-white shadow-md flex items-center justify-center mb-5 border border-orange-100"
              >
                <Icon className="w-8 h-8 text-orange-600" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-900 text-lg font-semibold mb-2"
              >
                {activeCard.title}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-xs leading-relaxed px-3"
              >
                {activeCard.description}
              </motion.p>
            </div>

            {/* Bottom Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-2"
            >
              <div className="bg-white rounded-lg p-2.5 shadow-sm border border-orange-100">
                <div className="text-gray-500 text-[10px] mb-0.5">Status</div>
                <div className="text-gray-900 text-sm font-semibold">Active</div>
              </div>
              <div className="bg-white rounded-lg p-2.5 shadow-sm border border-orange-100">
                <div className="text-gray-500 text-[10px] mb-0.5">Security</div>
                <div className="text-gray-900 text-sm font-semibold">Secure</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-800 rounded-full" />
        </div>
      </div>

      {/* Subtle Shadow */}
      <div className="absolute inset-0 bg-orange-200/20 blur-2xl -z-10 rounded-full scale-75" />
    </div>
  );
};

const InDevelopmentSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platformCapabilities.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-gray-900">
            What Syndara is building.
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
            A permissioned participation and servicing system designed to support eligible investor
            participation tracking, servicing workflows, and standardized reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Cards Grid */}
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            {platformCapabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onHoverStart={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group cursor-pointer flex items-start gap-4 p-4 md:p-5 rounded-xl transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white shadow-lg border-2 border-orange-500' 
                    : 'bg-white/60 hover:bg-white shadow-sm hover:shadow-md border-2 border-transparent'
                }`}
              >
                <div className={`p-2.5 md:p-3 rounded-lg bg-orange-50 border border-orange-100 flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index ? 'bg-orange-100 scale-110' : 'scale-100'
                }`}>
                  <cap.icon className={`h-5 w-5 md:h-6 md:w-6 transition-colors ${
                    activeIndex === index ? 'text-orange-600' : 'text-orange-500'
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-gray-900 mb-1.5">
                    {cap.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                    {cap.description}
                  </p>
                </div>
                
                {/* Active Indicator */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0 mt-2"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <PhoneMockup activeIndex={activeIndex} />
          </div>
        </div>

        {/* Progress Dots - Mobile Only */}
        <div className="flex lg:hidden justify-center gap-2 mt-8">
          {platformCapabilities.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex 
                  ? 'w-6 bg-orange-500' 
                  : 'w-1.5 bg-gray-300'
              }`}
              aria-label={`Go to feature ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDevelopmentSection;