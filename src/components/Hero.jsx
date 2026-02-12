import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, TrendingUp, ArrowUpRight } from 'lucide-react';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeSlide = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen bg-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-[10%] -left-[5%] w-[40%] h-[60%] bg-gray-50/80 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left Content */}
          <motion.div className="max-w-xl relative z-10 flex flex-col items-start" variants={fadeSlide}>
            {/* Tag */}
            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-gray-200 bg-white mb-8 shadow-sm">
              <span className="text-triloe-grey font-medium text-sm tracking-wide">Our Careers</span>
            </div>
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-bold tracking-tight text-triloe-dark mb-8 leading-[1.05]">
              Trusted Feedback <br />
              That Drives Triloe
            </h1>
            {/* Description */}
            <p className="text-lg lg:text-[19px] text-triloe-grey mb-12 max-w-[480px] leading-relaxed font-normal">
              We value every voice. Feedback from our clients pushes us to refine, elevate, and grow smarter every day.
            </p>
            {/* CTA */}
            <button className="group bg-[#262626] text-white pl-8 pr-2 py-2 rounded-full font-medium text-lg flex items-center gap-6 hover:bg-gray-500 transition-all duration-300 shadow-lg shadow-gray-200">
              Contact us
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-triloe-dark group-hover:scale-105 transition-transform shadow-sm">
                <ArrowRight size={20} className="text-triloe-lightGrey" />
              </div>
            </button>
          </motion.div>

          {/* Right Content - Image Composition */}
          <motion.div className="relative h-155 lg:h-[650px] w-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0" variants={fadeSlide}>
            {/* Card 1: Why join with us (Top Right) */}
            <motion.div className="absolute top-0 right-0 lg:right-0 w-[280px] sm:w-[320px] bg-white p-3.5 rounded-[40px] shadow-card z-10" variants={fadeSlide}>
              <div className="relative h-[200px] rounded-[32px] overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop" 
                  alt="Two women working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <h3 className="text-xl font-bold text-triloe-dark">Why join with us</h3>
                <div className="w-10 h-10 bg-triloe-offWhite rounded-full flex items-center justify-center text-triloe-dark transition-colors hover:bg-gray-200 cursor-pointer">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
            {/* Card 2: Let's grow our company (Bottom Left) */}
            <motion.div className="absolute bottom-12 lg:bottom-20 right-[25%] lg:right-[35%] w-[280px] sm:w-[320px] bg-white p-3.5 rounded-[40px] shadow-card z-20" variants={fadeSlide}>
              <div className="relative h-50 rounded-[32px] overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                  alt="Group meeting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-center px-2 pb-2">
                <h3 className="text-xl font-bold text-triloe-dark max-w-[150px] leading-tight">Let's grow our company</h3>
                <div className="w-10 h-10 bg-triloe-offWhite rounded-full flex items-center justify-center text-triloe-dark transition-colors hover:bg-gray-200 cursor-pointer">
                  <TrendingUp size={20} />
                </div>
              </div>
            </motion.div>
            {/* Floating Badge: 15+ Position (Bottom Right) */}
            <motion.div className="absolute bottom-0 right-0   lg:right-10 bg-white p-5 rounded-[32px] shadow-card z-30 flex items-center gap-5 min-w-[200px]" variants={fadeSlide}>
              <div className="flex flex-col">
                <span className="text-[20px] font-extrabold text-triloe-dark leading-none">15+</span>
                <span className="text-triloe-grey/80 text-sm font-medium mt-1">Position</span>
              </div>
              <div className="w-[52px] h-[52px] bg-triloe-dark rounded-full flex items-center justify-center text-white ml-auto shadow-lg shadow-black/20">
                <Briefcase size={22} />
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
