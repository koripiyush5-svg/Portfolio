import { useState, useEffect, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const cyclingPhrases = [
  "Building the future.",
  "Breaking limitations.",
  "Learning every day.",
];

const headlineWords = [
  "Throughout",
  "Heaven",
  "and",
  "Earth,",
  "I",
  "Alone",
  "Am",
  "the",
  "Developer.",
];

/* ── floating particle component ── */
const Particle = memo(function Particle({ index }: { index: number }) {
  const { size, duration, delay, startX, startY, driftX, driftY } = useMemo(() => ({
    size: 2 + Math.random() * 4,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 4,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    driftX: (Math.random() - 0.5) * 60,
    driftY: (Math.random() - 0.5) * 60,
  }), []);

  return (
    <motion.div
      key={index}
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: `${startX}%`,
        top: `${startY}%`,
        background:
          index % 3 === 0
            ? "#00d4ff"
            : index % 3 === 1
              ? "#00e5ff"
              : "#7c3aed",
        boxShadow:
          index % 2 === 0
            ? "0 0 6px 2px rgba(0,212,255,0.6)"
            : "0 0 6px 2px rgba(124,58,237,0.5)",
      }}
      animate={{
        x: [0, driftX, -driftX * 0.5, 0],
        y: [0, driftY, -driftY * 0.5, 0],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
});

/* ── Six-Eyes visual ── */
const SixEyesVisual = memo(function SixEyesVisual() {
  const rings = [
    { size: 280, border: "border-gojo-blue/30", blur: "blur-[1px]", dur: 8 },
    { size: 220, border: "border-gojo-cyan/40", blur: "blur-[0.5px]", dur: 6 },
    { size: 160, border: "border-gojo-blue/50", blur: "", dur: 5 },
    { size: 110, border: "border-gojo-violet/60", blur: "", dur: 4 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[500px]">
      {/* ambient glow backdrop */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gojo-blue/5 blur-[100px]" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gojo-violet/10 blur-[80px]" />

      {/* concentric rings */}
      {rings.map((ring, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border-2 ${ring.border} ${ring.blur}`}
          style={{ width: ring.size, height: ring.size }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            duration: ring.dur,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* tick marks on rings */}
          {[0, 90, 180, 270].map((deg) => (
            <div
              key={deg}
              className="absolute w-1.5 h-1.5 rounded-full bg-gojo-cyan/70"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${deg}deg) translateY(-${ring.size / 2}px) translate(-50%, -50%)`,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* outer pulsing halo */}
      <motion.div
        className="absolute w-[320px] h-[320px] rounded-full border border-gojo-blue/20"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* core iris */}
      <motion.div
        className="absolute w-20 h-20 rounded-full"
        style={{
          background:
            "radial-gradient(circle, #00e5ff 0%, #00d4ff 30%, #7c3aed 70%, transparent 100%)",
          boxShadow:
            "0 0 40px 10px rgba(0,212,255,0.5), 0 0 80px 20px rgba(0,212,255,0.25), inset 0 0 20px 5px rgba(0,229,255,0.3)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* pupil */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gojo-dark"
        style={{
          boxShadow: "inset 0 0 10px 4px rgba(0,212,255,0.4)",
        }}
        animate={{ scale: [1, 0.85, 1] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* light reflection */}
      <div className="absolute w-3 h-3 rounded-full bg-white/80 blur-[1px] translate-x-2 -translate-y-2" />

      {/* floating particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}

      {/* hexagonal infinity pattern (faint) */}
      <motion.svg
        className="absolute"
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
        animate={{ rotate: -360, opacity: [0.15, 0.3, 0.15] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* hexagon */}
        <polygon
          points="170,30 300,100 300,240 170,310 40,240 40,100"
          stroke="#00d4ff"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
        <polygon
          points="170,60 270,115 270,225 170,280 70,225 70,115"
          stroke="#7c3aed"
          strokeWidth="0.5"
          fill="none"
          opacity="0.3"
        />
      </motion.svg>
    </div>
  );
});

/* ── main Hero ── */
export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* container + children stagger */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* subtle top-left radial */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gojo-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gojo-violet/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ─── Left Column: Text Content ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 z-10"
          >
            {/* headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="sr-only">
                Throughout Heaven and Earth, I Alone Am the Developer.
              </span>
              <span aria-hidden="true" className="flex flex-wrap gap-x-3 gap-y-1">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariant}
                    initial="hidden"
                    animate="visible"
                    className={`text-glow-strong gradient-text ${
                      word === "Developer." ? "block w-full mt-1" : ""
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* name */}
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-wider gradient-text"
            >
              PIYUSH KORI
            </motion.h2>

            {/* role tagline */}
            <motion.p
              variants={fadeUp}
              className="text-gojo-ice/70 text-base sm:text-lg font-body max-w-xl"
            >
              Computer Science Student | Aspiring Software Developer | Open
              Source Enthusiast
            </motion.p>

            {/* supporting text */}
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base font-body max-w-lg"
            >
              Exploring code, building experiences, and turning ideas into
              reality.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
              <a
                href="#about"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-display text-sm font-semibold tracking-wide text-white rounded-full overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gojo-blue to-gojo-violet rounded-full" />
                <span className="absolute inset-0 bg-gradient-to-r from-gojo-blue to-gojo-violet rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                <span className="relative z-10">Explore My Domain</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 font-display text-sm font-semibold tracking-wide text-gojo-blue border border-gojo-blue rounded-full transition-all duration-300 hover:bg-gojo-blue/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
              >
                View My Projects
              </a>
            </motion.div>

            {/* cycling phrases */}
            <motion.div
              variants={fadeUp}
              className="h-8 mt-4 overflow-hidden relative"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-gojo-cyan/80 font-body text-lg italic"
                >
                  {cyclingPhrases[phraseIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* ─── Right Column: Six Eyes Visual ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <SixEyesVisual />
          </motion.div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gojo-ice/50 text-xs font-body tracking-widest uppercase">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gojo-blue/70" />
        </motion.div>
      </motion.div>

      {/* ─── Bottom Gradient Overlay ─── */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gojo-dark to-transparent pointer-events-none" />
    </section>
  );
}
