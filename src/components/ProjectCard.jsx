import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useToast } from '../context/ToastContext';

export const ProjectCard = ({ project }) => {
  const { showToast } = useToast();

  const handlePlaceholderClick = (e, type) => {
    e.preventDefault();
    if (type === 'live') {
      showToast(`${project.title} live demo URL will be connected soon!`, 'info');
    } else {
      showToast(`${project.title} repository will be linked once published!`, 'info');
    }
  };

  return (
    <div className="group rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-300 shadow-xl flex flex-col overflow-hidden">
      
      {/* Project Image Banner */}
      <Link 
        to={`/projects/${project.slug}`}
        className="relative aspect-video w-full overflow-hidden bg-slate-950 block border-b border-slate-800/80"
        aria-label={`View ${project.title} project details`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        
      </Link>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <Link
              to={`/projects/${project.slug}`}
              className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors"
            >
              {project.title}
            </Link>
          </div>

          <p className="text-xs font-medium text-indigo-400/90 mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
          
          {/* View Details Link */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Live & Repo Quick Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Live Demo Button */}
            {project.hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="p-2 text-xs font-medium text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-600/30 border border-emerald-500/30 rounded-lg transition-colors flex items-center gap-1"
                title="View Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Live</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={(e) => handlePlaceholderClick(e, 'live')}
                className="p-2 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800 rounded-lg transition-colors flex items-center gap-1"
                title="Live Demo URL (Placeholder)"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Demo</span>
              </button>
            )}

            {/* GitHub Repo Button */}
            {project.hasGithubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View GitHub repository of ${project.title}`}
                className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={(e) => handlePlaceholderClick(e, 'github')}
                className="p-2 text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800 rounded-lg transition-colors"
                title="GitHub Repo (Placeholder)"
                aria-label="GitHub Repository Placeholder"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};
