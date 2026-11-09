import React from 'react';
import { Calculator } from './components/Calculator';

export const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation / Brand */}
      <header className="border-b border-slate-800/80 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-slate-950/40 sticky top-0 z-10">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-600/30">
            ±
          </div>
          <span className="font-bold text-lg tracking-wide text-white">GitAI Calc</span>
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
          ভার্সন ১.০
        </span>
      </header>

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col items-center justify-center py-8 px-4">
        <div className="text-center mb-6 max-w-md">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 mb-2">
            স্মার্ট ক্যালকুলেটর
          </h1>
          <p className="text-sm text-slate-400">
            সহজ ও দ্রুত যেকোনো হিসাব-নিকাশ সম্পন্ন করুন এক নিমেষেই।
          </p>
        </div>

        {/* Calculator Widget */}
        <Calculator />
      </section>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-500 border-t border-slate-800/60">
        তৈরি করেছে GitAI • বিশেষজ্ঞ ইঞ্জিনিয়ারিং সমাধান
      </footer>
    </main>
  );
};

export default App;
