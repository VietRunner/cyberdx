import { useState, useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // reset after close animation
      setTimeout(() => { setSent(false); setForm({ name: "", email: "", company: "", message: "" }); }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate send
    setSending(false);
    setSent(true);
  };

  return (
    <div className="dx-modal-overlay" onClick={onClose}>
      <div className="dx-modal" onClick={(e) => e.stopPropagation()}>
        <button className="dx-modal-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {sent ? (
          <div className="dx-modal-success">
            <div className="dx-modal-success-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="var(--dx-accent)" strokeWidth="2"/>
                <path d="M12 20L18 26L28 14" stroke="var(--dx-accent)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="dx-modal-success-title">Message Sent!</h3>
            <p className="dx-modal-success-text">Thank you for reaching out. We'll get back to you shortly.</p>
            <button className="dx-modal-submit" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <div className="dx-modal-header">
              <p className="dx-modal-label">GET IN TOUCH</p>
              <h2 className="dx-modal-title">Let's Connect</h2>
              <p className="dx-modal-subtitle">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>

            <form className="dx-modal-form" onSubmit={handleSubmit}>
              <div className="dx-modal-row">
                <div className="dx-modal-field">
                  <label className="dx-modal-field-label">Full Name <span>*</span></label>
                  <input
                    className="dx-modal-input"
                    type="text"
                    placeholder="John Smith"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="dx-modal-field">
                  <label className="dx-modal-field-label">Email <span>*</span></label>
                  <input
                    className="dx-modal-input"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="dx-modal-field">
                <label className="dx-modal-field-label">Company</label>
                <input
                  className="dx-modal-input"
                  type="text"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
              </div>
              <div className="dx-modal-field">
                <label className="dx-modal-field-label">Message <span>*</span></label>
                <textarea
                  className="dx-modal-input dx-modal-textarea"
                  placeholder="Tell us about your project..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button className="dx-modal-submit" type="submit" disabled={sending}>
                {sending ? "Sending..." : "SEND MESSAGE"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
