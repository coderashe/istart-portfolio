/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API form submission to Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Auto reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.02),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <MessageSquare size={14} />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto rounded" />
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-sans font-semibold text-white tracking-tight">
              Contact Channels
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-sans font-light">
              Whether you are looking to hire, discuss H2H integration problems, build robust Kotlin/Android apps, or just say hello, my inbox is always open.
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-electric-cyan/40 hover:scale-101 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electric-cyan group-hover:text-white group-hover:bg-electric-cyan transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Direct Email</p>
                  <p className="text-sm font-sans font-semibold text-white truncate">{personalInfo.email}</p>
                </div>
                <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-electric-cyan transition-colors" />
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-electric-cyan/40 hover:scale-101 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electric-cyan group-hover:text-white group-hover:bg-electric-cyan transition-all duration-300">
                  <Github size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">GitHub Profile</p>
                  <p className="text-sm font-sans font-semibold text-white truncate">github.com/simbastart001</p>
                </div>
                <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-electric-cyan transition-colors" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-electric-cyan/40 hover:scale-101 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electric-cyan group-hover:text-white group-hover:bg-electric-cyan transition-all duration-300">
                  <Linkedin size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Network</p>
                  <p className="text-sm font-sans font-semibold text-white truncate">linkedin.com/in/simba-start...</p>
                </div>
                <ExternalLink size={12} className="ml-auto text-slate-600 group-hover:text-electric-cyan transition-colors" />
              </a>

            </div>

            {/* Quick availability stats */}
            <div className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 font-mono text-xs text-slate-500 space-y-2">
              <div className="flex justify-between">
                <span>Working Hours:</span>
                <span className="text-slate-300">GMT +2 (Harare)</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time:</span>
                <span className="text-electric-cyan font-semibold">&lt; 24 Hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-xl p-6 sm:p-8 relative">
              
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xoqydvwa"
                method="POST"
                className="space-y-6"
              >
                {/* Embedded redirect / metadata for formspree */}
                <input type="hidden" name="_subject" value="Portfolio Contact Form Submission" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-cyan transition-colors font-sans"
                      placeholder="Simba Start"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-cyan transition-colors font-sans"
                      placeholder="simba@example.com"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-cyan transition-colors font-sans"
                    placeholder="Host-to-Host Integration / Flutter App Development"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase tracking-wider">Message Content</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electric-cyan transition-colors font-sans resize-none"
                    placeholder="Describe your system requirements or message..."
                  />
                </div>

                {/* Submit button */}
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-medium text-xs text-navy-dark bg-electric-cyan hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.2)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-navy-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={14} />
                        SendMessage
                      </>
                    )}
                  </button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-1.5 text-xs font-mono text-emerald-400"
                    >
                      <CheckCircle size={14} />
                      Message simulation successful!
                    </motion.div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>

        {/* Core Footer */}
        <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-slate-400">
          <div className="uppercase tracking-widest text-white/40">
            Designed & Built by <span className="text-electric-cyan font-semibold">iStart</span> © 2026
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-bold text-white/60 uppercase tracking-tighter">
            <div>BSc Information Systems</div>
            <div className="hidden sm:block w-px h-3 bg-white/20"></div>
            <div>Udacity Kotlin Developer</div>
            <div className="hidden sm:block w-px h-3 bg-white/20"></div>
            <div>Google PM Certified</div>
          </div>
        </div>

      </div>
    </section>
  );
}
