/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { experienceTimeline } from "../data/portfolioData";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-navy-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,212,255,0.03),transparent_40%)]" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <Briefcase size={14} />
            Professional Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Work Experience Timeline
          </h2>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto rounded" />
        </div>

        {/* Timeline Structure */}
        <div className="relative">
          
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-electric-cyan/60 via-slate-800 to-slate-900 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {experienceTimeline.map((job, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={job.id}
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer spacer to balance layout on large screens */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Sleek Node Dot matching Immersive UI */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full bg-[#0A0F1E] border-2 border-electric-cyan flex items-center justify-center -translate-x-1/2 z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-cyan animate-pulse-cyan" />
                  </div>

                  {/* Main Event Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-card rounded-xl p-6 sm:p-8 hover:border-electric-cyan/40 transition-colors duration-300 relative box-glow-cyan">
                      {/* Timeline pointer triangle */}
                      <div
                        className={`absolute top-5 w-3 h-3 bg-slate-900 border-slate-800 border-t border-l rotate-45 hidden md:block ${
                          isEven
                            ? "-left-1.5 border-r border-b border-t-0 border-l-0"
                            : "-right-1.5"
                        }`}
                      />

                      {/* Header info */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                        <div>
                          <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                            {job.role}
                          </h3>
                          <p className="text-sm font-semibold text-electric-cyan font-sans mt-0.5">
                            {job.company}
                          </p>
                        </div>
                        
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-400 font-mono text-xs max-w-fit">
                          <Calendar size={12} />
                          {job.period}
                        </div>
                      </div>

                      {/* Bullet Description */}
                      <ul className="space-y-3">
                        {job.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed font-sans font-light">
                            <ChevronRight size={14} className="text-electric-cyan mt-1 shrink-0 stroke-[2.5]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
