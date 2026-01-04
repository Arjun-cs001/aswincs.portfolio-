import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: '1', name: 'Ibnhatuta', handle: 'Ibnhatuta', avatar: 'https://picsum.photos/seed/ibn/100', subscribers: '3.28M subscribers', text: "The thumbnails were clean, cinematic, and instantly lifted the click-through rate. Communication was fast, and the final delivery was exactly what we needed." },
  { id: '2', name: 'lidam25', handle: 'lidam25', avatar: 'https://picsum.photos/seed/lidam/100', subscribers: '3.14M subscribers', text: "He understands what stops the scroll. The concepts were strong, the execution was sharp, and the thumbnails matched the channel style perfectly." },
  { id: '3', name: 'Ibratraveler', handle: 'Ibratraveler', avatar: 'https://picsum.photos/seed/ibra/100', subscribers: '500K subscribers', text: "Professional, fast, and consistent quality. Every revision made the thumbnail stronger until it was perfect." },
  { id: '4', name: 'Hamza', handle: 'Hamza', avatar: 'https://picsum.photos/seed/hamza/100', subscribers: '1.7M subscribers', text: "Great eye for composition and storytelling. The thumbnails look premium and convert better than our previous designs." },
  { id: '5', name: 'Mambahfit', handle: 'Mambahfit', avatar: 'https://picsum.photos/seed/mambah/100', subscribers: '990K subscribers', text: "Super easy to work with. The process was smooth, and the results came out better than expected." },
  { id: '6', name: 'Esraalita', handle: 'Esraalita', avatar: 'https://picsum.photos/seed/esra/100', subscribers: '230K subscribers', text: "Strong creative direction and attention to detail. The thumbnails feel high-end and on-brand." },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Can you believe I'm this good?</h2>
          <p className="text-gray-500">Listen to what other creators have said about working with me.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#EBEBEB] text-black p-6 rounded-xl relative hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div className="leading-tight">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm">{t.name}</span>
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  </div>
                  <p className="text-[10px] text-gray-500">{t.subscribers}</p>
                </div>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;