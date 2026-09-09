import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Check, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  Printer,
  Phone,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Users
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

export default function Resume() {
  const { personal, experience, education, skills, certifications, leadership, languages } = portfolioData;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Fire confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const link = document.createElement('a');
    link.href = '/Bilal_Arshad_UIUX_Resume.pdf';
    link.download = 'Bilal_Arshad_UIUX_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Qualifications"
          subtitle="An executive snapshot of my professional background, competencies, and system design expertise."
        />

        {/* Download & Actions Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-accent-600 to-violetAccent-600 text-white shadow-xl shadow-accent-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2">
              <FileText size={24} />
              Looking for a complete printable CV?
            </h3>
            <p className="text-xs sm:text-sm text-accent-100 max-w-md">
              Download the official resume document with complete case studies, education credentials, and technical skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white text-accent-700 hover:bg-accent-50 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              {downloadSuccess ? (
                <>
                  <Check size={18} className="text-emerald-600" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download size={18} />
                  <span>Download CV (PDF)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Visual CV Summary Card */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-white/10 space-y-10 shadow-lg">
          {/* Top Header of CV */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {personal.name}
              </h3>
              <p className="text-sm font-semibold text-accent-600 dark:text-accent-400 mt-1">
                {personal.title}
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex flex-wrap gap-x-4 gap-y-1.5">
                <span className="flex items-center gap-1"><MapPin size={13} className="text-accent-500" /> {personal.location}</span>
                <span className="flex items-center gap-1"><Phone size={13} className="text-accent-500" /> {personal.phone}</span>
                <span className="flex items-center gap-1"><Mail size={13} className="text-accent-500" /> {personal.email}</span>
                <span className="flex items-center gap-1"><Globe size={13} className="text-accent-500" /> behance.net/bilalrajput19</span>
              </div>
            </div>

            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors self-start md:self-auto cursor-pointer"
            >
              <Printer size={14} />
              Print CV
            </button>
          </div>

          {/* Section 1: Executive Profile */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles size={14} className="text-accent-500" /> Profile
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {portfolioData.about.bio}
            </p>
          </div>

          {/* Section 2: Core Competencies Snapshot */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Award size={14} className="text-accent-500" /> Key Skills & Competencies
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Design & Tools</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Figma, Adobe XD, Illustrator, FigJam</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-bold text-slate-900 dark:text-white">UI/UX Craft</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Wireframing, Prototyping, Design Systems, User Flows</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-bold text-slate-900 dark:text-white">User Research</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">User Personas, Usability Testing, Journey Maps, IA</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-white/5">
                <div className="text-xs font-bold text-slate-900 dark:text-white">Visual & Interaction</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Design Tokens, Micro-interactions, WCAG Standards</div>
              </div>
            </div>
          </div>

          {/* Section 3: Recent Roles Snapshot */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Briefcase size={14} className="text-accent-500" /> Work Experience
            </h4>
            <div className="space-y-4">
              {experience.map((job, idx) => (
                <div key={idx} className="border-l-2 border-accent-500/40 pl-4 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-slate-900 dark:text-white">{job.role}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{job.company} • {job.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{job.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Education Snapshot */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <GraduationCap size={14} className="text-accent-500" /> Education
            </h4>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="text-xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {edu.institution}</span>
                    {edu.location && <span className="text-accent-600 dark:text-accent-400 font-medium ml-1.5">({edu.location})</span>}
                  </div>
                  <span className="text-slate-400 font-mono text-[11px]">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Leadership & Certifications Row */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-white/10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Users size={14} className="text-accent-500" /> Leadership Experience
              </h4>
              {leadership.map((item, idx) => (
                <div key={idx} className="text-xs space-y-0.5">
                  <div className="font-bold text-slate-900 dark:text-white">{item.role} — {item.organization}</div>
                  <div className="text-slate-500 dark:text-slate-400">{item.institution} ({item.period})</div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Award size={14} className="text-accent-500" /> Certifications & Languages
              </h4>
              <div className="space-y-1.5 text-xs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                    <span>{cert.title} ({cert.issuer})</span>
                    <span className="text-[10px] text-slate-400">{cert.year}</span>
                  </div>
                ))}
                <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-white/5">
                  Languages: English (Professional Working) • Urdu (Native)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
