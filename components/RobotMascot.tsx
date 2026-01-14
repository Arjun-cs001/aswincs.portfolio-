import React, { useEffect, useRef, useState } from 'react';

const RobotMascot: React.FC = () => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, x: 0, y: 0 });
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!robotRef.current) return;

      const rect = robotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from center of robot
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Screen dimensions for normalization
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Configuration
      const maxRot = 15; 
      const maxMove = 25; 

      // Rotation Math (Look at cursor)
      const rotateY = (deltaX / screenWidth) * maxRot * 2.5; 
      const rotateX = -(deltaY / screenHeight) * maxRot * 2.5;

      // Clamp rotation
      const clampedRotY = Math.max(-maxRot, Math.min(maxRot, rotateY));
      const clampedRotX = Math.max(-maxRot, Math.min(maxRot, rotateX));

      // Translation Math (Follow cursor)
      const moveX = (deltaX / screenWidth) * maxMove;
      const moveY = (deltaY / screenHeight) * maxMove;

      setTransform({ 
        rotateX: clampedRotX, 
        rotateY: clampedRotY, 
        x: moveX, 
        y: moveY 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed bottom-0 left-0 z-50 hidden md:flex items-end justify-start pointer-events-none p-4 perspective-[1000px]"
    >
      {/* Mouse Interaction Wrapper */}
      <div
        ref={robotRef}
        className="w-[350px] transition-transform duration-100 ease-out will-change-transform mix-blend-screen"
        style={{
          transform: `
            translate3d(${transform.x}px, ${transform.y}px, 0) 
            rotateX(${transform.rotateX}deg) 
            rotateY(${transform.rotateY}deg)
          `
        }}
      >
        {/* Floating Animation Wrapper */}
        <div className="w-full animate-[float-gentle_6s_ease-in-out_infinite]">
          <video
            src="https://res.cloudinary.com/dcnz8e0nz/video/upload/Untitled_1_oxxacg.mp4"
            poster="https://res.cloudinary.com/dcnz8e0nz/image/upload/Untitled_1_oxxacg.png"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default RobotMascot;