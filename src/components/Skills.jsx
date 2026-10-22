import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  FileCode2, 
  Palette, 
  Layout, 
  Sparkles, 
  Smartphone, 
  Server, 
  Cpu, 
  Network, 
  Braces, 
  Database, 
  GitBranch, 
  Zap, 
  Send, 
  Terminal, 
  Binary, 
  Boxes, 
  HardDrive, 
  CheckCircle2,
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/skills';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const iconLookup = {
    Code2: <Code2 className="w-5 h-5 text-sky-400" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-amber-400" />,
    Palette: <Palette className="w-5 h-5 text-cyan-400" />,
    Layout: <Layout className="w-5 h-5 text-orange-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-violet-400" />,
    Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
    Network: <Network className="w-5 h-5 text-sky-400" />,
    Braces: <Braces className="w-5 h-5 text-yellow-400" />,
    Database: <Database className="w-5 h-5 text-emerald-500" />,
    GitBranch: <GitBranch className="w-5 h-5 text-orange-400" />,
    Github: <GithubIcon className="w-5 h-5 text-slate-200" />,
    Zap: <Zap className="w-5 h-5 text-yellow-300" />,
    Send: <Send className="w-5 h-5 text-orange-500" />,
    Terminal: <Terminal className="w-5 h-5 text-blue-400" />,
    Binary: <Binary className="w-5 h-5 text-indigo-400" />,
    Boxes: <Boxes className="w-5 h-5 text-purple-400" />,
    HardDrive: <HardDrive className="w-5 h-5 text-rose-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-400" />
  };

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const displayedCategories = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter((cat) => cat.category === activeTab);

  return (
    <section 
      id="skills" 
      aria-label="Technical Skills"
      className="py-20 relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            A comprehensive overview of my technical toolset, modern web development skills, and core engineering foundations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {displayedCategories.map((cat) => (
            <div key={cat.category} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-slate-800/60">
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>{cat.category}</span>
                </h3>
                <span className="text-xs text-slate-400">{cat.description}</span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:scale-105 group-hover:border-slate-700 transition-all">
                            {iconLookup[skill.icon] || <Code2 className="w-5 h-5 text-indigo-400" />}
                          </div>
                          <span className="font-semibold text-sm text-white group-hover:text-indigo-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-indigo-300 border border-slate-700/60">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed pl-1">
                        {skill.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
