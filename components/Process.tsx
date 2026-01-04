import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#E50914] font-semibold tracking-wider text-xs uppercase mb-3">Process</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How I Work</h2>
          <p className="text-gray-400">Fast decisions, clean communication, and thumbnails that are built to win.</p>
        </div>

        <div className="space-y-24">
          
          {/* Step 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-gray-500 tracking-widest border border-gray-800 px-2 py-1 rounded mb-4 inline-block">STEP 01</span>
              <h3 className="text-3xl font-bold mb-4">Discover & Strategy</h3>
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Discover:</span>
                  You send the video topic and the goal (views, CTR, retention). I ask a few quick questions so we do not waste time guessing.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Strategy:</span>
                  I lock the angle: the main emotion, the hook, and the one thing the viewer must understand in 0.5 seconds.
                </li>
              </ul>
            </div>
            
            {/* Chat UI 1 */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                 <img src="https://picsum.photos/seed/ibn/50" className="w-8 h-8 rounded-full" alt="Client"/>
                 <div className="text-xs">
                    <div className="text-white font-bold flex items-center gap-1">Ibnhatuta <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                    <div className="text-gray-500">3.28M subscribers</div>
                 </div>
              </div>
              <div className="space-y-4 text-xs md:text-sm">
                <div className="bg-zinc-800 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                  Yo bro! New video. I want <span className="text-white font-bold">2 thumbnails</span> to test which one gets the better CTR.
                </div>
                <div className="bg-red-900/20 border border-red-900/50 text-red-200 p-3 rounded-2xl rounded-tr-none max-w-[90%] ml-auto">
                   Perfect. I will build two different angles for the same idea. One is more emotional, and one is more curiosity based, so we can A/B test properly.
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
             {/* Order change for desktop */}
            <div className="md:order-2">
              <span className="text-xs font-bold text-gray-500 tracking-widest border border-gray-800 px-2 py-1 rounded mb-4 inline-block">STEP 02</span>
              <h3 className="text-3xl font-bold mb-4">Design & Refinement</h3>
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Design:</span>
                  I design both options with the same core message, but different hooks. That is how the A/B test actually means something.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Refinement:</span>
                  You tell me what you like (or hate). I adjust fast until it feels obviously clickable.
                </li>
              </ul>
            </div>
            
            {/* Chat UI 2 */}
            <div className="md:order-1 bg-[#111] rounded-2xl p-6 border border-white/5 shadow-2xl relative">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                 <img src="https://picsum.photos/seed/ibn/50" className="w-8 h-8 rounded-full" alt="Client"/>
                 <div className="text-xs">
                    <div className="text-white font-bold flex items-center gap-1">Ibnhatuta <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                    <div className="text-gray-500">3.28M subscribers</div>
                 </div>
              </div>
              <div className="space-y-4 text-xs md:text-sm">
                 <div className="bg-red-900/20 border border-red-900/50 text-red-200 p-3 rounded-2xl rounded-tr-none max-w-[100%] ml-auto">
                   <p className="mb-2">Hey! Here are the two A/B options. Pick the winner, and I will polish it for upload.</p>
                   <div className="flex gap-2 mt-2">
                     <div className="h-16 w-24 bg-zinc-800 rounded border border-zinc-700 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/seed/thumb1/300/200)'}}></div>
                     <div className="h-16 w-24 bg-zinc-800 rounded border border-zinc-700 bg-cover bg-center" style={{backgroundImage: 'url(https://picsum.photos/seed/thumb2/300/200)'}}></div>
                   </div>
                </div>
                <div className="bg-zinc-800 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                  Dude, this is fire! But I would tweak a few things. Can we make it clearer on mobile?
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-gray-500 tracking-widest border border-gray-800 px-2 py-1 rounded mb-4 inline-block">STEP 03</span>
              <h3 className="text-3xl font-bold mb-4">Final Delivery</h3>
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Delivery:</span>
                  You receive the final thumbnail in full quality, ready to upload.
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-white shrink-0">• Done:</span>
                  If you want, we track the result and keep improving the style so each next upload gets stronger.
                </li>
              </ul>
            </div>
            
            {/* Chat UI 3 */}
            <div className="bg-[#111] rounded-2xl p-6 border border-white/5 shadow-2xl relative">
               <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                 <img src="https://picsum.photos/seed/ibn/50" className="w-8 h-8 rounded-full" alt="Client"/>
                 <div className="text-xs">
                    <div className="text-white font-bold flex items-center gap-1">Ibnhatuta <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></div>
                    <div className="text-gray-500">3.28M subscribers</div>
                 </div>
              </div>
              <div className="space-y-4 text-xs md:text-sm">
                <div className="bg-red-900/20 border border-red-900/50 text-red-200 p-3 rounded-2xl rounded-tr-none max-w-[90%] ml-auto">
                   <p className="mb-2">Revisions are ready, bro. The winner is cleaned up for mobile, the text is sharper, and the focal point pops more.</p>
                   <p className="font-bold underline text-white cursor-pointer">Drive link: drive.google.com/...</p>
                </div>
                <div className="bg-zinc-800 text-gray-200 p-3 rounded-2xl rounded-tl-none max-w-[90%]">
                  Thanks, man I am uploading now. Next video, same workflow.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;