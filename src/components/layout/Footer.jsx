import React from 'react';
import { ArrowUp, Heart, Linkedin, Github, Palette, Dribbble, Mail } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Linkedin,
  Github,
  Palette,
  Dribbble,
  Mail
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-accent-500/30 flex-shrink-0">
                <img src="/bilal-arshad.jpg" alt="Bilal Arshad" className="w-full h-full object-cover object-top" />
              </div>
              <span>{portfolioData.personal.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              UI/UX Designer • Product & Mobile UI • Design Systems
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((social) => {
              const Icon = iconMap[social.icon] || Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-accent-600 dark:hover:bg-accent-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 transition-all duration-200 shadow-sm"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-8 h-8 rounded-full bg-slate-200/70 dark:bg-slate-800 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed in Figma & Crafted for UI/UX Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
