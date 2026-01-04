import React, { useState } from 'react';
import { generateThumbnailConcept } from '../services/geminiService';
import { Sparkles, Loader2, Lightbulb } from 'lucide-react';

const ThumbnailGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState<{concept: string, titleIdeas: string[]} | null>(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleGenerate = async () => {
    if (!topic || !niche) return;
    setLoading(true);
    const data = await generateThumbnailConcept(topic, niche);
    setResult(data);
    setLoading(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-zinc-900 border border-white/10 hover:border-red-500 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105 group"
        >
          <Sparkles className="text-red-500 group-hover:rotate-12 transition-transform" size={20} />
          <span className="text-sm font-semibold hidden md:inline">Try AI Generator</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-96 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
      <div className="p-4 border-b border-white/5 flex justify-between items-center bg-black/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <Sparkles className="text-red-500" size={16} />
          <h3 className="font-bold text-sm">Thumbnail Architect AI</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white text-xl leading-none">&times;</button>
      </div>
      
      <div className="p-4 overflow-y-auto custom-scrollbar">
        {!result ? (
          <div className="space-y-4">
            <p className="text-xs text-gray-400">Need a winning idea? Describe your video, and I'll generate a high-CTR thumbnail concept for you.</p>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Video Topic</label>
              <input 
                type="text" 
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. I spent 24 hours in a haunted house"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-red-500/50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Niche/Category</label>
              <input 
                type="text" 
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                placeholder="e.g. Entertainment, Gaming, Tech"
                className="w-full bg-zinc-900 border border-white/10 rounded-lg p-2 text-sm text-white focus:outline-none focus:border-red-500/50"
              />
            </div>
            <button 
              onClick={handleGenerate}
              disabled={loading || !topic || !niche}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : 'Generate Concept'}
            </button>
          </div>
        ) : (
          <div className="space-y-4 animate-fade-in">
             <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                <h4 className="text-xs text-red-400 font-bold uppercase mb-2 flex items-center gap-1"><Lightbulb size={12}/> Visual Concept</h4>
                <p className="text-sm text-gray-300 leading-relaxed">{result.concept}</p>
             </div>
             
             <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5">
                <h4 className="text-xs text-red-400 font-bold uppercase mb-2">Title Ideas</h4>
                <ul className="space-y-2">
                  {result.titleIdeas.map((title, i) => (
                    <li key={i} className="text-sm text-white font-medium pl-2 border-l-2 border-red-500/50">{title}</li>
                  ))}
                </ul>
             </div>

             <button 
               onClick={() => setResult(null)}
               className="w-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white py-2 rounded-lg text-xs transition-colors"
             >
               Generate Another
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;