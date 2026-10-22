import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section 
      id="education" 
      aria-label="Education"
      className="py-20 relative bg-slate-950/40 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-500/10 border border-violet-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            My formal engineering coursework and foundational computer science studies in Bangladesh.
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Degree Info */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {edu.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {edu.description}
                  </p>

            
                </div>

                {/* Coursework & Highlights */}
                <div className="lg:col-span-6 space-y-5">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-indigo-400" />
                      <span>Key Coursework & Engineering Subjects</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coreSubjects.map((subject) => (
                        <span 
                          key={subject}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-indigo-400" />
                      <span>Academic & Practical Highlights</span>
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
