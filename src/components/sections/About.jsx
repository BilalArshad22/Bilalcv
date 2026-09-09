import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layers, Code2, Sparkles, Check, ArrowUpRight, Award, UserCheck } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Compass,
  Layers,
  Code2,
  Sparkles
};

const quickSkills = [
  'Figma & Adobe XD',
  'Wireframing & Prototyping',
  'Design Systems & UI Components',
  'User Flows & Information Architecture',
  'Illustrator & FigJam',
  'Responsive & Mobile UI Design',
  'User Research & Usability Testing',
  'Design Tokens & Design Specs'
];

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="The Art of Human-Centered Product Design"
          subtitle="Designing with empathy, crafting intuitive user journeys, and building scalable design systems."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Stylized Profile Avatar Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-600/30 to-violetAccent-500/30 rounded-3xl blur-2xl -z-10" />

              {/* Profile Card Container */}
              <div className="glass-panel p-5 sm:p-6 rounded-3xl relative overflow-hidden group">
                {/* Photo Container */}
                <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-md">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient shadow for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />

                  {/* Name & Title overlay on photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-lg font-extrabold text-white block drop-shadow-sm">
                      {personal.name}
                    </span>
                    <span className="text-xs text-accent-300 font-semibold drop-shadow-sm">
                      UI/UX Designer & Product Designer
                    </span>
                  </div>

                  {/* Top Status Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-950/70 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>

                {/* Floating CGPA & Degree Badge */}
                <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center flex-shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">BS Software Engineering</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">COMSATS University Islamabad</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-accent-600 dark:text-accent-400 bg-accent-500/10 px-2.5 py-1 rounded-lg block">
                      CGPA 3.34
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium mt-0.5 block">
                      Class of 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Design Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-slate-900 dark:text-white text-lg sm:text-xl">
                I believe great design isn't just how something looks — it's how smoothly a user achieves their goals and how effortlessly a system scales over time.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                {about.bio}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                {about.extendedBio}
              </p>
            </div>

            {/* Core Competencies Quick Pill Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Toolkit & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quickSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-accent-500/15 text-accent-600 dark:text-accent-400 flex items-center justify-center flex-shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Highlights */}
            <div className="pt-4 grid sm:grid-cols-3 gap-4">
              {about.highlights.map((item, idx) => {
                const Icon = iconMap[item.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/70 dark:border-white/5 hover:border-accent-500/30 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
