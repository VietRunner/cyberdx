import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface FinalCTAProps {
  onContact?: () => void;
}

export default function FinalCTA({}: FinalCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        description: "",
      });
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Background glow in theme red */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d85b6a]/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="p-8 md:p-16 rounded-3xl bg-[#0a0a0c] border border-white/10 shadow-[0_24px_80px_rgba(216,91,106,0.1)]">
          
          <div className="text-center flex flex-col items-center mb-12">
            <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono mb-4">
              Request Consulting & Demo
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              WHERE VISION <br />
              <span className="text-[#d85b6a]">SHAPES VALUE</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mt-4">
              Submit your details below and our AI solutions experts will reach out to you within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle size={36} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                Submission Successful!
              </h3>
              <p className="text-white/50 text-sm max-w-sm leading-relaxed">
                Thank you for your interest. We have received your information and will respond as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-xs text-[#d85b6a] hover:underline uppercase font-bold tracking-widest font-mono"
              >
                Submit another form
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+1 (555) 000-0000"
                    className="px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="CyberDX Co., Ltd"
                    className="px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
              </div>

              {/* Inquiry details */}
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                  Inquiry Details
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your requirements here (e.g. Number of cameras, main surveillance goals...)"
                  className="px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-12 py-5 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  Send Inquiry Now
                  <Send size={14} />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
