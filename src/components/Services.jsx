import React from 'react';
import { Shield, Zap, BarChart3, Globe, Users, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 size={28} />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics dashboard."
  },
  {
    icon: <Shield size={28} />,
    title: "Secure Banking",
    description: "Enterprise-grade security protocols ensuring your financial data remains protected."
  },
  {
    icon: <Zap size={28} />,
    title: "Instant Transfers",
    description: "Lightning-fast global money transfers with zero hidden fees and real-time tracking."
  },
  {
    icon: <Globe size={28} />,
    title: "Global Accounts",
    description: "Open multi-currency accounts in minutes and spend like a local anywhere."
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile First",
    description: "A seamless mobile experience designed for the modern financial lifestyle."
  },
  {
    icon: <Users size={28} />,
    title: "Team Management",
    description: "Collaborative tools to manage expenses and budgets across your entire organization."
  }
];

export const Services = () => {
  return (
    <section id="service" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-3 block">Our Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-triloe-dark mb-6 tracking-tight">
            Solutions built for scale
          </h2>
          <p className="text-triloe-grey text-lg">
            Comprehensive financial tools designed to help your business grow, manage, and thrive in a digital economy.
          </p>
        </div>
         

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-card transition-all duration-300 group border border-transparent hover:border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-50 text-triloe-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-triloe-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-triloe-dark mb-3">{service.title}</h3>
              <p className="text-triloe-grey leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
