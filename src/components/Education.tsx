/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import { educationAndCertifications } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-navy-dark relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <GraduationCap size={14} />
            Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto md:mx-0 rounded" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {educationAndCertifications.map((item, idx) => {
            const isDegree = item.id === "edu-degree";
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-electric-cyan/40 hover:scale-101 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Label */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electric-cyan">
                      {isDegree ? <GraduationCap size={20} /> : <Award size={20} />}
                    </div>
                    
                    <div className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar size={12} />
                      {item.year}
                    </div>
                  </div>

                  {/* Title / Name */}
                  <h3 className="text-lg font-sans font-bold text-white tracking-tight leading-snug">
                    {item.degree}
                  </h3>
                  
                  {/* Institution */}
                  <p className="text-sm text-electric-cyan font-mono mt-1">
                    {item.institution}
                  </p>

                  {/* Details paragraph */}
                  {item.details && (
                    <p className="text-slate-400 text-sm mt-3 font-sans font-light leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </div>

                {/* Subfooter (verification tag) */}
                <div className="mt-6 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Credential ID: VERIFIED</span>
                  <ExternalLink size={12} className="opacity-40" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
