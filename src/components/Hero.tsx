/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Mail, Download, Github, Linkedin, Briefcase } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    "Software Engineer",
    "Kotlin & Android Specialist",
    "Flutter Mobile Developer",
    ".NET Backend Developer",
    "Spring Boot & Integration Architect",
    "Host-to-Host Banking Integrator"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 2000;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullPhrase = phrases[phraseIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypedText((prev) => currentFullPhrase.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && typedText === currentFullPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenPhrases);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-dark overflow-hidden pt-20"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.08),rgba(255,255,255,0))]" />
      
      {/* Particle Canvas */}
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-[rgba(0,212,255,0.3)] bg-opacity-40 text-xs font-mono text-electric-cyan mb-8 tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse-cyan" />
          Open to Remote (US / EMEA / APAC)
        </motion.div>

        {/* Developer Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Animated Typewriter Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <p className="text-xl sm:text-2xl font-mono font-medium text-electric-cyan tracking-wide">
            {typedText}
            <span className="inline-block w-1.5 h-6 ml-1 bg-electric-cyan animate-[pulse_1s_infinite]" />
          </p>
        </motion.div>

        {/* Skills Tag Cloud */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm font-mono text-slate-400 mb-8 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed"
        >
          Kotlin • Flutter • .NET • Spring Boot
        </motion.p>

        {/* Tagline Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 text-navy-dark bg-electric-cyan hover:bg-opacity-90 shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:scale-102 cursor-pointer"
          >
            <Briefcase size={16} />
            View My Work
          </button>
          
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 text-white bg-slate-900 border border-slate-700 hover:border-electric-cyan hover:text-electric-cyan hover:bg-slate-850 cursor-pointer"
          >
            <Mail size={16} />
            Let's Connect
          </a>

          <a
            href="#cv-download-placeholder"
            onClick={(e) => {
              e.preventDefault();
              alert("CV Download placeholder: Simbarashe's CV is available upon request via simbastart.dev@gmail.com!");
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 text-slate-400 hover:text-white hover:border-slate-500 border border-transparent cursor-pointer"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>

        {/* Scrolling indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="flex flex-col items-center justify-center gap-1 opacity-60 text-xs font-mono text-slate-500 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
