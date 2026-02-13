
import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";

const ToastContext = createContext();

// Toast types: success, info, error
const toastStyles = {
  success: {
    icon: (
      <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#22c55e" opacity="0.15"/><path stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4"/></svg>
    ),
    bar: "bg-green-500",
    bg: "bg-white",
    border: "border-green-100",
    title: "text-green-700",
    subtitle: "text-green-500"
  },
  info: {
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#fbbf24" opacity="0.15"/><path stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01"/></svg>
    ),
    bar: "bg-yellow-400",
    bg: "bg-white",
    border: "border-yellow-100",
    title: "text-yellow-700",
    subtitle: "text-yellow-500"
  },
  error: {
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" fill="#ef4444" opacity="0.15"/><path stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6m0-6l6 6"/></svg>
    ),
    bar: "bg-red-500",
    bg: "bg-white",
    border: "border-red-100",
    title: "text-red-700",
    subtitle: "text-red-500"
  }
};

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const [visible, setVisible] = useState(false);
  const timer = useRef();
  const progressRef = useRef();
  const duration = 2200;

  const showToast = useCallback((title, type = "error", subtitle = null) => {
    setToast({ title, type, subtitle });
    setVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), duration);
  }, []);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = "100%";
      progressRef.current.style.transition = "none";
      // Force reflow
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = `width ${duration}ms linear`;
      progressRef.current.style.width = "0%";
    }
  }, [toast]);

  // Remove toast from DOM after fade-out
  useEffect(() => {
    if (!visible && toast) {
      const timeout = setTimeout(() => setToast(null), 500);
      return () => clearTimeout(timeout);
    }
  }, [visible, toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0 toast-animate-in' : 'opacity-0 -translate-y-8 toast-animate-out'}`}>
          <div className={`relative flex items-start gap-4 px-6 py-4 rounded-2xl shadow-xl border ${toastStyles[toast.type].bg} ${toastStyles[toast.type].border}`}> 
            <div className="pt-1">{toastStyles[toast.type].icon}</div>
            <div className="flex-1">
              <div className={`font-bold text-base mb-0.5 ${toastStyles[toast.type].title}`}>{toast.title}</div>
              {toast.subtitle && <div className={`text-sm ${toastStyles[toast.type].subtitle}`}>{toast.subtitle}</div>}
            </div>
            <button className="ml-2 mt-0.5 text-gray-400 hover:text-gray-600 transition" onClick={() => setVisible(false)} aria-label="Close">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className={`absolute left-0 bottom-0 h-1.5 rounded-b-2xl ${toastStyles[toast.type].bar}`} ref={progressRef} style={{width:'100%'}} />
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
}
