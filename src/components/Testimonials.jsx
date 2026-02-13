import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Triloe has completely transformed how we manage our company expenses. The insights are invaluable."
  },
  {
    name: "Michael Chen",
    role: "Founder of StartScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    quote: "The best financial decision we made this year was switching to Triloe. The UI is incredibly intuitive."
  },
  {
    name: "Elena Rodriguez",
    role: "Director at CreativeMinds",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "Customer support is outstanding. They helped us integrate our API in less than 24 hours."
  }
];


const ITEM_WIDTH = 400;
const GAP = 30;


export const Testimonials = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (testimonials.length - 1) * (ITEM_WIDTH + GAP);

  const x = useTransform(scrollYProgress, [0, 1], [-totalDistance, 0]);
  const transition = { duration: 1.6, ease: [0.22, 1, 0.36, 1] };


  // Responsive: Only animate on desktop (lg: 1024px+)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024;
    }
    return false;
  });

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="testimonial" className="py-24 bg-[#F7F7F7]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-3 block">Testimonials</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-triloe-dark tracking-tight">
              Trusted by industry leaders
            </h2>
          </div>
        </div>
        {isDesktop ? (
          <div ref={containerRef} className="relative h-[500px] overflow-x-hidden">
            <div className="sticky top-0 h-[500px] flex items-center">
              <motion.div className="flex gap-8" style={{ x }} transition={transition}>
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-full min-w-[400px] max-w-[400px]"
                  >
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <p className="text-triloe-dark text-lg font-medium leading-relaxed mb-8 flex-grow">
                      "{item.quote}"
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-semibold text-triloe-dark">{item.name}</h4>
                        <p className="text-sm text-triloe-grey">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-triloe-dark text-lg font-medium leading-relaxed mb-8 flex-grow">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-triloe-dark">{item.name}</h4>
                    <p className="text-sm text-triloe-grey">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}