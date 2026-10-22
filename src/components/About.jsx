import React from 'react';
import { 
  User, 
  Code2, 
  Server, 
  Cpu, 
  Sparkles, 
  Compass, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { profileData } from '../data/profile';

export const About = () => {
  const iconMap = [
    <Code2 className="w-5 h-5 text-sky-400" key="frontend" />,
    <Server className="w-5 h-5 text-indigo-400" key="backend" />,
    <Cpu className="w-5 h-5 text-violet-400" key="engineering" />,
    <Sparkles className="w-5 h-5 text-emerald-400" key="usercentric" />
  ];

  return (
    <section 
      id="about" 
      aria-label="About Me"
      className="py-20 relative bg-slate-950/40 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer Journey & Core Philosophy
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A glimpse into my background, my passion for the modern web ecosystem, and how I approach building reliable software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800/80 shadow-lg space-y-4">
              <p className="font-medium text-slate-200">
                {profileData.about.intro}
              </p>
              {profileData.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-slate-300/90 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Values / Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean, Maintainable Code</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Prioritizing readable syntax, modular folder structure, and self-documenting code.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Practical Problem Solver</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Focused on tackling tangible challenges, like grocery price tracking in BazarDor.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Fast-Paced Learner</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Quickly adapting to evolving frameworks, modern tooling, and technical guidelines.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Engineering Discipline</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Blending diploma academic rigor with contemporary web engineering workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>Areas of Focus</span>
            </h3>

            <div className="space-y-3.5">
              {profileData.about.highlights.map((item, index) => (
                <div 
                  key={item.title}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                      {iconMap[index % iconMap.length]}
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Education Callout Box */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Academic Foundation</span>
                <span className="text-slate-300">
                  Diploma in Computer Engineering student in Bangladesh. Bridging theory and modern full-stack web development.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
