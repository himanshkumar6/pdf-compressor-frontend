import React, { useState, useRef, useEffect } from "react";
import SEO from "../components/SEO";
import { PAGES_SEO, buildWebAppJsonLd } from "../utils/seoData";
import { Mail, Send, CheckCircle, AlertCircle, Loader2, MapPin, ShieldCheck, RefreshCw } from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

// Environment variables should be set in your .env file
// VITE_EMAILJS_SERVICE_ID
// VITE_EMAILJS_TEMPLATE_ID
// VITE_EMAILJS_PUBLIC_KEY

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startTime = useRef<number>(Date.now());
  const seo = PAGES_SEO["/contact"];

  // Reset start time on mount & Run Diagnostics
  useEffect(() => {
    startTime.current = Date.now();

    // Diagnostic Logging for Production Debugging
    const envStatus = {
      ServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ? "✅ Loaded" : "❌ MISSING",
      TemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? "✅ Loaded" : "❌ MISSING",
      PublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✅ Loaded" : "❌ MISSING",
    };
    console.log("EmailJS Environment Status:", envStatus);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // 1. SPAM PROTECTION: Honeypot Check
    const formData = new FormData(e.target as HTMLFormElement);
    const honeypot = formData.get("website_url"); // Hidden field
    if (honeypot) {
      console.warn("Bot detected: Honeypot filled");
      toast.error("Error detected. Please try again.");
      return;
    }

    // 2. SPAM PROTECTION: Time-based Check (< 3 seconds)
    const timeElapsed = Date.now() - startTime.current;
    if (timeElapsed < 3000) {
      console.warn("Bot detected: Form submitted too quickly");
      toast.error("Please fill out the form carefully.");
      return;
    }

    setIsSubmitting(true);

    // 3. EmailJS Integration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Validate Environment Variables
    if (!serviceId || !templateId || !publicKey) {
      console.error("CRITICAL: EmailJS Configuration Missing. Check Vercel Environment Variables.");
      console.table({
        VITE_EMAILJS_SERVICE_ID: serviceId ? "OK" : "MISSING",
        VITE_EMAILJS_TEMPLATE_ID: templateId ? "OK" : "MISSING",
        VITE_EMAILJS_PUBLIC_KEY: publicKey ? "OK" : "MISSING"
      });

      setError("System configuration error: Email service not connected. Please contact support directly.");
      toast.error("Configuration error. Email failed.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Explicitly construct template parameters to avoid "recipient address empty" error
      // We pass multiple variations of email variables to ensure one of them matches the EmailJS template
      const templateParams = {
        // Form specific data
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        subject: formData.get("subject"),
        message: formData.get("message"),

        // Common variations for "To Email" or "Reply To" fields in templates
        email: formData.get("user_email"),      // Common default
        from_email: formData.get("user_email"), // Common default
        sender_email: formData.get("user_email"),
        to_email: formData.get("user_email"),
        reply_to: formData.get("user_email"),

        // Name variations
        from_name: formData.get("user_name"),
        to_name: "Himanshu", // Admin name

        // Meta info
        website_url: window.location.origin,
      };

      console.log("Sending EmailJS params:", { ...templateParams, message: "..." }); // Debug log

      // Verify recipient email is present
      if (!templateParams.user_email) {
        throw new Error("User email is missing from form data");
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSuccess(true);
      if (form.current) form.current.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.success("Message sent successfully!");

    } catch (err: unknown) {
      console.error("EmailJS Error:", err);

      let errorMessage = "Failed to send message. Please try again.";
      if (err instanceof Error && err.message) {
        errorMessage += ` (${err.message})`; // Add specific error message if available
      }

      setError(errorMessage);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setError(null);
    startTime.current = Date.now(); // Reset spam timer
  };

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title={seo.title}
        description={seo.description}
        canonical={seo.canonical}
        schema={buildWebAppJsonLd(seo)}
      />

      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Get in <span className="text-cyan-400">Touch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Have questions about our PDF tools? Found a bug?
          <br className="hidden md:block" />
          We'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 lg:col-span-1"
        >
          {/* Card 1: Direct Support */}
          <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-3xl hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Direct Support</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Hi, I'm Himanshu. I personally read and reply to all emails regarding this tool.
            </p>
            <a
              href="mailto:himanshucareer01@gmail.com"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 duration-300"
            >
              himanshucareer01@gmail.com
            </a>
          </div>

          {/* Card 2: Location */}
          <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-3xl hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400 mb-1">New Delhi, India</p>
            <div className="flex items-center text-sm text-gray-500 mt-4 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              Operational Hours: 10 AM - 8 PM IST
            </div>
          </div>

          {/* Trust Signal */}
          <div className="flex items-start p-4 border border-cyan-900/30 bg-cyan-950/10 rounded-2xl">
            <ShieldCheck className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 shrink-0" />
            <p className="text-sm text-cyan-200/80 leading-relaxed">
              <strong>Privacy Assurance:</strong> This form connects directly to my inbox. No data is stored on our servers. 100% Secure.
            </p>
          </div>
        </motion.div>

        {/* Contact Form Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="bg-gray-900/80 border border-gray-800 rounded-4xl p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-500" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">
                    Thank you for reaching out. I've received your message and will get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all font-medium border border-gray-700 flex items-center gap-2 mx-auto"
                  >
                    <RefreshCw className="w-4 h-4" /> Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 relative z-10"
                >
                  {/* Honeypot Field (Hidden) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url">Website URL</label>
                    <input type="text" name="website_url" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600"
                        placeholder="John Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600"
                        placeholder="john@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                      Subject
                    </label>
                    <select
                      name="subject"
                      id="subject"
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all appearance-none cursor-pointer"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" className="bg-gray-900">Select a topic...</option>
                      <option value="Support" className="bg-gray-900">Technical Support</option>
                      <option value="Feature Request" className="bg-gray-900">Feature Request</option>
                      <option value="Partnership" className="bg-gray-900">Partnership / Business</option>
                      <option value="Other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all placeholder:text-gray-600 resize-none"
                      placeholder="How can we help you today?"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start text-red-200 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
                      {error}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-cyan-900/20 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin relative z-10" />
                        <span className="relative z-10">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform relative z-10" />
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-600 mt-4">
                    Protected by spam filters. No CAPTCHA required.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
