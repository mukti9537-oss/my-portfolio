import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  FileText, 
  Heart, 
  Code2, 
  Layers 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { useToast } from '../context/ToastContext';

export const Footer = () => {
  const { showToast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeClick = () => {
    if (profileData.resume.pdfUrl) {
      window.open(profileData.resume.pdfUrl, '_blank');
    } else {
      showToast(profileData.resume.toastMessage, 'info');
    }
  };

  return (
    <footer 
      aria-label="Site Footer"
      className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 group"
              aria-label="Mukti Chakraborty Homepage"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-sky-400 p-[1px] shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <span className="text-xs font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    MC
                  </span>
                </div>
              </div>
              <span className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                {profileData.name}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Full-Stack Web Developer and Diploma in Computer Engineering student in Bangladesh. Focused on crafting responsive, user-friendly, and maintainable web applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mukti Chakraborty GitHub"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mukti Chakraborty LinkedIn"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-colors border border-slate-800"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleResumeClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800 text-xs font-medium"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/#about" className="hover:text-indigo-400 transition-colors">About Me</a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-indigo-400 transition-colors">Skills & Tech</a>
              </li>
              <li>
                <a href="/#education" className="hover:text-indigo-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="/#experience" className="hover:text-indigo-400 transition-colors">Experience & Learning</a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-indigo-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Project Details Direct Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Project Case Studies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {projectsData.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="hover:text-indigo-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{project.title}</span>
                    <span className="text-[11px] text-slate-600 group-hover:text-indigo-400 transition-colors font-mono">
                      /projects/{project.slug}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Mukti Chakraborty. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of the page"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
