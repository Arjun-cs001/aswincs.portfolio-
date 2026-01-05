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
      // Reduced max rotation slightly because the new robot is wider (tools might clip or look flat)
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
      className="fixed bottom-0 left-0 z-40 hidden lg:flex items-end justify-start pointer-events-none p-10 perspective-[1000px]"
    >
      <div
        ref={robotRef}
        // Increased container size to w-72 h-72 to accommodate the floating tools around the robot
        className="w-72 h-72 transition-transform duration-100 ease-out will-change-transform filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        style={{
          transform: `
            translate3d(${transform.x}px, ${transform.y}px, 0) 
            rotateX(${transform.rotateX}deg) 
            rotateY(${transform.rotateY}deg)
          `
        }}
      >
        <img 
          src="/designer-robot.png" 
          alt="Designer Robot Mascot" 
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // Fallback to the generic robot if the file isn't present yet
            e.currentTarget.src = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Robot.png";
          }}
        />
      </div>
    </div>
  );
};

export default RobotMascot;