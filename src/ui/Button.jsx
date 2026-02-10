import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-slate-900 text-white border-transparent hover:bg-slate-800 shadow-lg shadow-slate-900/20",
    secondary: "bg-white text-slate-900 border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    ghost: "bg-transparent text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-100",
    outline: "bg-transparent text-slate-900 border-slate-200 hover:bg-slate-50 hover:border-slate-300",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </motion.button>
  );
};
