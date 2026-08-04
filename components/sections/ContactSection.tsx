"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/action/contact";
import Tilt3DCard from "@/components/3d/Tilt3DCard";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    success: boolean;
    text: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("devipriyav98@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setStatusMessage({
          success: true,
          text: res.message || "Message sent successfully!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage({
          success: false,
          text: res.message || "Failed to send message.",
        });
      }
    } catch (err) {
      setStatusMessage({
        success: false,
        text: "An error occurred while submitting.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-[#030712] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 text-purple-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight font-outfit text-white mb-6"
          >
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">Extraordinary</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & Copy Tool */}
          <div className="lg:col-span-5 space-y-6">
            <Tilt3DCard maxDegree={8}>
              <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-6">
                <h3 className="text-2xl font-bold text-white font-outfit">Contact Information</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Have a project in mind, an open full-stack role, or want to collaborate on innovative 3D web applications? Send a message directly!
                </p>

                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-2xl border border-cyan-500/30 bg-cyan-950/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-xs font-mono text-gray-400">Email Address</span>
                      <p className="font-mono text-cyan-300 text-sm truncate font-semibold">
                        devipriyav98@gmail.com
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl border border-cyan-400/40 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all shrink-0 ml-2"
                    title="Copy Email Address"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center space-x-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.01]">
                    <div className="p-2.5 rounded-lg bg-purple-500/20 text-purple-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-gray-400">Location</span>
                      <p className="text-white text-sm font-medium">Chennai, India (Available for Remote worldwide)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Cyberpunk Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-gray-300 mb-2 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Devipriya"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-gray-300 mb-2 uppercase">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-2 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-gray-300 mb-2 uppercase">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or team..."
                    className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono text-sm resize-none"
                  />
                </div>

                {/* Status Feedback Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-sm font-medium flex items-center gap-3 ${
                      statusMessage.success
                        ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300"
                        : "bg-rose-950/60 border border-rose-500/40 text-rose-300"
                    }`}
                  >
                    {statusMessage.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                    <span>{statusMessage.text}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.7)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? "Transmitting Message..." : "Transmit Message"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
