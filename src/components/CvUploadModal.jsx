import React, { useRef, useState } from "react";
import { useToast } from "./Toast";


export default function CvUploadModal({ open, onClose, onSubmit }) {
  const fileInputRef = useRef();
  const [fileName, setFileName] = useState("");
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  if (!open) return null;

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit(fileName, email);
    showToast(
      "Thank you for submitting!",
      "success",
      "Our team will review your CV and get back to you."
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-down" onClick={handleCardClick}>
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition" onClick={onClose} aria-label="Close">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 rounded-full p-3 mb-3">
            <svg className="w-8 h-8 text-triloe-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          </div>
          <h3 className="text-xl font-bold text-triloe-dark mb-1 text-center">Submit your CV</h3>
          <p className="text-triloe-grey text-sm text-center">Upload your CV for review. Supported formats: PDF, DOCX. Max size: 5MB.</p>
        </div>
        <div className="mb-4">
          <label htmlFor="cv-upload" className="block w-full cursor-pointer border-2 border-dashed border-triloe-blue/30 rounded-xl p-5 text-center hover:bg-blue-50 transition">
            <input
              id="cv-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-triloe-blue mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m-2 4h-4a2 2 0 01-2-2v-4h8v4a2 2 0 01-2 2z" /></svg>
              <span className="text-triloe-dark font-medium">{fileName || "Click to select your CV"}</span>
              <span className="text-triloe-grey text-xs">PDF, DOCX (max 5MB)</span>
            </div>
          </label>
        </div>
        <div className="mb-6">
          <input
            type="email"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-triloe-blue focus:ring-2 focus:ring-blue-100 outline-none bg-gray-50 text-triloe-dark text-sm"
            placeholder="Enter your email to get feedback"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex gap-3 mt-2">
          <button
            className="flex-1 py-3 rounded-full border border-gray-200 text-triloe-dark font-medium hover:bg-gray-50 transition"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-full bg-triloe-blue text-white font-semibold hover:bg-blue-700 transition shadow-button"
            onClick={handleSubmit}
            type="button"
            disabled={!fileName || !email}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
