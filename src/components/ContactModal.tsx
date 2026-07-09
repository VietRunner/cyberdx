import { useState, useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "https://form.cyberdx.tech/api/contact";
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ type, message });
  };

  const isValidEmail = (email: string) => {
    const value = email.trim();
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  };

  const validateForm = () => {
    const fullName = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const company = form.company.trim();
    const message = form.message.trim();

    if (fullName.length < 2) {
      return "Full name must be at least 2 characters.";
    }

    if (!isValidEmail(email)) {
      return "Please enter a valid email address.";
    }

    if (phone.length < 5) {
      return "Phone number must be at least 5 characters.";
    }

    if (company.length < 1) {
      return "Please enter your company name.";
    }

    if (message.length < 2) {
      return "Inquiry details must be at least 2 characters.";
    }

    if (message.length > 2000) {
      return "Inquiry details are too long (max 2000 characters).";
    }

    return "";
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      
      setTimeout(() => {
        setSent(false);
        setErrorMessage("");
        setToast(null);
        setForm({ name: "", email: "", phone: "", company: "", message: "" });
      }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2800);
    return () => window.clearTimeout(id);
  }, [toast]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!contactApiUrl) {
      const message = "Contact form is not configured.";
      setErrorMessage(message);
      showToast("error", message);
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      showToast("error", validationError);
      return;
    }

    const payload = {
      fullName: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      message: form.message.trim(),
    };

    setSending(true);
    try {
      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let serverMessage = "";
        try {
          const data = await response.json();
          serverMessage = data?.message || data?.error || "";
        } catch {
          try {
            serverMessage = await response.text();
          } catch {
            serverMessage = "";
          }
        }
        const detail = serverMessage ? `: ${serverMessage}` : "";
        throw new Error(`Request failed with status ${response.status}${detail}`);
      }

      setSent(true);
      showToast("success", "Message sent successfully.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      const message = error instanceof TypeError
        ? "Unable to send request from browser (likely CORS). Please try again later."
        : error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";
      setErrorMessage(message);
      showToast("error", message);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="dx-modal-overlay" onClick={onClose}>
      <div 
        className="dx-modal !bg-[#0a0a0c] !border-white/10 !rounded-3xl !max-w-2xl !shadow-[0_24px_80px_rgba(216,91,106,0.15)] !p-8 md:!p-12 relative" 
        onClick={(e) => e.stopPropagation()}
      >
        {toast ? (
          <div className={`dx-toast dx-toast-${toast.type}`} role="status" aria-live="polite">
            {toast.message}
          </div>
        ) : null}
        
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-[#d85b6a]/10 border border-white/10 hover:border-[#d85b6a]/20 w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 z-20"
          onClick={onClose}
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {sent ? (
          <div className="text-center py-12 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide">
              Submission Successful!
            </h3>
            <p className="text-white/50 text-sm max-w-sm leading-relaxed">
              Thank you for your interest. We have received your information and will respond as soon as possible.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center bg-[#d85b6a] hover:bg-[#e26c7b] text-white font-black uppercase tracking-wider text-xs px-12 py-4 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="text-center flex flex-col items-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#d85b6a]/10 border border-[#d85b6a]/20 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold text-[#ff8a9a] uppercase tracking-widest font-mono mb-4">
                Request Consulting & Demo
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                WHERE VISION <br />
                <span className="text-[#d85b6a]">SHAPES VALUE</span>
              </h2>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-md mt-4">
                Submit your details below and our AI solutions experts will reach out to you within 24 business hours.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 text-left">
                    Full Name <span className="text-[#d85b6a]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 text-left">
                    Email Address <span className="text-[#d85b6a]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 text-left">
                    Phone Number <span className="text-[#d85b6a]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 text-left">
                    Company Name <span className="text-[#d85b6a]">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="CyberDX Co., Ltd"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 text-left">
                  Inquiry Details <span className="text-[#d85b6a]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Please describe your requirements here (e.g. Number of cameras, main surveillance goals...)"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="px-5 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:border-[#d85b6a] focus:outline-none transition-colors w-full resize-none"
                />
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#d85b6a] hover:bg-[#e26c7b] disabled:bg-[#d85b6a]/50 text-white font-black uppercase tracking-wider text-xs px-12 py-4.5 rounded-full shadow-[0_12px_28px_rgba(216,91,106,0.3)] disabled:shadow-none transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none disabled:cursor-not-allowed cursor-pointer"
                >
                  {sending ? "Sending..." : "Send Inquiry Now"}
                  {!sending && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  )}
                </button>
              </div>
              {errorMessage ? <p className="text-[#ff8a9a] text-xs font-mono mt-2 text-center">{errorMessage}</p> : null}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
