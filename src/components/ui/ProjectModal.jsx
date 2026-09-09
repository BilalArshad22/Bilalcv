import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  Figma, 
  CheckCircle2, 
  Clock, 
  User, 
  Sparkles, 
  Layers, 
  TrendingUp,
  Smartphone,
  Globe,
  Heart,
  Network,
  Palette
} from 'lucide-react';

const iconMap = {
  Smartphone,
  Layers,
  Globe,
  Heart,
  Network,
  Sparkles
};

export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const ProjectIcon = iconMap[project.imagePlaceholder?.icon] || Sparkles;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 z-10 text-slate-900 dark:text-slate-100"
          >
            {/* Header / Graphic banner */}
            <div className={`relative h-60 sm:h-72 w-full bg-gradient-to-br ${project.accentColor} p-6 sm:p-8 flex flex-col justify-between overflow-hidden`}>
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/40" />
                </>
              ) : (
                <>
                  {/* Geometric / Wireframe accents */}
                  <div className="absolute -right-8 -bottom-10 opacity-20 pointer-events-none">
                    <ProjectIcon size={240} className="text-white" />
                  </div>
                  <div className="absolute inset-0 bg-grid-pattern opacity-15" />
                </>
              )}

              <div className="flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/20">
                  {project.category}
                </span>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="z-10 mt-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-sm">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Meta information row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 border-b border-slate-100 dark:border-white/10 text-sm">
                <div className="flex items-center gap-2.5">
                  <User size={18} className="text-accent-500" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Role</div>
                    <div className="font-semibold">{project.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Clock size={18} className="text-accent-500" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Timeline</div>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <Sparkles size={18} className="text-accent-500" />
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Category</div>
                    <div className="font-semibold">{project.badge}</div>
                  </div>
                </div>
              </div>

              {/* Project overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Project Overview & Problem Statement
                </h4>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Full UI Screen Preview */}
              {project.image && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                    Interface Showcase & Figma Design Preview
                  </h4>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-900/60 p-2">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-auto object-contain max-h-[380px] rounded-xl mx-auto"
                    />
                  </div>
                </div>
              )}

              {/* Tangible Impact */}
              {project.impact && project.impact.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                    <TrendingUp size={15} className="text-emerald-500" /> Key Measured Impact
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {project.impact.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10"
                      >
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent-600 dark:text-accent-400">
                          <CheckCircle2 size={16} />
                          {stat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              {project.deliverables && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Key Deliverables & Artifacts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-accent-500/10 text-accent-700 dark:text-accent-300 border border-accent-500/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-3 justify-end">
                {project.behanceUrl && (
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0057ff] hover:bg-[#0047d9] shadow-md shadow-blue-500/25 transition-all hover:scale-102"
                  >
                    <Palette size={16} /> View on Behance
                  </a>
                )}
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Figma size={16} /> Open in Figma
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
