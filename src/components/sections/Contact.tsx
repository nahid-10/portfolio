"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import SectionWrapper, { itemVariants } from "@/components/ui/SectionWrapper";
import GlassCard from "@/components/ui/GlassCard";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    // Simulate network request
    await new Promise((res) => setTimeout(res, 1000));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  const inputBase =
    "w-full bg-[rgba(255,255,255,0.04)] border rounded-lg px-4 py-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all duration-200 focus:ring-1";
  const inputNormal = "border-[var(--border)] focus:border-[var(--accent-cyan)] focus:ring-[rgba(100,255,218,0.2)]";
  const inputError = "border-red-500/50 focus:border-red-500 focus:ring-red-500/20";

  return (
    <SectionWrapper id="contact">
      <motion.div variants={itemVariants} className="mb-12 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-cyan)] mb-3 opacity-70">05 — Connect</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto">
          Have a project in mind or want to discuss opportunities? I&apos;d love
          to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Form */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-6 md:p-8">
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-8 text-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle size={48} className="text-[var(--accent-cyan)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Message Sent!
                </h3>
                <p className="text-[var(--text-muted)] text-sm">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-[var(--accent-cyan)] hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                    suppressHydrationWarning
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                    suppressHydrationWarning
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none`}
                    suppressHydrationWarning
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[var(--bg-primary)] border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </GlassCard>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants} className="space-y-4">
          {/* Status badge */}
          <GlassCard className="p-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-cyan)] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent-cyan)]" />
              </span>
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Open to opportunities
              </span>
            </div>
          </GlassCard>

          <GlassCard className="p-6 space-y-4">
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Contact Info
            </h3>
            {[
              {
                icon: MapPin,
                label: "Location",
                value: "Dhaka, Bangladesh",
                href: undefined,
              },
              {
                icon: Mail,
                label: "Email",
                value: "nahidhossainmd99@gmail.com",
                href: "mailto:nahidhossainmd99@gmail.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+880 1704788032",
                href: "tel:+8801704788032",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 p-1.5 rounded-md bg-[rgba(100,255,218,0.08)]">
                  <Icon size={14} className="text-[var(--accent-cyan)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--text-primary)]">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">
              Find me on
            </h3>
            <div className="flex gap-3">
              {[
                {
                  icon: Github,
                  label: "GitHub",
                  href: "https://github.com/nahid-10",
                  color: "hover:border-[rgba(100,255,218,0.4)] hover:text-[var(--accent-cyan)]",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/mdnahidhossain26/",
                  color: "hover:border-[rgba(59,130,246,0.4)] hover:text-[var(--accent-blue)]",
                },
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:nahidhossainmd99@gmail.com",
                  color: "hover:border-[rgba(168,85,247,0.4)] hover:text-[var(--accent-purple)]",
                },
              ].map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--text-muted)] transition-all duration-200 text-sm ${color}`}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
