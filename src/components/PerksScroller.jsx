import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { Heart, Zap, Users, Coffee } from "lucide-react";

const perks = [
  { icon: <Heart size={24} />, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: <Zap size={24} />, title: "Performance Bonus", desc: "Competitive salaries with annual performance bonuses and equity packages." },
  { icon: <Users size={24} />, title: "Team Retreats", desc: "Quarterly team offsites and annual international retreats to bond and recharge." },
  { icon: <Coffee size={24} />, title: "Flexible Work", desc: "Work from anywhere with our remote-first policy and flexible hours." },
];


export default function PerksScroller() {
  const rowRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [x, setX] = useState(0);

  // Set width after DOM paint and on resize
  useLayoutEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    function updateWidth() {
      setWidth(row.scrollWidth / 2);
    }
    updateWidth();
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(updateWidth);
      observer.observe(row);
      return () => observer.disconnect();
    } else {
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, []);

  useEffect(() => {
    if (!width) return;
    let frame;
    let last = performance.now();
    const speed = 0.06; // px per ms (adjust for smoothness)

    function animate(now) {
      const dt = now - last;
      last = now;
      setX(prev => {
        let next = prev - dt * speed;
        if (Math.abs(next) >= width) {
          next = 0;
        }
        return next;
      });
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [width]);

  // Duplicate perks for seamless loop
  const items = [...perks, ...perks];

  return (
    <div className="hidden lg:block relative w-full overflow-hidden">
      <div
        ref={rowRef}
        className="flex gap-8 w-max"
        style={{
          transform: `translateX(${x}px)`,
          transition: "none",
          willChange: "transform",
          minWidth: "100%",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 min-w-[320px] max-w-xs flex-shrink-0 hover:shadow-card transition-all"
          >
            <div className="w-12 h-12 bg-blue-50 text-triloe-blue rounded-2xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-triloe-dark mb-2">{item.title}</h3>
            <p className="text-triloe-grey text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
