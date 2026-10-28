import { useMemo } from 'react';

interface ParticleConfig {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  opacity: number;
  driftX: number;
  driftY: number;
}

interface EnergyOrbConfig {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  color: string;
}

export default function ParticleField() {
  const particles = useMemo<ParticleConfig[]>(() => {
    return Array.from({ length: 50 }, (_, i) => {
      const isViolet = i % 7 === 0; // roughly 7 out of 50 are violet
      return {
        id: i,
        size: 2 + Math.random() * 2, // 2-4px
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 18, // 12-30s
        color: isViolet ? '#7c3aed' : '#00d4ff',
        opacity: 0.1 + Math.random() * 0.3, // 0.1-0.4
        driftX: -30 + Math.random() * 60, // -30px to +30px
        driftY: -30 + Math.random() * 60,
      };
    });
  }, []);

  const energyOrbs = useMemo<EnergyOrbConfig[]>(() => {
    const positions = [
      { top: 10, left: 8 },
      { top: 70, left: 85 },
      { top: 25, left: 75 },
      { top: 80, left: 15 },
    ];

    return positions.map((pos, i) => ({
      id: i,
      size: 100 + Math.random() * 100, // 100-200px
      top: pos.top + Math.random() * 5,
      left: pos.left + Math.random() * 5,
      delay: i * 2.5,
      duration: 20 + Math.random() * 10, // 20-30s
      opacity: 0.03 + Math.random() * 0.02, // 0.03-0.05
      color: i === 2 ? '#7c3aed' : '#00d4ff',
    }));
  }, []);

  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes particle-drift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(var(--drift-x), calc(var(--drift-y) * -0.6)) scale(1.15);
          }
          50% {
            transform: translate(calc(var(--drift-x) * -0.5), var(--drift-y)) scale(0.9);
          }
          75% {
            transform: translate(calc(var(--drift-x) * 0.7), calc(var(--drift-y) * -0.3)) scale(1.05);
          }
        }

        @keyframes orb-float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(15px, -20px) scale(1.08);
          }
          66% {
            transform: translate(-10px, 15px) scale(0.95);
          }
        }

        @keyframes orb-pulse {
          0%, 100% {
            opacity: var(--orb-opacity);
          }
          50% {
            opacity: calc(var(--orb-opacity) * 1.6);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .particle-animated,
          .orb-animated {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
        aria-hidden="true"
      >
        {/* Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full particle-animated"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${p.top}%`,
              left: `${p.left}%`,
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
              ['--drift-x' as string]: `${p.driftX}px`,
              ['--drift-y' as string]: `${p.driftY}px`,
              animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
              willChange: 'transform',
            }}
          />
        ))}

        {/* Energy Orbs */}
        {energyOrbs.map((orb) => (
          <div
            key={`orb-${orb.id}`}
            className="absolute rounded-full orb-animated"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              top: `${orb.top}%`,
              left: `${orb.left}%`,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              ['--orb-opacity' as string]: orb.opacity,
              opacity: orb.opacity,
              filter: `blur(${orb.size * 0.3}px)`,
              animation: `orb-float ${orb.duration}s ease-in-out ${orb.delay}s infinite, orb-pulse ${orb.duration * 0.6}s ease-in-out ${orb.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}

        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-bg" />
      </div>
    </>
  );
}
