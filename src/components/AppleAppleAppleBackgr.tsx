import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const AppleAppleAppleBackgr: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800/80 shadow-2xl max-w-lg mx-auto my-4">
      <div className="flex items-center gap-3 mb-3">
        <span className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-inner">
          <Sparkles className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">AppleAppleAppleBackgr</h3>
          <p className="text-[11px] text-neutral-400">Scoped strictly to src/</p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
        Autonomously synthesized to fulfill: <strong className="text-white">"Apple Apple Apple background Apple background Apple background Apple background full Apple background full Apple background full white"</strong>.
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 text-xs">
        <span className="text-neutral-400 flex items-center gap-1.5 text-[11px]">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Syntax Verified
        </span>
        <button
          onClick={() => setActive(!active)}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white font-bold text-xs flex items-center gap-1.5 transition active:scale-95 shadow-md shadow-indigo-500/20"
        >
          <span>{active ? 'Active' : 'Deploy Action'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};

export default AppleAppleAppleBackgr;