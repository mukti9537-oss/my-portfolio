import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 bg-clip-text mb-4">
        404
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
        Page Not Found
      </h1>
      <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
        The page you are looking for doesn't exist or has been relocated. Let's get you back on track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/25"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
};
