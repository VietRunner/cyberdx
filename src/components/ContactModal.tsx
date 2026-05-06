import { useState, useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "https://form.cyberdx.tech/api/contact";
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
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
    const message = form.message.trim();

    if (fullName.length < 2) {
      return "Full name must be at least 2 characters.";
    }

    if (!isValidEmail(email)) {
      return "Please enter a valid email address.";
    }

    if (message.length < 2) {
      return "Message must be at least 2 characters.";
    }

    if (message.length > 2000) {
      return "Message is too long (max 2000 characters).";
    }

    return "";
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // reset after close animation
      setTimeout(() => {
        setSent(false);
        setErrorMessage("");
        setToast(null);
        setForm({ name: "", email: "", company: "", message: "" });
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
      setForm({ name: "", email: "", company: "", message: "" });
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
      <div className="dx-modal" onClick={(e) => e.stopPropagation()}>
        {toast ? (
          <div className={`dx-toast dx-toast-${toast.type}`} role="status" aria-live="polite">
            {toast.message}
          </div>
        ) : null}
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
              {errorMessage ? <p className="dx-modal-error">{errorMessage}</p> : null}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
