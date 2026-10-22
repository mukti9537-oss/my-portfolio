import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  GraduationCap,
  Code2,
  Terminal,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';
import { useToast } from '../context/ToastContext';

export const Hero = () => {
  const { showToast } = useToast();

  const handleResumeClick = () => {
    if (profileData.resume.pdfUrl) {
      window.open(profileData.resume.pdfUrl, '_blank');
    } else {
      showToast(profileData.resume.toastMessage, 'info');
    }
  };

  return (
    <section 
      id="hero" 
      aria-label="Introduction and Hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-2xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {profileData.statusBadge}
              </span>
              
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {profileData.location}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                Diploma in Computer Engineering
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wide uppercase text-indigo-400">
                Hi there, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {profileData.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-sky-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                {profileData.role}
              </h2>
            </div>

            {/* Headline & Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>

            {/* Quick Tech Highlights Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" /> React
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" /> JavaScript (ES6+)
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Tailwind CSS
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Node.js & APIs
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] border border-indigo-400/30"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleResumeClick}
                aria-label="Download or View Resume"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900/60 transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-medium text-slate-400">Connect with me:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukti Chakraborty's GitHub Profile (opens in new tab)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mukti Chakraborty's LinkedIn Profile (opens in new tab)"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-sky-400 border border-slate-800 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Profile Card / Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Profile Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800/90 p-6 sm:p-7 shadow-2xl overflow-hidden">
                
                {/* Profile Image */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
                  <img
                    src="/images/profile-pic.png"
                    alt="Mukti Chakraborty - Aspiring Full-Stack Web Developer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Developer Profile</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Ready to Code</span>
                  </div>
                </div>

                {/* Quick Info Box underneath */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2.5">
                    <span>Specialization</span>
                    <span className="text-slate-200 font-medium">React • JavaScript • Node</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-2.5">
                    <span>Education</span>
                    <span className="text-slate-200 font-medium">Diploma in Computer Eng.</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Location</span>
                    <span className="text-slate-200 font-medium">Bangladesh</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
