import React, { useState } from 'react';
import CvUploadModal from './CvUploadModal';
import { ArrowRight } from 'lucide-react';

const positions = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Product Designer", department: "Design", location: "New York, NY", type: "Full-time" },
  { title: "Backend Developer", department: "Engineering", location: "London, UK", type: "Full-time" },
  { title: "Marketing Manager", department: "Marketing", location: "Remote", type: "Full-time" }
];

export const Careers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cvName, setCvName] = useState("");
  return (
    <>
      <section className="py-24 bg-triloe-offWhite">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-triloe-blue font-medium tracking-wide uppercase text-sm mb-3 block">Careers</span>
            <h2 className="text-4xl lg:text-5xl font-semibold text-triloe-dark tracking-tight">
              Join our growing team
            </h2>
          </div>
          <a href="#" className="text-triloe-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View all positions <ArrowRight size={20} />
          </a>
        </div>

        <div className="bg-white rounded-[32px] shadow-sm overflow-hidden border border-gray-100">
          {positions.map((job, index) => (
            <div 
              key={index} 
              className="p-6 md:p-8 border-b border-gray-100 last:border-0 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors group"
            >
              <div>
                <h3 className="text-xl font-semibold text-triloe-dark mb-2 group-hover:text-triloe-blue transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-sm text-triloe-grey">
                  <span>{job.department}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{job.location}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button
                className="px-6 py-2.5 rounded-full border border-gray-200 text-triloe-dark font-medium hover:bg-triloe-dark hover:text-white transition-all self-start md:self-center"
                onClick={() => setModalOpen(true)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
      </section>
      <CvUploadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={(file) => {
          setCvName(file);
          setModalOpen(false);
        }}
      />
    </>
  );
};
