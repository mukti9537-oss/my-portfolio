import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Sparkles,
  Share2
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projectsData } from '../data/projects';
import { useToast } from '../context/ToastContext';

export const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-4xl font-extrabold text-white mb-3">Project Not Found</h1>
        <p className="text-slate-400 text-sm max-w-md mb-8">
          The project case study you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  const handlePlaceholderClick = (type) => {
    if (type === 'live') {
      showToast(`${project.title} live demo URL will be connected soon!`, 'info');
    } else {
      showToast(`${project.title} GitHub repository link will be added upon public release!`, 'info');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Project case study URL copied to clipboard!', 'success');
    }
  };

  return (
    <div className="pt-28 pb-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div 
        className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <span>/</span>
            <a href="/#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <span>/</span>
            <span className="text-slate-200 font-medium">{project.title}</span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
              title="Share this project"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Projects</span>
            </Link>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>

            {project.hasLiveUrl && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Deployment
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {project.hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/25 transition-all duration-200 hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Application</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handlePlaceholderClick('live')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>Live Demo (Coming Soon)</span>
              </button>
            )}

            {project.hasGithubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => handlePlaceholderClick('github')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-400" />
                <span>Source Code (To be added)</span>
              </button>
            )}
          </div>
        </div>

        {/* Project Visual Banner */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/90 shadow-2xl mb-12">
          <img
            src={project.image}
            alt={`${project.title} Preview Banner`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Sections Grid */}
        <div className="space-y-12">
          
          {/* Section: Project Overview & Description */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950 border border-slate-800 shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>Project Overview & Context</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Section: Technologies Used */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-sky-400" />
              <span>Technologies & Tools Employed</span>
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono bg-slate-900/90 text-indigo-300 border border-indigo-500/20 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Section: Key Features */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Key Features & Functional Highlights</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {project.keyFeatures.map((feat, i) => (
                <div 
                  key={i}
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feat}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Technical Challenges & Solutions */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Engineering Challenges & Architectural Solutions</span>
            </h2>
            <div className="space-y-4">
              {project.challenges.map((c, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 space-y-2.5"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{c.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-800">
                    <strong className="text-indigo-400">Solution Implemented: </strong>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Future Improvements & Roadmap */}
          <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-950/20 via-slate-900/60 to-slate-950 border border-indigo-500/20 shadow-xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
              <span>Planned Enhancements & Future Roadmap</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              {project.futureImprovements.map((imp, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                >
                  <span className="text-yellow-400 font-bold shrink-0">•</span>
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Navigation footer */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Featured Projects</span>
            </Link>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Return to Top of Portfolio
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
