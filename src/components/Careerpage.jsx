
import React from 'react';
import { ArrowRight, Heart, Users, Zap, Coffee } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import PerksScroller from './PerksScroller';

const benefits = [
  { icon: <Heart size={24} />, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: <Zap size={24} />, title: "Performance Bonus", desc: "Competitive salaries with annual performance bonuses and equity packages." },
  { icon: <Users size={24} />, title: "Team Retreats", desc: "Quarterly team offsites and annual international retreats to bond and recharge." },
  { icon: <Coffee size={24} />, title: "Flexible Work", desc: "Work from anywhere with our remote-first policy and flexible hours." },
];

const openPositions = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "New York, NY", type: "Full-time" },
  { title: "Backend Developer", department: "Engineering", location: "London, UK", type: "Full-time" },
  { title: "Marketing Manager", department: "Marketing", location: "Remote", type: "Full-time" },
  { title: "Data Scientist", department: "Data", location: "San Francisco, CA", type: "Full-time" },
  { title: "Customer Success Lead", department: "Operations", location: "Remote", type: "Full-time" },
];

export const CareersPage = () => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center relative z-10">
          <ScrollReveal>
            <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-4 block">Join the team</span>
            <h1 className="text-5xl lg:text-7xl font-bold text-triloe-dark mb-8 tracking-tight leading-[1.1]">
              Build the future of <br/> <span className="text-triloe-blue">finance with us.</span>
            </h1>
            <p className="text-lg text-triloe-grey max-w-2xl mx-auto mb-12 leading-relaxed">
              We're looking for passionate individuals who want to make a difference. 
              Join a diverse team of thinkers, dreamers, and doers.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
             <div className="relative rounded-[40px] overflow-hidden shadow-card aspect-[21/9] w-full">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop" 
                alt="Triloe Team Culture" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white text-left">
                <p className="font-semibold text-2xl">Our Annual Retreat 2024</p>
                <p className="opacity-90">Lisbon, Portugal</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-triloe-offWhite">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-triloe-dark mb-4">Perks & Benefits</h2>
              <p className="text-triloe-grey">Everything you need to do your best work.</p>
            </div>
          </ScrollReveal>

          {/* Desktop: horizontal auto-scroll */}
          <PerksScroller />

          {/* Mobile/Tablet: grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 mt-8">
            {benefits.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-[32px] shadow-sm h-full border border-gray-100 hover:shadow-card transition-all">
                  <div className="w-12 h-12 bg-blue-50 text-triloe-blue rounded-2xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-triloe-dark mb-2">{item.title}</h3>
                  <p className="text-triloe-grey text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-triloe-dark mb-2">Open Positions</h2>
                <p className="text-triloe-grey">Find the role that fits you best.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="group bg-white border border-gray-200 p-6 md:p-8 rounded-[32px] hover:border-triloe-blue transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-card cursor-pointer">
                  <div>
                    <h3 className="text-xl font-semibold text-triloe-dark mb-2 group-hover:text-triloe-blue transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-triloe-grey">
                      <span className="font-medium text-triloe-dark">{job.department}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{job.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-start md:self-center">
                    <span className="text-triloe-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">View Role</span>
                    <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-triloe-blue group-hover:border-triloe-blue group-hover:text-white transition-all">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
