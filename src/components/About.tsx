/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { User, MapPin, Terminal, Cpu, Award, Globe } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-navy-dark relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-electric-cyan/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <User size={14} />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Professional Profile
          </h2>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto md:mx-0 rounded" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech Identity Box (Glassmorphism) */}
          <div className="md:col-span-5">
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden box-glow-cyan"
            >
              {/* Grid backdrop pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              <div className="relative z-10">
                {/* Tech Avatar Placeholder / Styled Initials */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-[rgba(0,212,255,0.3)] flex items-center justify-center text-electric-cyan text-xl font-mono font-bold mb-6 glow-cyan">
                  SSM
                </div>

                <h3 className="text-xl font-sans font-semibold text-white mb-1">
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-mono text-electric-cyan mb-6">
                  &lt;Software_Engineer /&gt;
                </p>

                {/* Tech stats and telemetry */}
                <div className="space-y-4 border-t border-slate-800/80 pt-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-electric-cyan shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-mono">LOCATION</p>
                      <p className="text-slate-300">Harare, Zimbabwe</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Globe size={16} className="text-electric-cyan shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-mono">COORDINATES</p>
                      <p className="text-slate-300 font-mono">17.8252° S, 31.0335° E</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Terminal size={16} className="text-electric-cyan shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-mono">EXPERIENCE</p>
                      <p className="text-slate-300">5+ Years Professional</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <Cpu size={16} className="text-electric-cyan shrink-0" />
                    <div>
                      <p className="text-xs text-slate-500 font-mono">FOCUS AREAS</p>
                      <p className="text-slate-300">Mobile Apps & Banking APIs</p>
                    </div>
                  </div>
                </div>

                {/* Highlights inside card */}
                <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
                    <div className="text-lg font-bold text-white font-mono">5+</div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Years Exp</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/50">
                    <div className="text-lg font-bold text-white font-mono">100%</div>
                    <div className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Reliable</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Statement */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-2xl font-sans font-semibold text-white tracking-tight">
              Bridging the gap between beautiful client applications and bulletproof backend integrations.
            </h3>
            
            <p className="text-slate-300 leading-relaxed text-base">
              I am a results-driven Software Engineer with a deep passion for high-performance mobile and web ecosystems. Over the last 5 years, I've specialized in building robust Android products and enterprise-grade backend infrastructure.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              My engineering portfolio covers critical real-world systems: I have architected <strong>Host-to-Host banking integrations</strong> for top-tier institutions like <strong>Ecobank</strong> and <strong>FBC Bank</strong>, built complex SAP API services, and integrated point-of-sale systems with <strong>ZIMRA's Fiscal Device Management System (FDMS)</strong> for tax compliance.
            </p>

            <p className="text-slate-300 leading-relaxed text-base">
              Whether coding elegant user journeys in Kotlin/Dart or structuring bulletproof, high-concurrency API integrations in C#/.NET or Spring Boot, my goal remains the same: writing clean, maintainable, and type-safe code that delivers direct, measurable business value.
            </p>

            {/* Quick credentials bullet cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex gap-3 items-start">
                <Award size={18} className="text-electric-cyan mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Fintech Middleware Expert</h4>
                  <p className="text-xs text-slate-400 mt-1">Host-to-Host processing & automated banking reconciliation.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Award size={18} className="text-electric-cyan mt-1 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Capability</h4>
                  <p className="text-xs text-slate-400 mt-1">Combining fluid mobile experience with high-volume servers.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
