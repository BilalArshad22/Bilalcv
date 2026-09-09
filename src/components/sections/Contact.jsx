import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  MapPin, 
  Clock, 
  Sparkles, 
  Linkedin, 
  Github, 
  Palette, 
  Dribbble,
  MessageSquare,
  User,
  ArrowRight,
  Phone,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import SectionHeading from '../ui/SectionHeading';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Linkedin,
  Github,
  Palette,
  Dribbble,
  Mail
};

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate submission delay
    setTimeout(() => {
      setStatus('success');
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      // Reset form after 4 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus('idle');
      }, 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/60 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something Exceptional"
          subtitle="Have a new product idea, design system challenge, or open role? Send a message and I will reply within 24 hours."
        />

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you need end-to-end UX wireframing, a full design system overhaul, or a high-converting web & app interface, my inbox is open.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email card */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-accent-500/10 border border-slate-200/80 dark:border-white/5 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Email Directly</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                      {personal.email}
                    </div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-accent-500/10 border border-slate-200/80 dark:border-white/5 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Call / WhatsApp</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-accent-500 transition-colors">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                {/* Location card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Location</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

                {/* Availability card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Response Time</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Typically under 24 hours
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links List */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Follow & Connect
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.icon] || Mail;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 hover:border-accent-500/50 hover:text-accent-600 dark:hover:text-accent-400 shadow-sm transition-all"
                      >
                        <Icon size={14} />
                        <span>{social.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-8">
                Fill out the form below and let me know about your project requirements or team role.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || 'there'}! I've received your note and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Project Type / Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="UI/UX Redesign, Design System, Full-time Role"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project goals, timeline, and scope..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-accent-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-accent-600 hover:bg-accent-500 shadow-lg shadow-accent-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
