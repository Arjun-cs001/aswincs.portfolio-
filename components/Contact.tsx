import React from 'react';
import { ArrowUpRight, Instagram, Mail, MessageSquare, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#E50914] text-xs font-semibold uppercase tracking-wider mb-3">Let's talk</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-400 text-sm">Questions about a project, partnerships, or anything else? Reach out on any platform below.</p>
        </div>

        <div className="space-y-4">
          {/* Main Card */}
          <div className="bg-[#1a0505] border border-red-900/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 group hover:border-red-600/50 transition-colors">
            <div>
              <p className="text-xs text-red-500 font-bold uppercase tracking-widest mb-2">Direct Contact</p>
              <h3 className="text-2xl font-bold text-white mb-4">Contact me on WhatsApp</h3>
              <button className="bg-[#E50914] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                Contact me
              </button>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 rounded-xl overflow-hidden shadow-2xl rotate-3 group-hover:rotate-6 transition-transform">
               <img src="https://picsum.photos/seed/sohayb/200" alt="Avatar" className="w-full h-full object-cover"/>
            </div>
          </div>

          {/* Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-full border border-white/10 text-white">
                  <Twitter size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white">X (Twitter)</h4>
                  <p className="text-xs text-gray-500">Updates & posts</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>

            <a href="#" className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-full border border-white/10 text-white">
                  <Instagram size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white">Instagram</h4>
                  <p className="text-xs text-gray-500">Thumbnails & behind the scenes</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>

            <a href="#" className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-full border border-white/10 text-white">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white">Email</h4>
                  <p className="text-xs text-gray-500">sohaybflay@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>

             <a href="#" className="flex items-center justify-between p-6 bg-zinc-900/50 border border-white/5 rounded-2xl hover:bg-zinc-900 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-black rounded-full border border-white/10 text-white">
                  <MessageSquare size={18} />
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-sm text-white">Discord</h4>
                  <p className="text-xs text-gray-500">DM me directly</p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;