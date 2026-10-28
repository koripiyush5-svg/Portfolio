import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Terminal,
  Layout,
  Code2,
  GitBranch,
  Monitor,
  Lightbulb,
} from 'lucide-react';

const skills = [
  {
    name: 'Python',
    description:
      'Building logic, automating tasks, and exploring data structures.',
    Icon: Terminal,
  },
  {
    name: 'HTML & CSS',
    description:
      'Crafting the visual layer of the web with semantic markup and modern styling.',
    Icon: Layout,
  },
  {
    name: 'JavaScript',
    description:
      'Adding interactivity and dynamic behavior to web experiences.',
    Icon: Code2,
  },
  {
    name: 'Git & GitHub',
    description:
      'Version control, collaboration, and open source contributions.',
    Icon: GitBranch,
  },
  {
    name: 'Terminal & Linux',
    description:
      'Command-line workflows, scripting, and system navigation.',
    Icon: Monitor,
  },
  {
    name: 'Problem Solving',
    description:
      'Breaking down complex challenges into elegant solutions.',
    Icon: Lightbulb,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background radial glow pattern — connecting energy between cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gojo-blue/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gojo-violet/[0.04] blur-[120px]" />
        {/* Subtle grid-like connection pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="line-grad-v"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Horizontal connection lines */}
          <line
            x1="10%"
            y1="40%"
            x2="90%"
            y2="40%"
            stroke="url(#line-grad)"
            strokeWidth="1"
          />
          <line
            x1="10%"
            y1="60%"
            x2="90%"
            y2="60%"
            stroke="url(#line-grad)"
            strokeWidth="1"
          />
          {/* Vertical connection lines */}
          <line
            x1="33%"
            y1="25%"
            x2="33%"
            y2="75%"
            stroke="url(#line-grad-v)"
            strokeWidth="1"
          />
          <line
            x1="66%"
            y1="25%"
            x2="66%"
            y2="75%"
            stroke="url(#line-grad-v)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={headingVariants}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4"
          >
            THE SIX EYES <span className="text-gojo-ice/70 font-light text-xl sm:text-2xl md:text-3xl block sm:inline sm:before:content-['—_']">Seeing Beyond the Code</span>
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-gojo-ice/60 text-base sm:text-lg font-body max-w-2xl mx-auto"
          >
            Current focal areas in my technical journey — mastering fundamentals and seeing past limitations.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skills.map(({ name, description, Icon }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="glass rounded-xl p-8 animated-border group relative"
            >
              {/* Card hover glow */}
              <div className="absolute inset-0 rounded-xl bg-gojo-blue/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="relative mb-6">
                  <Icon
                    className="w-12 h-12 text-gojo-blue transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                    strokeWidth={1.5}
                  />
                  {/* Pulsing glow behind icon on hover */}
                  <div className="absolute -inset-2 bg-gojo-blue/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" />
                </div>

                {/* Skill name */}
                <h3 className="font-display text-lg text-gojo-ice mb-3 tracking-wide">
                  {name}
                </h3>

                {/* Description */}
                <p className="text-gojo-ice/60 text-sm leading-relaxed font-body">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
