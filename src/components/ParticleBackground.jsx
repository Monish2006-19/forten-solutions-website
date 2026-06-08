/**
 * Animated Gradient Mesh Background
 * Slowly drifting, blurred colour blobs that together form an organic
 * gradient-mesh effect — inspired by Apple Vision Pro / Linear.app.
 * Pure CSS + React, zero extra dependencies.
 */
export default function ParticleBackground() {
  return (
    <>
      {/* Inline keyframes for blob drift animations */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          25%      { transform: translate(80px, -60px)  scale(1.08); }
          50%      { transform: translate(-50px, 80px)  scale(0.95); }
          75%      { transform: translate(-80px,-40px)  scale(1.05); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          20%      { transform: translate(-70px, 50px)  scale(1.1);  }
          55%      { transform: translate(90px,  70px)  scale(0.92); }
          80%      { transform: translate(40px, -80px)  scale(1.06); }
        }
        @keyframes blob3 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          30%      { transform: translate(60px,  80px)  scale(1.12); }
          60%      { transform: translate(-90px,-50px)  scale(0.9);  }
          85%      { transform: translate(30px,  60px)  scale(1.04); }
        }
        @keyframes blob4 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          40%      { transform: translate(-60px,-70px)  scale(1.08); }
          70%      { transform: translate(70px,  30px)  scale(0.94); }
        }
        @keyframes blob5 {
          0%,100% { transform: translate(0px,   0px)   scale(1);    }
          35%      { transform: translate(50px, -90px)  scale(1.1);  }
          65%      { transform: translate(-40px, 60px)  scale(0.96); }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {/* Blob 1 — deep violet, top-left */}
        <div style={{
          position: 'absolute',
          top: '-15%', left: '-10%',
          width: '55vw', height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(124,58,237,0.055) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'blob1 18s ease-in-out infinite',
        }} />

        {/* Blob 2 — violet, top-right */}
        <div style={{
          position: 'absolute',
          top: '-20%', right: '-15%',
          width: '60vw', height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(99,60,180,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'blob2 22s ease-in-out infinite',
        }} />

        {/* Blob 3 — purple, center */}
        <div style={{
          position: 'absolute',
          top: '30%', left: '25%',
          width: '50vw', height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(79,50,170,0.03) 0%, transparent 70%)',
          filter: 'blur(90px)',
          animation: 'blob3 26s ease-in-out infinite',
        }} />

        {/* Blob 4 — deep purple, bottom-left */}
        <div style={{
          position: 'absolute',
          bottom: '-10%', left: '-5%',
          width: '45vw', height: '45vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(109,40,217,0.04) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'blob4 20s ease-in-out infinite',
        }} />

        {/* Blob 5 — violet, bottom-right */}
        <div style={{
          position: 'absolute',
          bottom: '0%', right: '-10%',
          width: '50vw', height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(124,58,237,0.035) 0%, transparent 70%)',
          filter: 'blur(110px)',
          animation: 'blob5 24s ease-in-out infinite',
        }} />

        {/* Sharp center glow — hero accent */}
        <div style={{
          position: 'absolute',
          top: '0%', left: '50%',
          width: '40vw', height: '40vw',
          transform: 'translateX(-50%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(124,58,237,0.035) 0%, transparent 65%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }} />

        {/* Grain / noise texture overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
          pointerEvents: 'none',
        }} />
      </div>
    </>
  );
}
