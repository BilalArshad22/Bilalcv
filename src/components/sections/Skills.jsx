import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Figma, 
  Sparkles, 
  Play, 
  Zap, 
  Palette, 
  Layout, 
  Cpu, 
  Users, 
  GitFork, 
  Boxes, 
  Flame, 
  Code, 
  FileCode, 
  Wind, 
  Atom, 
  Terminal, 
  Smartphone, 
  Network, 
  Database, 
  Share2, 
  Workflow, 
  GitCommit, 
  Server,
  Check
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Figma,
  Layers,
  Sparkles,
  Play,
  Zap,
  Palette,
  Layout,
  Cpu,
  Users,
  GitFork,
  Boxes,
  Flame,
  Code,
  FileCode,
  Wind,
  Atom,
  Terminal,
  Smartphone,
  Network,
  Database,
  Share2,
  Workflow,
  GitCommit,
  Server
};

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Disciplines' },
    ...categories.map(c => ({ id: c.id, label: c.name }))
  ];

  // Filter skills based on selected tab
  const displayedCategories = activeTab === 'all'
    ? categories
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-slate-50/60 dark:bg-slate-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Expertise"
          title="Skills & Design Capabilities"
          subtitle="A comprehensive design toolkit spanning user research, wireframing, high-fidelity prototypes, scalable design systems, and interaction design."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-accent-600 rounded-full shadow-md shadow-accent-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Category Blocks */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-slate-200 dark:border-white/10">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-500" />
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>

                {/* Grid of Skill Cards with Progress Bars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => {
                    const Icon = iconMap[skill.icon] || Sparkles;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="glass-panel p-5 rounded-2xl relative group"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                              <Icon size={20} />
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                                {skill.name}
                              </h4>
                              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                                {skill.level >= 90 ? 'Mastery' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                              </span>
                            </div>
                          </div>

                          <span className="text-xs font-mono font-bold text-accent-600 dark:text-accent-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Animated Level Bar */}
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.05 }}
                            className="h-full bg-gradient-to-r from-accent-600 to-violetAccent-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
