import React from 'react';
import { Creator } from '../types';

const creators: Creator[] = [
  { name: '3marr', subscribers: '328K subscribers', avatar: 'https://picsum.photos/seed/3marr/100', verified: true },
  { name: 'Aziz', subscribers: '793K subscribers', avatar: 'https://picsum.photos/seed/aziz/100', verified: true },
  { name: 'Drfarissi', subscribers: '170K subscribers', avatar: 'https://picsum.photos/seed/drfarissi/100', verified: true },
  { name: 'Esraalita', subscribers: '230K subscribers', avatar: 'https://picsum.photos/seed/esra/100', verified: true },
  { name: 'Hamza', subscribers: '1.7M subscribers', avatar: 'https://picsum.photos/seed/hamza/100', verified: true },
  { name: 'Ibnhatuta', subscribers: '3.2M subscribers', avatar: 'https://picsum.photos/seed/ibn/100', verified: true },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-8">Trusted by the biggest creators</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {creators.map((creator, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-default group">
              <img src={creator.avatar} alt={creator.name} className="w-10 h-10 rounded-full border border-white/10 group-hover:border-red-500/50 transition-colors" />
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-sm text-white">{creator.name}</span>
                  {creator.verified && (
                    <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  )}
                </div>
                <p className="text-[10px] text-gray-500">{creator.subscribers}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;