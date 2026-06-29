/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Download, Copy, Check, FileCode, Sparkles, X, Terminal } from "lucide-react";

export default function ExportSingleFile() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const singleFileHtmlCode = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simbarashe Start Marindwa | Software Engineer Portfolio</title>
  
  <!-- Google Fonts: Inter & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS Play CDN (No Build Required) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            electricCyan: '#00D4FF',
            navyDark: '#080B10',
            navyCard: 'rgba(13, 20, 32, 0.65)',
            navyBorder: 'rgba(0, 212, 255, 0.1)',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #080b10;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 212, 255, 0.2);
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 212, 255, 0.4);
    }

    /* Glow utilities */
    .glow-cyan {
      text-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.2);
    }
    .box-glow-cyan {
      box-shadow: 0 0 15px rgba(0, 212, 255, 0.1), inset 0 0 15px rgba(0, 212, 255, 0.05);
    }
    .box-glow-cyan-hover:hover {
      box-shadow: 0 0 25px rgba(0, 212, 255, 0.3), inset 0 0 10px rgba(0, 212, 255, 0.05);
      border-color: rgba(0, 212, 255, 0.4);
    }

    /* Glassmorphism Card */
    .glass-card {
      background: rgba(13, 20, 32, 0.65);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(0, 212, 255, 0.1);
    }

    /* Pulse cyan dot animation */
    @keyframes pulse-cyan {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    .animate-pulse-cyan {
      animation: pulse-cyan 2s infinite;
    }

    /* Fade / slide scroll reveals */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }

    /* Typing cursor animation */
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .typing-cursor {
      animation: blink 1s infinite;
    }
  </style>
</head>
<body class="bg-navyDark text-slate-200 overflow-x-hidden font-sans">

  <!-- Floating Canvas Background -->
  <div class="relative min-h-screen">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.08),rgba(255,255,255,0))]"></div>
    <canvas id="particleCanvas" class="absolute inset-0 w-full h-full pointer-events-none block opacity-70"></canvas>

    <!-- Header Navigation -->
    <header class="fixed top-0 left-0 w-full z-50 glass-card border-b border-white/5 backdrop-blur-md">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" class="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1.5 hover:text-electricCyan transition-colors">
          <span class="text-electricCyan">&lt;</span>iStart<span class="text-electricCyan">/&gt;</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
          <a href="#about" class="hover:text-electricCyan transition-colors">ABOUT</a>
          <a href="#skills" class="hover:text-electricCyan transition-colors">SKILLS</a>
          <a href="#projects" class="hover:text-electricCyan transition-colors">PROJECTS</a>
          <a href="#experience" class="hover:text-electricCyan transition-colors">EXPERIENCE</a>
          <a href="#education" class="hover:text-electricCyan transition-colors">EDUCATION</a>
          <a href="#contact" class="hover:text-electricCyan transition-colors px-4 py-2 rounded border border-electricCyan/20 bg-electricCyan/5">CONNECT</a>
        </nav>

        <!-- Mobile Hamburg Toggler -->
        <button id="menuToggler" class="md:hidden text-slate-400 hover:text-white focus:outline-none" aria-label="Toggle navigation menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path id="menuIcon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      <!-- Mobile Dropdown Panel -->
      <div id="mobileMenu" class="hidden md:hidden absolute top-16 left-0 w-full bg-navyDark/95 border-b border-slate-800 p-6 flex flex-col gap-4 font-mono text-sm tracking-wide text-center">
        <a href="#about" class="mobile-link hover:text-electricCyan transition-colors py-2">ABOUT</a>
        <a href="#skills" class="mobile-link hover:text-electricCyan transition-colors py-2">SKILLS</a>
        <a href="#projects" class="mobile-link hover:text-electricCyan transition-colors py-2">PROJECTS</a>
        <a href="#experience" class="mobile-link hover:text-electricCyan transition-colors py-2">EXPERIENCE</a>
        <a href="#education" class="mobile-link hover:text-electricCyan transition-colors py-2">EDUCATION</a>
        <a href="#contact" class="mobile-link hover:text-electricCyan transition-colors py-2 text-electricCyan border border-electricCyan/20 rounded py-2 mt-2">CONNECT</a>
      </div>
    </header>

    <!-- 1. HERO SECTION -->
    <section id="home" class="min-h-screen flex items-center justify-center pt-20 px-6">
      <div class="max-w-4xl w-full text-center relative z-10">
        <!-- Availability Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 border border-electricCyan/30 text-xs font-mono text-electricCyan mb-8 tracking-wider uppercase">
          <span class="w-2 h-2 rounded-full bg-electricCyan animate-pulse-cyan"></span>
          Open to Remote (US / EMEA / APAC)
        </div>

        <h1 class="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-white mb-4">
          Simbarashe Start Marindwa
        </h1>

        <!-- Typewriter Container -->
        <div class="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p id="typewriterText" class="text-xl sm:text-2xl font-mono font-medium text-electricCyan tracking-wide"></p>
          <span class="typing-cursor inline-block w-1.5 h-6 ml-1 bg-electricCyan"></span>
        </div>

        <p class="text-sm font-mono text-slate-400 mb-8 uppercase tracking-widest leading-relaxed">
          Kotlin • Flutter • .NET • Spring Boot
        </p>

        <p class="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-sans font-light leading-relaxed">
          Building high-performance mobile apps and enterprise backend integrations that power real-world financial systems
        </p>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a href="#projects" class="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 text-navyDark bg-electricCyan hover:bg-opacity-90 shadow-[0_0_20px_rgba(0,212,255,0.25)]">
            View My Work
          </a>
          <a href="#contact" class="w-full sm:w-auto px-8 py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 text-white bg-slate-900 border border-slate-700 hover:border-electricCyan hover:text-electricCyan">
            Let's Connect
          </a>
          <button onclick="alert('Simbarashe\\'s CV is available upon request via simbastart.dev@gmail.com!')" class="w-full sm:w-auto px-6 py-3.5 rounded-lg font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1.5 text-slate-400 hover:text-white">
            Download CV
          </button>
        </div>

        <div class="flex flex-col items-center justify-center gap-1 opacity-60 text-xs font-mono text-slate-500">
          <span>Scroll to explore</span>
          <svg class="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
        </div>
      </div>
    </section>
  </div>

  <!-- 2. ABOUT ME SECTION -->
  <section id="about" class="py-24 bg-navyDark relative reveal">
    <div class="absolute top-0 right-0 w-80 h-80 bg-electricCyan/5 rounded-full filter blur-[100px] pointer-events-none"></div>
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="mb-16 text-center md:text-left">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>About Me<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Professional Profile</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto md:mx-0 rounded"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        <!-- Tech Stats Box -->
        <div class="md:col-span-5">
          <div class="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden box-glow-cyan">
            <div class="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-electricCyan/30 flex items-center justify-center text-electricCyan text-xl font-mono font-bold mb-6 glow-cyan">
                SSM
              </div>

              <h3 class="text-xl font-sans font-semibold text-white mb-1">Simbarashe Start Marindwa</h3>
              <p class="text-sm font-mono text-electricCyan mb-6">&lt;Software_Engineer /&gt;</p>

              <div class="space-y-4 border-t border-slate-850 pt-6">
                <div class="flex items-center gap-3 text-sm">
                  <span class="text-electricCyan font-mono">📍</span>
                  <div>
                    <p class="text-xs text-slate-500 font-mono">LOCATION</p>
                    <p class="text-slate-300">Harare, Zimbabwe</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 text-sm">
                  <span class="text-electricCyan font-mono">🌐</span>
                  <div>
                    <p class="text-xs text-slate-500 font-mono">COORDINATES</p>
                    <p class="text-slate-300 font-mono">17.8252° S, 31.0335° E</p>
                  </div>
                </div>

                <div class="flex items-center gap-3 text-sm">
                  <span class="text-electricCyan font-mono">⚡</span>
                  <div>
                    <p class="text-xs text-slate-500 font-mono">EXPERIENCE</p>
                    <p class="text-slate-300">5+ Years Professional</p>
                  </div>
                </div>
              </div>

              <div class="mt-8 grid grid-cols-2 gap-4 text-center">
                <div class="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div class="text-lg font-bold text-white font-mono">5+</div>
                  <div class="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Years Exp</div>
                </div>
                <div class="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div class="text-lg font-bold text-white font-mono">100%</div>
                  <div class="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Reliable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bio Paragraphs -->
        <div class="md:col-span-7 space-y-6">
          <h3 class="text-2xl font-sans font-semibold text-white tracking-tight">
            Bridging the gap between beautiful client applications and bulletproof backend integrations.
          </h3>
          <p class="text-slate-300 leading-relaxed text-base">
            Software Engineer with 5+ years of experience specializing in Android development and enterprise backend integrations. Strong foundation in Kotlin and Flutter for mobile, and C#/.NET and Java Spring Boot for backend.
          </p>
          <p class="text-slate-300 leading-relaxed text-base">
            Built Host-to-Host banking integrations (Ecobank, FBC Bank) and SAP REST API layers at Delta Corporation Zimbabwe. Passionate about bridging mobile experiences with robust backend systems.
          </p>
          <p class="text-slate-300 leading-relaxed text-base">
            Based in Harare, Zimbabwe — open to remote (US/EMEA/APAC) working arrangements.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- 3. SKILLS SECTION -->
  <section id="skills" class="py-24 bg-slate-950 relative reveal">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,212,255,0.03),transparent_40%)]"></div>
    <div class="max-w-6xl mx-auto px-6 relative z-10">
      
      <div class="mb-16 text-center md:text-left">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>Skills & Stack<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Technical Proficiency</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto md:mx-0 rounded"></div>
      </div>

      <!-- Grid mapping each category -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Mobile Dev -->
        <div class="glass-card rounded-xl p-6 sm:p-8">
          <h3 class="text-lg font-sans font-semibold text-white mb-6 flex items-center gap-2">
            <span class="text-electricCyan">📱</span> Mobile Development
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Kotlin (Android)</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Expert</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 98%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Flutter (Dart)</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Advanced</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 85%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend & APIs -->
        <div class="glass-card rounded-xl p-6 sm:p-8">
          <h3 class="text-lg font-sans font-semibold text-white mb-6 flex items-center gap-2">
            <span class="text-electricCyan">⚙️</span> Backend & APIs
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">C# / .NET / Web API</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Proficient</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 90%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Java (Spring Boot)</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Proficient</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 82%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">RESTful API Development</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Advanced</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 92%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Databases -->
        <div class="glass-card rounded-xl p-6 sm:p-8">
          <h3 class="text-lg font-sans font-semibold text-white mb-6 flex items-center gap-2">
            <span class="text-electricCyan">🗄️</span> Database & Cloud Tools
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">SQL Server</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Proficient</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 85%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Firebase</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Proficient</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 85%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Docker / Azure</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Intermediate</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 72%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div class="glass-card rounded-xl p-6 sm:p-8">
          <h3 class="text-lg font-sans font-semibold text-white mb-6 flex items-center gap-2">
            <span class="text-electricCyan">🛠️</span> Tools & Practices
          </h3>
          <div class="space-y-6">
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Git / GitHub</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Advanced</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 90%"></div>
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex justify-between items-center text-sm">
                <span class="text-slate-300">Postman</span>
                <span class="font-mono text-xs text-electricCyan font-semibold">Proficient</span>
              </div>
              <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                <div class="h-full bg-electricCyan rounded-full box-glow-cyan" style="width: 88%"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 4. PROJECTS SECTION -->
  <section id="projects" class="py-24 bg-navyDark relative reveal">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="mb-16 text-center md:text-left">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>My Projects<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Featured Systems</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto md:mx-0 rounded"></div>
      </div>

      <!-- Tag Filters -->
      <div class="flex flex-wrap gap-2 mb-12" id="filterContainer">
        <button onclick="filterProjects('all')" class="project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-electricCyan text-navyDark font-semibold border border-electricCyan shadow-[0_0_15px_rgba(0,212,255,0.2)]">All Systems</button>
        <button onclick="filterProjects('Kotlin')" class="project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200">Kotlin</button>
        <button onclick="filterProjects('.NET')" class="project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200">.NET</button>
        <button onclick="filterProjects('Spring Boot')" class="project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200">Spring Boot</button>
        <button onclick="filterProjects('ZIMRA')" class="project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200">ZIMRA</button>
      </div>

      <!-- Grid Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projectsGrid">
        
        <!-- Project 1 -->
        <div class="project-card glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative box-glow-cyan-hover" data-tags="C# .NET REST API Banking Integration">
          <div>
            <div class="flex justify-between items-start mb-6">
              <span class="text-4xl">🏦</span>
              <span class="text-[10px] font-mono text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">System 1</span>
            </div>
            <h3 class="text-xl font-sans font-bold text-white">Global Banking Bridge</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed font-light">
              Middleware platform enabling real-time Host-to-Host transaction processing between enterprise banking systems (Ecobank, FBC Bank) and SAP. Handles high-volume financial transactions with automated reconciliation.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#C#</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#.NET</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#REST API</span>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative box-glow-cyan-hover" data-tags="Kotlin Spring Boot Firebase SQL Server">
          <div>
            <div class="flex justify-between items-start mb-6">
              <span class="text-4xl">📱</span>
              <span class="text-[10px] font-mono text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">System 2</span>
            </div>
            <h3 class="text-xl font-sans font-bold text-white">Cross-Platform POS System</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed font-light">
              Offline-first point-of-sale system built with Kotlin and Firebase, featuring real-time sync, high-concurrency invoicing, and stock control. Backend powered by Spring Boot.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Kotlin</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Spring Boot</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Firebase</span>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative box-glow-cyan-hover" data-tags="Kotlin Spring Boot SQL Server ZIMRA">
          <div>
            <div class="flex justify-between items-start mb-6">
              <span class="text-4xl">⚙️</span>
              <span class="text-[10px] font-mono text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">System 3</span>
            </div>
            <h3 class="text-xl font-sans font-bold text-white">AXIMOS ERP</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed font-light">
              Mobile-first fiscalized ERP system with full ZIMRA compliance. Designed for field use with offline capabilities and real-time data sync.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Kotlin</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Spring Boot</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#ZIMRA</span>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="project-card glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative box-glow-cyan-hover" data-tags="AI Power BI Azure SAP Integration">
          <div>
            <div class="flex justify-between items-start mb-6">
              <span class="text-4xl">🤖</span>
              <span class="text-[10px] font-mono text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">System 4</span>
            </div>
            <h3 class="text-xl font-sans font-bold text-white">Smart Analytics Bot</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed font-light">
              AI-powered conversational BI assistant deployed to Microsoft Teams. Surfaces SAP purchase order price anomalies and reduces ad-hoc reporting requests by 30%.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#AI</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Power BI</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#SAP</span>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="project-card glass-card rounded-xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative box-glow-cyan-hover" data-tags="Python Power BI Automation ZIMRA">
          <div>
            <div class="flex justify-between items-start mb-6">
              <span class="text-4xl">🧾</span>
              <span class="text-[10px] font-mono text-slate-600 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">System 5</span>
            </div>
            <h3 class="text-xl font-sans font-bold text-white">ZIMRA Fiscal Scraper</h3>
            <p class="text-slate-400 text-sm mt-3 leading-relaxed font-light">
              Python automation tool for real-time invoice validation and auditing against ZIMRA fiscal device data, feeding results into a Power BI dashboard.
            </p>
          </div>
          <div class="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5">
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Python</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#Automation</span>
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-500 border border-slate-850">#ZIMRA</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 5. EXPERIENCE TIMELINE -->
  <section id="experience" class="py-24 bg-slate-950 relative reveal">
    <div class="max-w-5xl mx-auto px-6 relative z-10">
      
      <div class="mb-20 text-center">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>Experience Timeline<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Professional Journey</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto rounded"></div>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative">
        <div class="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-electricCyan via-slate-850 to-slate-900 -translate-x-1/2"></div>
        <div class="space-y-16">
          
          <!-- Item 1 -->
          <div class="flex flex-col md:flex-row relative items-stretch">
            <div class="hidden md:block md:w-1/2"></div>
            <div class="absolute left-4 md:left-1/2 top-4 w-8 h-8 rounded-full bg-slate-950 border-2 border-electricCyan flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              <span class="text-electricCyan font-bold text-xs">💼</span>
            </div>
            <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div class="glass-card rounded-xl p-6 sm:p-8 hover:border-electricCyan/40 transition-colors duration-300 relative box-glow-cyan">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 class="text-xl font-sans font-bold text-white">Software Developer</h3>
                    <p class="text-sm font-semibold text-electricCyan">Delta Corporation Zimbabwe</p>
                  </div>
                  <div class="inline-flex items-center gap-1 px-3 py-1 rounded bg-slate-900 text-slate-400 font-mono text-xs">Jan 2026 – Present</div>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Engineered H2H banking integrations with Ecobank and FBC Bank</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Built SAP REST API layers in C# .NET</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Deployed AI analytics agents reducing ad-hoc reporting by 30%</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Automated reporting workflows, reducing manual effort by 40%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="flex flex-col md:flex-row relative items-stretch md:flex-row-reverse">
            <div class="hidden md:block md:w-1/2"></div>
            <div class="absolute left-4 md:left-1/2 top-4 w-8 h-8 rounded-full bg-slate-950 border-2 border-electricCyan flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              <span class="text-electricCyan font-bold text-xs">💼</span>
            </div>
            <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div class="glass-card rounded-xl p-6 sm:p-8 hover:border-electricCyan/40 transition-colors duration-300 relative box-glow-cyan">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 class="text-xl font-sans font-bold text-white">Software Engineer</h3>
                    <p class="text-sm font-semibold text-electricCyan">iPOS Mobile Systems (Remote Contract)</p>
                  </div>
                  <div class="inline-flex items-center gap-1 px-3 py-1 rounded bg-slate-900 text-slate-400 font-mono text-xs">Jun 2024 – Sep 2025</div>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Built cross-platform POS system (Kotlin, Firebase, Spring Boot)</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Designed high-concurrency backend services for invoicing and stock control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="flex flex-col md:flex-row relative items-stretch">
            <div class="hidden md:block md:w-1/2"></div>
            <div class="absolute left-4 md:left-1/2 top-4 w-8 h-8 rounded-full bg-slate-950 border-2 border-electricCyan flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              <span class="text-electricCyan font-bold text-xs">💼</span>
            </div>
            <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div class="glass-card rounded-xl p-6 sm:p-8 hover:border-electricCyan/40 transition-colors duration-300 relative box-glow-cyan">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 class="text-xl font-sans font-bold text-white">Senior Software Developer</h3>
                    <p class="text-sm font-semibold text-electricCyan">Axis Solutions</p>
                  </div>
                  <div class="inline-flex items-center gap-1 px-3 py-1 rounded bg-slate-900 text-slate-400 font-mono text-xs">Oct 2022 – Jan 2024</div>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Integrated ERP systems with ZIMRA FDMS for fiscal compliance</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Optimized SQL Server performance by 25%</span>
                  </li>
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Developed Python automation tools for invoice validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="flex flex-col md:flex-row relative items-stretch md:flex-row-reverse">
            <div class="hidden md:block md:w-1/2"></div>
            <div class="absolute left-4 md:left-1/2 top-4 w-8 h-8 rounded-full bg-slate-950 border-2 border-electricCyan flex items-center justify-center -translate-x-1/2 z-20 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              <span class="text-electricCyan font-bold text-xs">💼</span>
            </div>
            <div class="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div class="glass-card rounded-xl p-6 sm:p-8 hover:border-electricCyan/40 transition-colors duration-300 relative box-glow-cyan">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <h3 class="text-xl font-sans font-bold text-white">Technical Project Manager</h3>
                    <p class="text-sm font-semibold text-electricCyan">Innet Technologies</p>
                  </div>
                  <div class="inline-flex items-center gap-1 px-3 py-1 rounded bg-slate-900 text-slate-400 font-mono text-xs">Jan 2020 – Mar 2021</div>
                </div>
                <ul class="space-y-3">
                  <li class="flex items-start gap-2 text-sm text-slate-300 leading-relaxed font-light">
                    <span class="text-electricCyan mt-1 shrink-0">▸</span>
                    <span>Led HR management system delivery using Agile / Scrum methodologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- 6. EDUCATION & CERTIFICATIONS -->
  <section id="education" class="py-24 bg-navyDark relative reveal">
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-electricCyan/5 rounded-full filter blur-[140px] pointer-events-none"></div>
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="mb-16 text-center md:text-left">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>Education & Certifications<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Academic Qualifications</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto md:mx-0 rounded"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <!-- MSU Degree -->
        <div class="glass-card rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-4">
              <span class="text-2xl text-electricCyan">🎓</span>
              <span class="text-xs font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">2020</span>
            </div>
            <h3 class="text-lg font-sans font-bold text-white">BSc (Hons) Information Systems</h3>
            <p class="text-sm text-electricCyan font-mono mt-1">Midlands State University</p>
            <p class="text-slate-400 text-sm mt-3 font-light leading-relaxed">Graduated with honors, focusing on databases, system analysis, and programming foundations.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/45 text-xs text-slate-500 font-mono">Credential ID: VERIFIED</div>
        </div>

        <!-- Udacity -->
        <div class="glass-card rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-4">
              <span class="text-2xl text-electricCyan">🎗️</span>
              <span class="text-xs font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">2024</span>
            </div>
            <h3 class="text-lg font-sans font-bold text-white">Android Kotlin Developer</h3>
            <p class="text-sm text-electricCyan font-mono mt-1">Udacity Nanodegree</p>
            <p class="text-slate-400 text-sm mt-3 font-light leading-relaxed">Specialized in advanced Android layouts, coroutines, jetpack components, work managers, and performance tuning.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/45 text-xs text-slate-500 font-mono">Credential ID: VERIFIED</div>
        </div>

        <!-- Coursera -->
        <div class="glass-card rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-4">
              <span class="text-2xl text-electricCyan">🎗️</span>
              <span class="text-xs font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">2023</span>
            </div>
            <h3 class="text-lg font-sans font-bold text-white">Google Project Management</h3>
            <p class="text-sm text-electricCyan font-mono mt-1">Coursera Professional Certificate</p>
            <p class="text-slate-400 text-sm mt-3 font-light leading-relaxed">Learned professional project governance, risk management, Agile/Scrum techniques, and project initiation.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/45 text-xs text-slate-500 font-mono">Credential ID: VERIFIED</div>
        </div>

        <!-- Google Africa -->
        <div class="glass-card rounded-xl p-6 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-4">
              <span class="text-2xl text-electricCyan">🎗️</span>
              <span class="text-xs font-mono text-slate-500 bg-slate-900/60 px-2.5 py-1 rounded border border-slate-800">2022</span>
            </div>
            <h3 class="text-lg font-sans font-bold text-white">Google Africa Android Developer Program</h3>
            <p class="text-sm text-electricCyan font-mono mt-1">Google Developers</p>
            <p class="text-slate-400 text-sm mt-3 font-light leading-relaxed">Intensive training program mastering modern Android best practices, Kotlin, material design, and offline storage.</p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/45 text-xs text-slate-500 font-mono">Credential ID: VERIFIED</div>
        </div>

      </div>
    </div>
  </section>

  <!-- 7. CONTACT / FOOTER SECTION -->
  <section id="contact" class="py-24 bg-slate-950 relative">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="mb-16 text-center">
        <div class="inline-flex items-center gap-2 text-xs font-mono text-electricCyan uppercase tracking-widest mb-3">
          <span>&lt;</span>Contact Me<span>/&gt;</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">Let's Build Something Together</h2>
        <div class="w-16 h-1 bg-electricCyan mt-4 mx-auto rounded"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Channels -->
        <div class="lg:col-span-5 space-y-6">
          <h3 class="text-xl font-sans font-semibold text-white">Contact Channels</h3>
          <p class="text-slate-400 text-sm leading-relaxed font-light">
            Whether you are looking to hire, discuss H2H integration problems, build robust Kotlin/Android apps, or just say hello, my inbox is always open.
          </p>

          <div class="space-y-4 pt-4">
            <!-- Email -->
            <a href="mailto:simbastart.dev@gmail.com" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:scale-[1.01] transition-all duration-300 group">
              <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electricCyan group-hover:bg-electricCyan group-hover:text-navyDark transition-colors">✉️</div>
              <div class="overflow-hidden">
                <p class="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Direct Email</p>
                <p class="text-sm font-sans font-semibold text-white truncate">simbastart.dev@gmail.com</p>
              </div>
            </a>

            <!-- Github -->
            <a href="https://github.com/simbastart001" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:scale-[1.01] transition-all duration-300 group">
              <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electricCyan group-hover:bg-electricCyan group-hover:text-navyDark transition-colors">🐙</div>
              <div class="overflow-hidden">
                <p class="text-[10px] font-mono text-slate-500 uppercase tracking-wider">GitHub Profile</p>
                <p class="text-sm font-sans font-semibold text-white truncate">github.com/simbastart001</p>
              </div>
            </a>

            <!-- Linkedin -->
            <a href="https://linkedin.com/in/simba-start-07a37a173" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 rounded-xl glass-card hover:scale-[1.01] transition-all duration-300 group">
              <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-electricCyan group-hover:bg-electricCyan group-hover:text-navyDark transition-colors">🔗</div>
              <div class="overflow-hidden">
                <p class="text-[10px] font-mono text-slate-500 uppercase tracking-wider">LinkedIn Network</p>
                <p class="text-sm font-sans font-semibold text-white truncate">linkedin.com/in/simba-start-07a37a173</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Form (HTML only powered by Formspree placeholder) -->
        <div class="lg:col-span-7">
          <div class="glass-card rounded-xl p-6 sm:p-8">
            <form action="https://formspree.io/f/xoqydvwa" method="POST" class="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Form Submission">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Name</label>
                  <input type="text" name="name" required class="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electricCyan transition-colors" placeholder="Simba Start">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Your Email</label>
                  <input type="email" name="_replyto" required class="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electricCyan transition-colors" placeholder="simba@example.com">
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Subject</label>
                <input type="text" name="subject" required class="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electricCyan transition-colors" placeholder="Inquiry: Software Engineering Services">
              </div>

              <div class="space-y-2">
                <label class="text-xs font-mono text-slate-400 uppercase tracking-wider">Message</label>
                <textarea name="message" required rows="5" class="w-full bg-slate-950/85 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-electricCyan transition-colors resize-none" placeholder="Let me know how I can assist with your project goals..."></textarea>
              </div>

              <button type="submit" class="px-8 py-3.5 rounded-lg font-medium text-xs text-navyDark bg-electricCyan hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.2)] cursor-pointer">
                Send Message 📤
              </button>
            </form>
          </div>
        </div>

      </div>

      <!-- Footer Bottom -->
      <div class="mt-24 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div>Designed & Built by <span class="text-electricCyan font-semibold">iStart</span> © 2026</div>
        <div class="flex items-center gap-1.5">
          <span>✨</span>
          <span>Harare, Zimbabwe Hub</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll To Top Button -->
  <button id="scrollToTopBtn" class="fixed bottom-6 right-6 w-10 h-10 rounded-lg bg-slate-900 border border-electricCyan/30 text-electricCyan flex items-center justify-center transition-all duration-300 opacity-0 pointer-events-none hover:bg-electricCyan hover:text-navyDark hover:scale-105 z-40 shadow-[0_0_15px_rgba(0,212,255,0.15)]" aria-label="Scroll back to top">
    ▲
  </button>

  <!-- Vanilla JS Interactive Controls -->
  <script>
    // 1. Mobile Hamburger Menu Toggle
    const menuToggler = document.getElementById('menuToggler');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    menuToggler.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (mobileMenu.classList.contains('hidden')) {
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      } else {
        menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    });

    // Close mobile menu on links click
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      });
    });

    // 2. Typewriter Effect
    const phrases = [
      "Software Engineer",
      "Kotlin & Android Specialist",
      "Flutter Mobile Developer",
      ".NET Backend Developer",
      "Spring Boot & Integration Architect",
      "Host-to-Host Banking Integrator"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterText = document.getElementById('typewriterText');

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? 40 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2000; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 500; // Pause before typing next word
      }

      setTimeout(typeEffect, speed);
    }
    
    // Start typing
    setTimeout(typeEffect, 1000);

    // 3. Floating Particles Background (Canvas)
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = canvas.parentElement.clientWidth;
    let height = canvas.height = canvas.parentElement.clientHeight;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const particles = [];
    
    window.addEventListener('resize', () => {
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    });

    if (prefersReducedMotion) {
      // Static background starfield (no rendering ticks)
      ctx.fillStyle = "rgba(0, 212, 255, 0.15)";
      for (let i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 2 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      const particleCount = Math.min(60, Math.floor((width * height) / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1
        });
      }

      const mouse = { x: -9999, y: -9999, radius: 120 };
      window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

      function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          ctx.fillStyle = "rgba(0, 212, 255, 0.45)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          // Connect to mouse
          const dxMouse = p.x - mouse.x;
          const dyMouse = p.y - mouse.y;
          const distMouse = Math.sqrt(dxMouse*dxMouse + dyMouse*dyMouse);
          if (distMouse < mouse.radius) {
            ctx.strokeStyle = "rgba(0, 212, 255, " + (0.15 * (1 - distMouse/mouse.radius)) + ")";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        });

        // Inter-particle connections
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx*dx + dy*dy);

            if (dist < 100) {
              ctx.strokeStyle = "rgba(0, 212, 255, " + (0.1 * (1 - dist/100)) + ")";
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(animateParticles);
      }
      animateParticles();
    }

    // 4. Interactive Projects Filter
    function filterProjects(tag) {
      const cards = document.querySelectorAll('.project-card');
      const buttons = document.querySelectorAll('.project-filter-btn');

      // Update active button state
      buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(tag)) {
          btn.className = "project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-electricCyan text-navyDark font-semibold border border-electricCyan shadow-[0_0_15px_rgba(0,212,255,0.2)]";
        } else {
          btn.className = "project-filter-btn px-4 py-2 rounded-full font-mono text-xs bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700 hover:text-slate-200";
        }
      });

      // Show / hide cards with smooth fade
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags');
        if (tag === 'all' || tags.includes(tag)) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    }

    // 5. Scroll Reveal Intersection Observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(el => observer.observe(el));

    // 6. Scroll-To-Top Button
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    });
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(singleFileHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const downloadHtmlFile = () => {
    const blob = new Blob([singleFileHtmlCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "index.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      {/* Floating Panel Activation Button - Styled Like a Developer Command line helper */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2.5 rounded-lg font-mono text-xs text-navy-dark bg-electric-cyan font-semibold flex items-center gap-2 hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all cursor-pointer border border-white/10"
        >
          <FileCode size={14} className="animate-pulse" />
          <span>Export Single HTML</span>
        </button>
      </div>

      {/* Drawer / Modal Container */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-sm">
          <div className="glass-card w-full max-w-3xl rounded-2xl flex flex-col overflow-hidden max-h-[85vh] box-glow-cyan">
            {/* Header */}
            <div className="p-6 border-b border-slate-800/80 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electric-cyan/10 border border-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                  <Terminal size={18} />
                </div>
                <div>
                  <h3 className="text-base font-sans font-bold text-white flex items-center gap-1.5">
                    GitHub Pages Exporter
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-electric-cyan font-normal tracking-wide">
                      Single-File HTML
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">
                    Copy or download the self-contained build, fully responsive with no external dependencies.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Instruction body */}
            <div className="p-6 bg-slate-950/20 space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3.5">
                <Sparkles size={16} className="text-electric-cyan shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 space-y-1.5">
                  <p className="font-semibold text-white">How to deploy in 2 minutes:</p>
                  <ol className="list-decimal pl-4 space-y-1">
                    <li>Download the compiled <code className="text-electric-cyan font-mono bg-slate-950 px-1 py-0.5 rounded">index.html</code> below.</li>
                    <li>Create a new public repository on GitHub named <code className="text-white font-mono bg-slate-950 px-1 py-0.5 rounded">simbastart001.github.io</code> or any name.</li>
                    <li>Upload the file directly to the root of the repository.</li>
                    <li>Go to repository <strong>Settings &gt; Pages</strong> and enable build from main branch. Your site is live!</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Code Box Preview */}
            <div className="flex-1 overflow-y-auto px-6 font-mono text-[11px] leading-relaxed text-slate-400 bg-slate-950 p-4 border-t border-b border-slate-900 select-all">
              <pre className="whitespace-pre">{singleFileHtmlCode}</pre>
            </div>

            {/* Action Footer */}
            <div className="p-6 bg-slate-950/50 flex flex-col sm:flex-row gap-3 items-center justify-end border-t border-slate-800/80">
              <button
                onClick={copyToClipboard}
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 hover:border-electric-cyan text-white hover:text-electric-cyan bg-slate-900 text-xs font-mono font-medium flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? "Copied to Clipboard!" : "Copy Full Code"}
              </button>

              <button
                onClick={downloadHtmlFile}
                className="w-full sm:w-auto px-6 py-3 rounded-lg text-navy-dark bg-electric-cyan text-xs font-mono font-bold flex items-center justify-center gap-2 hover:scale-102 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              >
                <Download size={14} />
                Download index.html
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
