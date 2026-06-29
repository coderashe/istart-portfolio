/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, Server, Database, Settings } from "lucide-react";
import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  // Map categories to an appropriate icon
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "mobile development":
        return <Cpu className="text-electric-cyan" size={20} />;
      case "backend & apis":
        return <Server className="text-electric-cyan" size={20} />;
      case "database & cloud tools":
        return <Database className="text-electric-cyan" size={20} />;
      default:
        return <Settings className="text-electric-cyan" size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-navy-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,212,255,0.03),transparent_40%)]" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <Cpu size={14} />
            Skills & Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Technical Proficiency
          </h2>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto md:mx-0 rounded" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card rounded-xl p-6 sm:p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800/60 flex items-center justify-center">
                  {getCategoryIcon(cat.title)}
                </div>
                <h3 className="text-lg font-sans font-semibold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-sans font-medium text-slate-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-electric-cyan font-semibold cyan-glow">
                        {skill.levelLabel}
                      </span>
                    </div>

                    {/* Immersive UI Sleek Progress Bar Track */}
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="skill-fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="mt-12 text-center text-xs font-mono text-slate-500 max-w-xl mx-auto leading-relaxed">
          *Proficiency levels represent hands-on commercial experience, system scaling capability, and technical autonomy in production systems.
        </div>

      </div>
    </section>
  );
}
