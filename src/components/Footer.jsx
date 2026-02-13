import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-triloe-blue rounded-lg flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-semibold text-triloe-dark text-lg">Triloe</span>
        </div>
        <p className="text-triloe-grey text-sm">© 2026 Triloe Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
