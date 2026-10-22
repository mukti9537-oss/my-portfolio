import React from 'react';
import { Info, CheckCircle2, AlertCircle, X } from 'lucide-react';

export const Toast = ({ toast, onClose }) => {
  const { message, type } = toast;

  const iconMap = {
    info: <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />,
  };

  const borderMap = {
    info: 'border-indigo-500/30 bg-slate-900/95 text-slate-100 shadow-indigo-500/10',
    success: 'border-emerald-500/30 bg-slate-900/95 text-slate-100 shadow-emerald-500/10',
    warning: 'border-amber-500/30 bg-slate-900/95 text-slate-100 shadow-amber-500/10',
    error: 'border-rose-500/30 bg-slate-900/95 text-slate-100 shadow-rose-500/10',
  };

  return (
    <div
      role="alert"
      className={`pointer-events-auto flex items-start justify-between gap-3 p-4 rounded-xl border backdrop-blur-md shadow-xl transition-all duration-300 animate-slide-in ${
        borderMap[type] || borderMap.info
      }`}
    >
      <div className="flex items-start gap-3">
        {iconMap[type] || iconMap.info}
        <p className="text-sm font-medium leading-relaxed">{message}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
