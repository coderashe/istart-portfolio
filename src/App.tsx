import { useState, useEffect } from "react";
import { Menu, X, ArrowUp, Terminal, Code2 } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ExportSingleFile from "./components/ExportSingleFile";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to trigger navigation style changes and show back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-navy-dark text-slate-200 selection:bg-electric-cyan/30 selection:text-white antialiased font-sans overflow-x-hidden">
      
      {/* Immersive UI Background Glow Elements */}
      <div className="bg-glow top-[-100px] left-[-100px]" />
      <div className="bg-glow top-[25%] right-[-150px] opacity-80" />
      <div className="bg-glow bottom-[15%] left-[-150px] opacity-50" />
      <div className="bg-glow bottom-[-100px] right-[-100px]" />

      {/* 1. STUNNING HEADER NAVIGATION */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0A0F1E]/85 backdrop-blur-md py-4 border-slate-800/80"
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
          
          {/* Logo Branding */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-mono text-sm font-bold text-white tracking-wider flex items-center gap-1.5 group cursor-pointer hover:text-electric-cyan transition-all"
          >
            <span className="text-electric-cyan group-hover:-translate-x-1 transition-transform">&lt;</span>
            +263
            <span className="text-white opacity-40 font-light"> 776815030</span>
            <span className="text-electric-cyan group-hover:translate-x-1 transition-transform">/&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-electric-cyan transition-colors cursor-pointer"
            >
              EDUCATION
            </button>
            
            {/* Call To Action contact */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-electric-cyan transition-colors px-4 py-2 rounded border border-electric-cyan/20 bg-electric-cyan/5 hover:bg-electric-cyan/10 hover:border-electric-cyan/40 cursor-pointer"
            >
              CONNECT
            </button>
          </nav>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#0A0F1E]/95 backdrop-blur-md border-b border-slate-800/80 p-6 flex flex-col gap-4 font-mono text-sm tracking-wide text-center">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-electric-cyan transition-colors py-2 cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-electric-cyan transition-colors py-2 cursor-pointer"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-electric-cyan transition-colors py-2 cursor-pointer"
            >
              PROJECTS
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-electric-cyan transition-colors py-2 cursor-pointer"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-electric-cyan transition-colors py-2 cursor-pointer"
            >
              EDUCATION
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-electric-cyan transition-colors border border-electric-cyan/20 rounded py-2 mt-2 bg-electric-cyan/5 cursor-pointer"
            >
              CONNECT
            </button>
          </div>
        )}
      </header>

      {/* 2. MAIN CORE LAYOUT CONTENT */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
      </main>

      {/* 3. PREMIUM COMPRESSED SINGLE-FILE EXPORTER COMPONENT */}
        {/*  <ExportSingleFile /> */}

      {/* 4. SCROLL TO TOP FLOATING BUTTON */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-10 h-10 rounded-lg bg-slate-900 border border-electric-cyan/30 text-electric-cyan flex items-center justify-center hover:bg-electric-cyan hover:text-navy-dark hover:scale-105 transition-all duration-300 z-40 shadow-[0_0_15px_rgba(0,212,255,0.15)] cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={16} className="stroke-[2.5]" />
        </button>
      )}

    </div>
  );
}
