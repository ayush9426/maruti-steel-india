import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [scene, setScene] = useState(1);

  // Programmatic Web Audio Synthesizer for a premium metallic chime sound
  const playStartupChime = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const playNote = (freq, delayTime, duration, vol) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delayTime);
        
        gain.gain.setValueAtTime(0, ctx.currentTime + delayTime);
        gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + delayTime + 0.08); // soft attack
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + delayTime + duration); // smooth decay
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delayTime);
        osc.stop(ctx.currentTime + delayTime + duration + 0.5);
      };

      // Arpeggiated high-quality metallic chime chord synchronized with the metal sweep (1.0s start)
      playNote(440.00, 1.0, 3.0, 0.06); // A4 (gentle low pad)
      playNote(659.25, 1.15, 2.5, 0.05); // E5 (harmony)
      playNote(880.00, 1.3, 2.2, 0.05); // A5 (higher octave chime)
      playNote(1046.50, 1.45, 2.0, 0.04); // C6 (chrome ping highlight)
      playNote(1318.51, 1.6, 3.0, 0.03); // E6 (ultra-high shimmer tone)
    } catch (e) {
      console.warn("Audio Context blocked or unsupported by browser autoplay policy", e);
    }
  };

  // Generate coordinates for 30 floating particles once using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px size
      delay: Math.random() * 0.8,
      duration: Math.random() * 2.5 + 2.0,
      initialX: (Math.random() - 0.5) * 800,
      initialY: (Math.random() - 0.5) * 800,
    }));
  }, []);

  // Optimized scene transition sequence (8.0s total)
  useEffect(() => {
    // Play startup chime right after mount
    playStartupChime();

    // Timed sequence
    const scene2Timer = setTimeout(() => setScene(2), 1000); // 1.0s -> Scene 2 (Sweep & Logo reveal)
    const scene3Timer = setTimeout(() => setScene(3), 2200); // 2.2s -> Scene 3 (Text reveal & stationary display)
    const scene5Timer = setTimeout(() => setScene(5), 6500); // 6.5s -> Scene 5 (Dissolve)

    return () => {
      clearTimeout(scene2Timer);
      clearTimeout(scene3Timer);
      clearTimeout(scene5Timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden select-none"
    >
      {/* Background Soft Gradients and Radial Glow (Scene 1) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F5F5FF] to-[#E4E4FF] opacity-90" />
        
        {/* Soft Lavender center glow appearing in Scene 1 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-[#6260FF]/10 blur-[120px]"
        />
      </div>

      {/* Floating Metallic Particles Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ x: p.initialX, y: p.initialY, opacity: 0, scale: 0 }}
            animate={
              scene === 5
                ? { x: p.initialX * 2, y: p.initialY * 2, opacity: 0, scale: 0 }
                : { x: 0, y: 0, opacity: [0, 0.8, 0], scale: 1 }
            }
            transition={{
              duration: scene === 5 ? 1.4 : p.duration,
              delay: scene === 5 ? 0 : p.delay,
              ease: scene === 5 ? "easeOut" : "easeInOut",
              repeat: scene === 5 ? 0 : Infinity,
            }}
            className="absolute rounded-full bg-gradient-to-br from-white via-[#E4E4FF] to-[#C5C4FF] shadow-sm"
            style={{
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Scene 2 & 3: Brushed Stainless Steel Card Plate (Wrapper) */}
      <AnimatePresence>
        {scene >= 2 && (
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 w-[90vw] sm:w-[80vw] md:w-[60vw] max-w-2xl h-[45vh] max-h-[380px] flex items-center justify-center pointer-events-none"
          >
            {/* Inner Card (with overflow-hidden for texture & light sweep) */}
            <div className="absolute inset-0 rounded-[36px] overflow-hidden border border-white/60 shadow-premium-lg bg-gradient-to-br from-white/95 via-[#F5F5FF]/95 to-[#E4E4FF]/90 backdrop-blur-xl pointer-events-auto flex flex-col items-center justify-center p-6 sm:p-10">
              
              {/* Brushed Metal Specular Texture Lines */}
              <div 
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 8px)',
                  backgroundSize: '100% 100%',
                }}
              />

              {/* Bright Chrome Sweep Reflective Light */}
              <motion.div
                initial={{ x: '-150%', skewX: -25 }}
                animate={{ x: '250%' }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-3/4 pointer-events-none"
              />

              {/* Logo and Typography Container - Clean and tightly aligned */}
              <div className="flex flex-col items-center z-10 space-y-4 text-center">
                
                {/* Logo reveal (no outline circle, clean floating emblem) */}
                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.0, ease: "easeOut" }}
                  className="relative w-18 h-18 sm:w-22 sm:h-22 flex items-center justify-center"
                >
                  <img
                    src="/images/logo_transparent.png"
                    alt="Maruti Steel Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain filter contrast-110 brightness-105 saturate-[0.85]"
                  />
                </motion.div>

                {/* Scene 3: Company Name & Subtitle Fade-in */}
                {scene >= 3 && (
                  <div className="space-y-2">
                    <motion.h1
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                      className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gradient font-sans"
                    >
                      MARUTI STEEL INDIA
                    </motion.h1>

                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 0.8 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                      className="text-[10px] sm:text-xs text-text-muted max-w-xs sm:max-w-md font-semibold tracking-wide"
                    >
                      Manufacturer & Stockist of Premium Stainless Steel Products
                    </motion.p>

                    {/* Thin Glowing Divider Line */}
                    <div className="flex justify-center pt-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="h-[2px] bg-[#6260FF] shadow-[0_0_8px_rgba(98,96,255,0.6)] rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
