import React, { useEffect, useRef, useState } from 'react';

// Card data configuration
const cards = [
  // Left side
  { id: 1, x: -35, y: -25, z: -50, scale: 0.8, rotX: 10, rotY: 15, img: 'https://picsum.photos/seed/tech1/400/225', anim: 'animate-float-slow' },
  { id: 2, x: -45, y: 15, z: -150, scale: 0.6, rotX: -5, rotY: 25, img: 'https://picsum.photos/seed/game1/400/225', anim: 'animate-float-medium' },
  
  // Right side
  { id: 3, x: 35, y: -30, z: -80, scale: 0.8, rotX: 15, rotY: -15, img: 'https://picsum.photos/seed/vlog1/400/225', anim: 'animate-float-slow' },
  { id: 4, x: 45, y: 20, z: -120, scale: 0.7, rotX: -10, rotY: -20, img: 'https://picsum.photos/seed/edu1/400/225', anim: 'animate-float-fast' },
  
  // Center background
  { id: 5, x: 0, y: -40, z: -200, scale: 0.5, rotX: 20, rotY: 0, img: 'https://picsum.photos/seed/abs1/400/225', anim: 'animate-float-slow' },
];

const HeroBackground3D: React.FC = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [smoothMouse, setSmoothMouse] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth interpolation loop
  useEffect(() => {
    const loop = () => {
      setSmoothMouse(prev => ({
        x: prev.x + (mouse.x - prev.x) * 0.05,
        y: prev.y + (mouse.y - prev.y) * 0.05
      }));
      requestRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(requestRef.current!);
  }, [mouse]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="relative w-full h-full transform-style-3d">
        {cards.map((card) => {
          // Calculate dynamic transforms
          // Mouse influence is inverted for depth effect
          const moveX = smoothMouse.x * -30; 
          const moveY = smoothMouse.y * -30;
          const rotateX = card.rotX - (smoothMouse.y * 10);
          const rotateY = card.rotY + (smoothMouse.x * 10);

          return (
            <div
              key={card.id}
              className={`absolute left-1/2 top-1/2 will-change-transform ${card.anim}`}
              style={{
                width: '300px',
                height: '169px',
                transform: `
                  translate3d(calc(-50% + ${card.x}vw), calc(-50% + ${card.y}vh), ${card.z}px)
                  rotateX(${rotateX}deg)
                  rotateY(${rotateY}deg)
                  translate3d(${moveX}px, ${moveY}px, 0)
                  scale(${card.scale})
                `,
                zIndex: -1,
                opacity: 0.4
              }}
            >
              {/* Glassmorphism Card */}
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/5 z-10"></div>
                
                {/* Red accent glow on hover/move */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent rotate-45 translate-x-[-100%] animate-[pulse_3s_infinite]"></div>

                <img 
                  src={card.img} 
                  alt="3D element" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          );
        })}
        
        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute bg-red-500/30 rounded-full blur-[1px] animate-float-medium"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              transform: `translateZ(${Math.random() * -200}px)`,
              animationDelay: Math.random() * 5 + 's',
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackground3D;