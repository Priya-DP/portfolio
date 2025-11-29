"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Globe,
  MessageCircle,
  Heart,
  Sparkles,
} from "lucide-react";
import { submitContactForm } from "@/app/action/contact";
import { contactFormSchema, ContactFormData } from "@/lib/validation/contact";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Priya-DP",
    icon: Github,
    color: "hover:bg-gray-900 hover:text-white",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/priyavenkatesan41/",
    icon: Linkedin,
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    name: "Email",
    url: "mailto:priyavenkatesan41@gmail.com",
    icon: Mail,
    color: "hover:bg-red-500 hover:text-white",
  },
  {
    name: "Website",
    url: "https://www.codedbydevi.site/",
    icon: Globe,
    color: "hover:bg-green-600 hover:text-white",
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate individual field on blur
    const fieldValue = formData[name as keyof ContactFormData];
    if (fieldValue) {
      const fieldSchema = contactFormSchema.pick({ [name]: true });
      const result = fieldSchema.safeParse({ [name]: fieldValue });

      if (!result.success) {
        setErrors((prev) => ({
          ...prev,
          [name]: result.error.issues[0].message,
        }));
      }
    }
  };

  const validateForm = (): boolean => {
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          newErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(newErrors);

      // Mark all fields as touched to show errors
      setTouched({
        name: true,
        email: true,
        subject: true,
        message: true,
      });

      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0];
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        element?.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!validateForm()) {
      setIsSubmitting(false);
      toast.error("Please fix the errors in the form before submitting.");
      return;
    }

    try {
      // Submit to server action
      const result = await submitContactForm(formData);

      if (result.success) {
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        setTouched({});

        // Show success toast
        toast.success(
          "🎉 Message sent successfully! I'll get back to you soon."
        );
      } else {
        // Show server errors
        if (result.errors) {
          setErrors(
            result.errors as Partial<Record<keyof ContactFormData, string>>
          );
        }
        toast.error(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to check if field should show error
  const shouldShowError = (field: keyof ContactFormData): boolean => {
    return !!touched[field] && !!errors[field];
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        className="mt-16"
      />

      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-dark-900 dark:via-dark-800/50 dark:to-dark-900" />
      <div className="absolute inset-0 bg-grid opacity-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircle className="w-8 h-8 text-primary-500" />
            <h2 className="text-4xl md:text-6xl font-bold">
              Get In{" "}
              <span className="bg-gradient-to-r from-primary-500 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <MessageCircle className="w-8 h-8 text-primary-500" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to start a project or just want to chat? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div className="glass-card dark:glass-card-dark p-8 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a friendly chat about technology and
                development.
              </p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card dark:glass-card-dark p-6 rounded-xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-lg">
                      Email
                    </p>
                    <a
                      href="mailto:priyavenkatesan41@gmail.com"
                      className="text-primary-600 dark:text-primary-400 hover:underline text-lg"
                    >
                      priyavenkatesan41@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-card dark:glass-card-dark p-6 rounded-xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-lg">
                      Phone
                    </p>
                    <a
                      href="tel:+918072283302"
                      className="text-primary-600 dark:text-primary-400 hover:underline text-lg"
                    >
                      +91 8072283302
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass-card dark:glass-card-dark p-6 rounded-xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-lg">
                      Location
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="glass-card dark:glass-card-dark p-8 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50"
            >
              <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 glass-card dark:glass-card-dark rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 border border-white/20 dark:border-dark-600/50 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl ${social.color}`}
                  >
                    <social.icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card dark:glass-card-dark p-10 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 dark:border-dark-600/50"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
              <Send className="w-8 h-8 text-primary-500" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label
                  htmlFor="name"
                  className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-dark-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 ${
                    shouldShowError("name")
                      ? "border-red-500 dark:border-red-400 ring-2 ring-red-500/20"
                      : "border-gray-300/50 dark:border-dark-600/50"
                  }`}
                  placeholder="Enter your full name"
                />
                {shouldShowError("name") && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-dark-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 ${
                    shouldShowError("email")
                      ? "border-red-500 dark:border-red-400 ring-2 ring-red-500/20"
                      : "border-gray-300/50 dark:border-dark-600/50"
                  }`}
                  placeholder="Enter your email address"
                />
                {shouldShowError("email") && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>⚠</span> {errors.email}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label
                  htmlFor="subject"
                  className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-dark-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm placeholder-gray-500 dark:placeholder-gray-400 ${
                    shouldShowError("subject")
                      ? "border-red-500 dark:border-red-400 ring-2 ring-red-500/20"
                      : "border-gray-300/50 dark:border-dark-600/50"
                  }`}
                  placeholder="What's this about?"
                />
                {shouldShowError("subject") && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>⚠</span> {errors.subject}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label
                  htmlFor="message"
                  className="block text-base font-semibold text-gray-700 dark:text-gray-300 mb-3"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                  required
                  rows={6}
                  className={`w-full px-6 py-4 border rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50 dark:bg-dark-800/50 text-gray-900 dark:text-white transition-all duration-300 backdrop-blur-sm resize-none placeholder-gray-500 dark:placeholder-gray-400 ${
                    shouldShowError("message")
                      ? "border-red-500 dark:border-red-400 ring-2 ring-red-500/20"
                      : "border-gray-300/50 dark:border-dark-600/50"
                  }`}
                  placeholder="Tell me about your project, questions, or anything you'd like to discuss..."
                />
                {shouldShowError("message") && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span>⚠</span> {errors.message}
                  </p>
                )}
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full button-primary text-lg py-4 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-primary-500/25 hover:shadow-3xl transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                * Required fields
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
