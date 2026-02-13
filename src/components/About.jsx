import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { div } from 'motion/react-client';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* my Image Side brr */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-card aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white p-6 rounded-[32px] shadow-card max-w-60 sm:block">
              <p className="text-triloe-dark font-extrabold text-lg mb-1">5M+ Users</p>
              <p className="text-triloe-grey text-sm">Trusted by companies worldwide.</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-3 block">About Triloe</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-triloe-dark mb-8 tracking-tight leading-[1.1]">
              We help businesses <br/> navigate the future.
            </h2>
            <p className="text-triloe-grey text-lg mb-8 leading-relaxed">
              Founded in 2020, Triloe has grown from a small startup to a global financial platform. Our mission is to simplify complex financial processes, allowing you to focus on what matters most—your growth.
            </p>

            <div className='space-y-4 mb-10'>
             {[
                "Transparent pricing with no hidden fees",
                "Real-time analytics and reporting",
                "Dedicated 24/7 support team"

             ].map((item, i) => (
               <div key={i} className='flex items-center gap-3'>
                <CheckCircle2 className='text-triloe-blue flex-shrink-0 size={20}' />
                <span className='text-triloe-dark font-medium'>{item}</span>
               </div>
             ))}
            </div>

            <button className="bg-triloe-dark text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
              Learn more about us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
