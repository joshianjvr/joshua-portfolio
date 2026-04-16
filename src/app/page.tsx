"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ChevronRight, Award, ExternalLink, X, GraduationCap, Sun, Moon } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const allCertificates = [
    { title: "Full-Stack Web Development", issuer: "Udemy", date: "2025", image: "/certificates/cert1.jpg" },
    { title: "Database Management (SQL)", issuer: "Coursera", date: "2024", image: "/certificates/cert2.jpg" },
    { title: "Advanced PHP Architect", issuer: "LinkedIn Learning", date: "2025", image: "/certificates/cert3.jpg" },
    { title: "Cybersecurity Essentials", issuer: "Cisco", date: "2024", image: "/certificates/cert4.jpg" },
    { title: "Responsive Design Foundations", issuer: "FreeCodeCamp", date: "2023", image: "/certificates/cert5.jpg" },
    { title: "Cloud Practitioner", issuer: "AWS", date: "2025", image: "/certificates/cert6.jpg" },
    { title: "Modern JavaScript (ES6+)", issuer: "Udemy", date: "2024", image: "/certificates/cert7.jpg" },
    { title: "Back-End Performance", issuer: "Google", date: "2025", image: "/certificates/cert8.jpg" },
    { title: "Git & Version Control", issuer: "Pluralsight", date: "2024", image: "/certificates/cert9.jpg" },
    { title: "Laravel Framework Deep Dive", issuer: "Laracasts", date: "2025", image: "/certificates/cert10.jpg" },
    { title: "Data Structures & Algorithms", issuer: "Coursera", date: "2024", image: "/certificates/cert11.jpg" },
    { title: "System Security Certified", issuer: "ISC2", date: "2025", image: "/certificates/cert12.jpg" },
  ];

  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 selection:bg-blue-500/30">
      
      {/* 1. NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-slate-200 dark:border-white/10 px-4 md:px-6 py-3 rounded-full flex items-center gap-4 md:gap-6 text-xs md:text-sm font-medium whitespace-nowrap">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#stacks" className="hover:text-blue-500 transition-colors">Stacks</a>
        <a href="#certificates" className="hover:text-blue-500 transition-colors">Certificates</a>
        <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        <div className="w-[1px] h-4 bg-slate-300 dark:bg-white/20 ml-2" />
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Light and Dark Mode"
          className="p-1 hover:text-blue-500 transition-colors"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* 2. HERO SECTION */}
      <section id="home" className="min-h-dvh flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 md:w-125 h-80 md:h-125 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] md:blur-[120px] rounded-full -z-10" />

        <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center z-10">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
            <img 
              src="/profile.jpg" 
              alt="Joshua Javier Professional Portrait" 
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-2 border-slate-200 dark:border-white/20 p-1.5 bg-white dark:bg-black shadow-2xl" 
            />
          </motion.div>
          <br />
          <span className="inline-block px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-[10px] md:text-xs font-mono tracking-widest text-blue-600 dark:text-blue-400 mb-6 uppercase">Web Developer</span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6 leading-tight">Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-500 bg-clip-text text-transparent">Joshua</span>.</h1>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-gray-400 text-sm md:text-xl leading-relaxed mb-10">
            <span className="text-slate-900 dark:text-white font-semibold">Web Developer</span> specializing in server-side logic and database architecture. I build high-performance backends and complex inventory systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#projects" className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-blue-600 dark:hover:bg-blue-400 transition-all active:scale-95">View My Projects <ChevronRight size={18} /></a>
            <a href="/JOSHUA JAVIER RESUME.pdf" download className="w-full sm:w-auto bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95">Download CV</a>
          </div>
          <div className="flex justify-center gap-6 mt-10">
            <a 
              href="https://github.com/joshianjvr/joshjvr" 
              target="_blank" 
              aria-label="Visit Joshua's GitHub Profile"
              className="text-slate-400 dark:text-white/40 hover:text-blue-500 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joshua-javier-178a82350/" 
              target="_blank" 
              aria-label="Visit Joshua's LinkedIn Profile"
              className="text-slate-400 dark:text-white/40 hover:text-blue-500 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 1, y: 0 }} whileInView={{ y: [-10, 0] }} viewport={{ once: true, amount: 0.1 }} className="mb-16 z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Featured Work</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 md:p-10 hover:border-blue-500/50 transition-all shadow-sm">
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-400/30 bg-blue-50 dark:bg-blue-400/5 mb-4 inline-block uppercase tracking-wider">Capstone • PHP / MySQL</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">Student Portal System</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base max-w-md mb-6 leading-relaxed">Comprehensive management platform for DWCV. Features automated grade tracking, secure enrollment logic, and real-time data synchronization.</p>
            </div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 blur-[100px] -z-10" />
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-4 group rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Inventory Tracker</h3>
            <p className="text-slate-500 dark:text-gray-400 text-xs leading-relaxed">Automated stock management with reorder logic and movement history.</p>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-500/60 uppercase mt-4">Optimized CRUD</span>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-5 group rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 hover:border-blue-500/30 transition-all shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Payroll Management</h3>
            <p className="text-slate-500 dark:text-gray-400 text-xs leading-relaxed">Complex backend logic for tax deductions, disbursements, and employee salary processing.</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }} 
            className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-white/5 border border-slate-800 dark:border-white/10 p-8 shadow-xl transition-all"
          >
            <div className="relative z-10">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2">Ongoing Project</span>
              <h3 className="text-2xl font-bold text-white mb-2">AI Content Orchestrator</h3>
              <p className="text-gray-400 text-xs md:text-sm max-w-xs leading-relaxed">
                Automating video scripting and asset generation for scalable YouTube automation projects.
              </p>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* 4. STACKS SECTION */}
      <section id="stacks" className="py-24 px-6 bg-slate-50 dark:bg-white/[0.02] border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Technical Stacks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {["PHP", "MySQL", "Laravel", "JavaScript", "React", "Tailwind", "TypeScript", "Git"].map((stack) => (
              <div key={stack} className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] shadow-sm flex items-center justify-center transition-all text-[10px] md:text-xs font-bold text-slate-400 hover:text-blue-600 dark:hover:text-white uppercase tracking-widest">{stack}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATES SECTION */}
      <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto relative">
        <motion.div initial={{ opacity: 1, y: 0 }} whileInView={{ y: [-10, 0] }} viewport={{ once: true, amount: 0.1 }} className="mb-16 z-10 relative">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Certificates</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-left">
          {allCertificates.slice(0, 5).map((cert, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => window.open(cert.image, '_blank')}
              className="p-6 md:p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/30 transition-all group cursor-pointer relative shadow-sm"
            >
              <Award className="text-blue-600 dark:text-blue-400 mb-4" size={24} />
              <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white mb-1 leading-tight">{cert.title}</h3>
              <p className="text-slate-500 dark:text-gray-500 text-[10px] md:text-xs">{cert.issuer}</p>
            </motion.div>
          ))}

          <motion.div 
            whileHover={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="p-6 md:p-8 rounded-3xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/40 flex flex-col items-center justify-center gap-3 cursor-pointer group transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform"><GraduationCap size={24} /></div>
            <span className="text-xs md:text-sm font-bold text-blue-600 dark:text-white uppercase tracking-widest text-center">See All (12)</span>
          </motion.div>
        </div>
      </section>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-4xl max-h-[85vh] bg-white dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-6 md:p-10 flex flex-col shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Certifications</h2>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pr-2">
                {allCertificates.map((cert, index) => (
                  <div 
                    key={index} 
                    onClick={() => window.open(cert.image, '_blank')}
                    className="p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-100 dark:border-white/5 flex items-center group cursor-pointer hover:border-blue-500/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Award className="text-blue-600 dark:text-blue-500 shrink-0" size={20} />
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-1">{cert.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-gray-500">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. CONTACT ME */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 1, scale: 1, y: 0 }} 
            whileInView={{ y: [10, 0] }} 
            viewport={{ once: true }} 
            className="p-8 md:p-12 rounded-4xl md:rounded-[3rem] bg-slate-900 dark:bg-neutral-900/80 backdrop-blur-sm border border-slate-800 dark:border-white/10 z-10 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
                Let&apos;s build something <span className="text-blue-400">great</span>.
              </h2>
              <p className="text-gray-400 text-sm md:text-lg mb-10">
                Currently looking for new opportunities. My inbox is always open.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="mailto:adrianjoshuajavier@gmail.com" className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-400 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Mail size={20} /> Send an Email
                </a>
                <button 
                  onClick={() => { navigator.clipboard.writeText('adrianjoshuajavier@gmail.com'); alert('Email copied!'); }} 
                  className="text-gray-500 hover:text-white transition-colors text-xs underline underline-offset-8"
                >
                  Copy email address
                </button>
              </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center bg-slate-900 dark:bg-black border-t border-slate-800 dark:border-white/5">
        <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
          &copy; 2026 • Joshua Javier • All Rights Reserved
        </p>
      </footer>
    </main>
  );
}