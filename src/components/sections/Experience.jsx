import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award, Users } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export default function Experience() {
  const { experience, education, leadership, certifications } = portfolioData;
  const [activeView, setActiveView] = useState('work'); // 'work' | 'education' | 'leadership'

  let items = experience;
  if (activeView === 'education') items = education;
  if (activeView === 'leadership') items = leadership;

  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Experience & Education"
          subtitle="Combining product design, software engineering rigor, and student leadership at COMSATS University."
        />

        {/* View Switcher Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-white/10 backdrop-blur-md gap-1">
            <button
              onClick={() => setActiveView('work')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeView === 'work'
                  ? 'bg-accent-600 text-white shadow-md shadow-accent-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveView('education')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeView === 'education'
                  ? 'bg-accent-600 text-white shadow-md shadow-accent-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GraduationCap size={16} />
              <span>Education</span>
            </button>

            <button
              onClick={() => setActiveView('leadership')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeView === 'leadership'
                  ? 'bg-accent-600 text-white shadow-md shadow-accent-500/25'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users size={16} />
              <span>Leadership</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          <AnimatePresence mode="wait">
            {items.map((item, index) => (
              <motion.div
                key={`${activeView}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative group"
              >
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-accent-600 dark:border-accent-500 shadow-sm group-hover:scale-125 transition-transform" />

                {/* Timeline Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {item.role || item.degree}
                      </h3>
                      <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                        {item.company || item.institution || item.organization}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/5">
                        <Calendar size={13} />
                        {item.period}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-white/5">
                          <MapPin size={13} />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-2 mb-4">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <CheckCircle2 size={15} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skill tags */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-white/5">
                      {item.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Certifications Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-accent-500" size={20} />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Professional Certifications & Continuous Learning
            </h4>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-white/5 space-y-1"
              >
                <div className="text-xs font-bold text-slate-900 dark:text-white">{cert.title}</div>
                <div className="text-[11px] text-accent-600 dark:text-accent-400">{cert.issuer}</div>
                <div className="text-[10px] text-slate-400">{cert.year} • {cert.type}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
