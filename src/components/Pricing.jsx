import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    description: "Perfect for small teams getting started.",
    features: [
      "2 Team Members",
      "Basic Analytics",
      "5GB Storage",
      "Email Support",
    ],
    button: "Get Started",
    highlight: false,
  },

  {
    name: "Pro",
    price: "$29",
    description: "For growing businesses needing more power.",
    features: [
      "10 Team Members",
      "Advanced Analytics",
      "100GB Storage",
      "Priority Support",
      "API Access",
    ],
    button: "Try Pro Free",
    highlight: true,
  },

  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations.",
    features: [
      "Unlimited Members",
      "Custom Reporting",
      "Unlimited Storage",
      "24/7 Dedicated Agent",
      "SSO Integration",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-360 mx-auto px-6 lg:px-16">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-3 block">
            Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-triloe-dark mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-triloe-grey text-lg">
            Choose the plan that fits your business needs. No hidden fees.
          </p>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-[32px] border ${plan.highlight ? 'border-triloe-blue bg-blue-50/10 shadow-xl relative' : 'border-gray-100 bg-white shadow-sm'} flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-triloe-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-triloe-dark mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-triloe-dark">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-triloe-grey">/month</span>}
                </div>
                <p className="text-triloe-grey text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8 grow">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.highlight ? 'bg-triloe-blue text-white' : 'bg-gray-100 text-triloe-grey'}`}>
                      <Check size={12} />
                    </div>
                    <span className="text-triloe-dark text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 rounded-full font-medium transition-all ${
                  plan.highlight 
                    ? 'bg-triloe-blue text-white hover:bg-blue-700 shadow-button' 
                    : 'bg-white border border-gray-200 text-triloe-dark hover:bg-gray-50'
                }`}
                onClick={() => window.location.href = '/signup'}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
