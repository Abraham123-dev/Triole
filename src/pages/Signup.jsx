
import React, { useState } from "react";
import { useToast } from "../components/Toast";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Sorry, it is a demo website.", "error");
    }, 1800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mt-24 md:mt-32">
        <h2 className="text-2xl font-bold text-triloe-dark mb-2 text-center">Sign Up</h2>
        <div className="mb-5 text-center">
          <p className="text-triloe-dark font-semibold text-lg mb-1">Welcome to Triole!</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-triloe-dark font-medium mb-1" htmlFor="name">Name</label>
            <input id="name" type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-triloe-blue focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 text-triloe-dark" />
          </div>
          <div>
            <label className="block text-triloe-dark font-medium mb-1" htmlFor="email">Email</label>
            <input id="email" type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-triloe-blue focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 text-triloe-dark" />
          </div>
          <div>
            <label className="block text-triloe-dark font-medium mb-1" htmlFor="password">Password</label>
            <input id="password" type="password" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-triloe-blue focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 text-triloe-dark" />
          </div>
          <button type="submit" className="w-full py-3 rounded-full bg-triloe-blue text-white font-semibold text-lg shadow-button hover:bg-blue-700 transition-all flex items-center justify-center" disabled={loading}>
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>
                Signing up...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="mt-6 text-center text-triloe-grey text-sm">
          Already have an account? <a href="/login" className="text-triloe-blue font-medium hover:underline">Log in</a>
        </div>
      </div>
    </div>
  );
}
