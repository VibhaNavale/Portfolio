import React, { useMemo } from 'react';

export default function PageDecorations() {
  // Generate random positions for decorative elements - memoized for consistency
  const decorations = useMemo(() => {
    const decs = [];
    
    // Left side decorations - spread vertically along the edge
    for (let i = 0; i < 12; i++) {
      const rand = Math.random();
      const topPosition = (i * 8) + (rand * 5); // Spread evenly with slight randomness
      const distanceFromEdge = rand * 8; // 0-8% from edge
      const opacity = 0.7 - (distanceFromEdge * 0.05); // Higher opacity near edge, fades toward center
      
      decs.push({
        id: `left-${i}`,
        side: 'left',
        top: `${topPosition}%`,
        left: `${distanceFromEdge}%`,
        size: `${15 + rand * 35}px`,
        rotation: `${rand * 360}deg`,
        opacity: Math.max(0.35, opacity),
        type: rand > 0.5 ? 'circle' : 'squiggle',
        gradId: `grad-left-${i}`
      });
    }
    
    // Right side decorations - spread vertically along the edge
    for (let i = 0; i < 12; i++) {
      const rand = Math.random();
      const topPosition = (i * 8) + (rand * 5); // Spread evenly with slight randomness
      const distanceFromEdge = rand * 8; // 0-8% from edge
      const opacity = 0.7 - (distanceFromEdge * 0.05); // Higher opacity near edge, fades toward center
      
      decs.push({
        id: `right-${i}`,
        side: 'right',
        top: `${topPosition}%`,
        right: `${distanceFromEdge}%`,
        size: `${15 + rand * 35}px`,
        rotation: `${rand * 360}deg`,
        opacity: Math.max(0.35, opacity),
        type: rand > 0.5 ? 'circle' : 'squiggle',
        gradId: `grad-right-${i}`
      });
    }
    
    // Middle decorations - more transparent, spread out
    for (let i = 0; i < 8; i++) {
      const rand = Math.random();
      const topPosition = rand * 100;
      const leftPosition = 30 + rand * 40; // Between 30-70% from left
      const distanceFromCenter = Math.abs(50 - leftPosition); // Distance from center
      const opacity = 0.3 - (distanceFromCenter * 0.003); // Fades as it moves away from center
      
      decs.push({
        id: `middle-${i}`,
        side: 'middle',
        top: `${topPosition}%`,
        left: `${leftPosition}%`,
        size: `${10 + rand * 25}px`,
        rotation: `${rand * 360}deg`,
        opacity: Math.max(0.15, opacity),
        type: rand > 0.6 ? 'circle' : 'squiggle',
        gradId: `grad-middle-${i}`
      });
    }
    
    return decs;
  }, []);

  const generateSquigglePath = (seed, pathNum = 1) => {
    const base = seed * 100;
    if (pathNum === 1) {
      return `M 10,${30 + base % 20} Q ${25 + base % 15},${15 + base % 10} ${45 + base % 20},${25 + base % 15} Q ${65 + base % 15},${35 + base % 10} ${85 + base % 10},${40 + base % 20}`;
    } else {
      return `M 15,${60 + base % 15} Q ${35 + base % 20},${50 + base % 15} ${55 + base % 15},${55 + base % 10} Q ${70 + base % 20},${60 + base % 15} ${85 + base % 10},${70 + base % 20}`;
    }
  };

  const SquiggleSVG = ({ size, rotation, opacity, gradId, seed }) => {
    const path1 = generateSquigglePath(seed, 1);
    const path2 = generateSquigglePath(seed + 0.5, 2);
    
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        style={{ 
          transform: `rotate(${rotation})`,
          opacity: opacity,
          overflow: 'visible'
        }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(249, 217, 118, 1)" />
            <stop offset="100%" stopColor="rgba(243, 159, 134, 1)" />
          </linearGradient>
        </defs>
        <path
          d={path1}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={path2}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="page-decorations">
      {decorations.map((dec) => {
        const seed = parseFloat(dec.id.split('-')[1]) || 0;
        return (
          <div
            key={dec.id}
            className={`decoration decoration-${dec.type}`}
            style={{
              position: 'fixed',
              top: dec.top,
              left: dec.side === 'left' || dec.side === 'middle' ? dec.left : undefined,
              right: dec.side === 'right' ? dec.right : undefined,
              width: dec.size,
              height: dec.size,
              transform: `rotate(${dec.rotation})`,
              opacity: dec.opacity,
              zIndex: 1,
              pointerEvents: 'none',
            }}
          >
            {dec.type === 'circle' ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, rgba(249, 217, 118, 0.9), rgba(243, 159, 134, 0.9))`,
                  filter: 'blur(1.5px)',
                }}
              />
            ) : (
              <SquiggleSVG
                size={dec.size}
                rotation={dec.rotation}
                opacity={dec.opacity}
                gradId={dec.gradId}
                seed={seed}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

