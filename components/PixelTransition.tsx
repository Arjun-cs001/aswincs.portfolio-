import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

// --- Context Definition ---
interface TransitionContextType {
  navigate: (to: string) => void;
  isAnimating: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

// --- Pixel Cursor Component ---
const PixelCursor = ({ active }: { active: boolean }) => {
  return (
    <div 
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[60] transition-opacity duration-200 ${
        active ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 
        Cursor Container 
        - Scales up on click
        - Adds motion blur during the fast scale action
      */}
      <div className={`relative transition-transform ${active ? 'animate-click-impact' : 'scale-50'}`}>
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
          style={{ imageRendering: 'pixelated' }}
        >
          {/* White Border/Fill */}
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M7.5 2.5H5.5V4.5H4.5V9.5H5.5V11.5H6.5V12.5H7.5V13.5H9.5V15.5H11.5V17.5H13.5V22.5H16.5V17.5H18.5V14.5H19.5V12.5H21.5V11.5H22.5V9.5H23.5V8.5H24.5V2.5H7.5ZM7.5 4.5H22.5V8.5H20.5V9.5H19.5V11.5H17.5V13.5H16.5V15.5H13.5V13.5H11.5V11.5H10.5V9.5H8.5V8.5H7.5V4.5Z" 
            fill="white"
          />
          {/* Black Outline for Contrast */}
          <path 
            d="M5.5 2.5H7.5V4.5H22.5V8.5H20.5V9.5H19.5V11.5H17.5V13.5H16.5V15.5H13.5V13.5H11.5V11.5H10.5V9.5H8.5V8.5H7.5V11.5H6.5V12.5H5.5V13.5H3.5V11.5H4.5V9.5H3.5V4.5H5.5V2.5ZM13.5 15.5V17.5H11.5V15.5H13.5ZM16.5 17.5V22.5H13.5V17.5H16.5Z" 
            fill="black" 
            fillOpacity="0.3"
          />
        </svg>
      </div>
    </div>
  );
};

// --- Main Provider Component ---
export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  
  // Animation state to avoid closure staleness
  const state = useRef({
    startTime: 0,
    type: 'in' as 'in' | 'out', // 'in' = covering screen, 'out' = revealing new screen
    targetId: '',
    width: 0,
    height: 0
  });

  const navigate = (to: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowCursor(true);
    state.current.targetId = to;

    // Timing: 
    // 0ms: Cursor appears
    // 0-400ms: Cursor 'anticipation' and 'click' animation (handled by CSS)
    // 350ms: Canvas transition starts (slightly overlapping with click impact)
    
    setTimeout(() => {
      startCanvasAnimation('in');
    }, 350);
  };

  const startCanvasAnimation = (type: 'in' | 'out') => {
    state.current.type = type;
    state.current.startTime = performance.now();
    
    if (type === 'out') {
      // Hide cursor once the screen is fully black, so it doesn't obstruct the new page reveal
      setShowCursor(false);
    }
    
    cancelAnimationFrame(requestRef.current!);
    requestRef.current = requestAnimationFrame(animate);
  };

  const animate = (time: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { startTime, type, targetId, width, height } = state.current;
    
    // Transition Settings
    const duration = 600; // 0.6s for the pixel wipe
    const blockSize = 40; // Size of pixels (sharp/retro look)
    
    const elapsed = time - startTime;
    const rawProgress = Math.min(elapsed / duration, 1);
    
    // Ease Out Quart for snappy movement
    const ease = 1 - Math.pow(1 - rawProgress, 4);

    // Calculate Grid
    const cols = Math.ceil(width / blockSize);
    const rows = Math.ceil(height / blockSize);
    
    // Max radius from center to corner
    const maxRadius = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
    
    // Animation Logic:
    // IN: Radius grows from 0 to Max (Black expands)
    // OUT: Radius grows from 0 to Max (Black is REMOVED from center outward)
    // We add 'blockSize * 4' to radius calculation to account for the dithering edge.
    const currentRadius = ease * (maxRadius + blockSize * 4);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#050505'; // Matches body background

    // Optimize rendering: only calculate blocks roughly within the active band
    // But for simplicity and robustness, we iterate mostly everything but could optimize bounds if needed.
    
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        // Pixel Center Coordinates relative to Screen Center
        const px = x * blockSize + blockSize / 2;
        const py = y * blockSize + blockSize / 2;
        const dx = px - width / 2;
        const dy = py - height / 2;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let shouldFill = false;

        // Dithering Logic:
        // We want a "noisy" edge.
        // If dist is way less than radius, fill.
        // If dist is near radius, fill randomly.
        
        // Jitter amount based on block index to make it deterministic but "random looking"
        const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
        const randomVal = seed - Math.floor(seed);
        
        // Edge width for dithering
        const edge = blockSize * 3;

        if (type === 'in') {
            // Covering: Draw if dist < radius
            if (dist < currentRadius - edge) {
                shouldFill = true;
            } else if (dist < currentRadius) {
                // Dither zone
                // Closer to radius = less likely to fill
                const prob = 1 - (dist - (currentRadius - edge)) / edge;
                if (randomVal < prob) shouldFill = true;
            }
        } else {
            // Revealing: The screen starts full black (conceptually).
            // We want to ERASE black from center.
            // So we DRAW black if dist > radius.
            
            if (dist > currentRadius + edge) {
                shouldFill = true;
            } else if (dist > currentRadius) {
                 // Dither zone
                 // Closer to radius = less likely to fill (more likely to be erased)
                 const prob = (dist - currentRadius) / edge;
                 if (randomVal < prob) shouldFill = true;
            }
        }

        if (shouldFill) {
            // Draw slightly larger to avoid subpixel lines
            ctx.fillRect(x * blockSize, y * blockSize, blockSize + 0.5, blockSize + 0.5);
        }
      }
    }

    if (rawProgress < 1) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      // Phase Complete
      if (type === 'in') {
        // Screen is covered. Perform the jump.
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        } else if (targetId === '#top') {
           window.scrollTo(0, 0);
        }
        
        // Immediately start reveal
        startCanvasAnimation('out');
      } else {
        // Animation totally done
        setIsAnimating(false);
        ctx.clearRect(0, 0, width, height); // Cleanup
      }
    }
  };

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        state.current.width = window.innerWidth;
        state.current.height = window.innerHeight;
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Init
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigate, isAnimating }}>
      {children}
      
      {/* Overlay Layers */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center ${isAnimating ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block absolute inset-0"
        />
        <PixelCursor active={showCursor} />
      </div>
      
      <style>{`
        @keyframes click-impact {
          0% { transform: scale(1); filter: blur(0px); }
          40% { transform: scale(0.6); filter: blur(0px); } /* Anticipation */
          80% { transform: scale(1.4); filter: blur(2px); } /* Impact + Blur */
          100% { transform: scale(1.4); filter: blur(0px); }
        }
        .animate-click-impact {
          animation: click-impact 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;