import React, { useState } from "react";

export default function NewsletterModal({ open, onClose, onSubscribe }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (onSubscribe) onSubscribe(email);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
      onClose();
    }, 1800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-triloe-blue text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-triloe-dark">Subscribe to our Newsletter</h2>
        <p className="text-triloe-grey mb-6 text-sm">Leave your email and we'll contact you with updates and opportunities.</p>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-triloe-blue text-3xl mb-2">✓</div>
            <div className="text-triloe-dark font-semibold">Thank you for subscribing!</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-triloe-blue text-base"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-triloe-blue text-white rounded-xl py-3 font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
