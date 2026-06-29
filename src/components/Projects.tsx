/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FolderGit2, ArrowUpRight, Check } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-24 bg-navy-dark relative">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-electric-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-electric-cyan uppercase tracking-widest mb-3">
            <FolderGit2 size={14} />
            My Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            Featured Systems & Projects
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl font-light">
            An overview of enterprise-grade mobile platforms, real-time middleware bridges, and auditing automation engines.
          </p>
          <div className="w-16 h-1 bg-electric-cyan mt-4 mx-auto md:mx-0 rounded" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 border cursor-pointer ${
              selectedTag === null
                ? "bg-electric-cyan text-navy-dark border-electric-cyan font-semibold shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
            }`}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all duration-300 border flex items-center gap-1 cursor-pointer ${
                selectedTag === tag
                  ? "bg-electric-cyan text-navy-dark border-electric-cyan font-semibold shadow-[0_0_15px_rgba(0,212,255,0.2)]"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {selectedTag === tag && <Check size={12} className="stroke-[3]" />}
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid with Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-101 border border-slate-800/80 transition-transform duration-300 relative overflow-hidden group box-glow-cyan-hover"
              >
                {/* Subtle card grid effect on hover */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div>
                  {/* Card Header (Icon & Code Accents) */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl select-none" role="img" aria-label="Project Icon">
                      {project.icon}
                    </span>
                    
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">
                      System {idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-sans font-bold text-white tracking-tight group-hover:text-electric-cyan transition-colors duration-300 flex items-center gap-1.5">
                    {project.name}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed font-sans font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips Footer */}
                <div className="mt-8 pt-6 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded cursor-pointer transition-colors ${
                          selectedTag === tag
                            ? "bg-electric-cyan/30 text-electric-cyan border border-electric-cyan/50 font-semibold"
                            : "bg-cyan-500/10 text-electric-cyan/80 hover:text-white border border-transparent hover:border-electric-cyan/20"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state if filtered results are blank (though not possible here) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 font-mono">No projects found with tag: {selectedTag}</p>
          </div>
        )}

      </div>
    </section>
  );
}
