import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Figma, 
  Smartphone, 
  Layers, 
  Globe, 
  Heart, 
  Network, 
  Sparkles,
  Eye,
  Palette
} from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Smartphone,
  Layers,
  Globe,
  Heart,
  Network,
  Sparkles
};

const CATEGORIES = [
  'All',
  'UI/UX',
  'Web Design',
  'App Design',
  'System Design'
];

export default function Portfolio({ onSelectProject }) {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeCategory) || p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Selected Projects & Case Studies"
          subtitle="A showcase of responsive applications, scalable design systems, and user-first digital products."
        />

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioFilter"
                    className="absolute inset-0 bg-accent-600 rounded-full shadow-md shadow-accent-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const ProjectIcon = iconMap[project.imagePlaceholder?.icon] || Sparkles;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group rounded-2xl overflow-hidden glass-panel flex flex-col hover:-translate-y-1.5 transition-all duration-300"
                >
                  {/* Mockup Preview Area */}
                  <div
                    onClick={() => onSelectProject(project)}
                    className="relative h-52 w-full bg-slate-100 dark:bg-slate-800 p-5 flex flex-col justify-between overflow-hidden cursor-pointer"
                  >
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/40" />
                      </>
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor}`}>
                        <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                        <div className="absolute -right-4 -bottom-6 opacity-25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 pointer-events-none">
                          <ProjectIcon size={160} className="text-white" />
                        </div>
                      </div>
                    )}

                    {/* Top Badges */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/20">
                        {project.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-white/25 text-white backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    {/* Center/Bottom Preview Label */}
                    <div className="z-10 mt-auto">
                      <div className="text-xs text-white/90 font-medium flex items-center gap-1.5 drop-shadow-sm">
                        <Eye size={14} /> Click to view case study
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-500 flex-shrink-0" />
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="pt-2 border-t border-slate-100 dark:border-white/5">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA Actions */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-center text-accent-600 dark:text-accent-400 bg-accent-500/10 hover:bg-accent-600 hover:text-white dark:hover:bg-accent-500 dark:hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Case Study</span>
                          <ExternalLink size={13} />
                        </button>

                        {project.figmaUrl && (
                          <a
                            href={project.figmaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open in Figma"
                            className="p-2.5 rounded-xl bg-purple-50 hover:bg-purple-600 hover:text-white dark:bg-purple-950/40 dark:hover:bg-purple-600 text-purple-600 dark:text-purple-300 dark:hover:text-white border border-purple-200/80 dark:border-purple-500/30 transition-all flex items-center justify-center shadow-sm"
                          >
                            <Figma size={14} />
                          </a>
                        )}

                        {project.behanceUrl && (
                          <a
                            href={project.behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Case Study on Behance"
                            className="p-2.5 rounded-xl bg-blue-50 hover:bg-[#0057ff] hover:text-white dark:bg-blue-950/40 dark:hover:bg-[#0057ff] text-[#0057ff] dark:text-blue-300 dark:hover:text-white border border-blue-200/80 dark:border-blue-500/30 transition-all flex items-center justify-center shadow-sm"
                          >
                            <Palette size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
