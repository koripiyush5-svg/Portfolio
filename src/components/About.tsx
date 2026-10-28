import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Heart, Zap, Target } from 'lucide-react';

const infoCards = [
  {
    label: 'Current Focus',
    text: 'Python, Git, and Development',
    Icon: Code,
  },
  {
    label: 'Passion',
    text: 'Open Source and Problem Solving',
    Icon: Heart,
  },
  {
    label: 'Mindset',
    text: 'Continuous Learning',
    Icon: Zap,
  },
  {
    label: 'Goal',
    text: 'Internships, Hackathons, and Real-World Impact',
    Icon: Target,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gojo-blue/5 blur-[160px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text text-glow mb-8"
        >
          BEYOND THE LIMITLESS
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center text-lg text-gojo-ice/80 leading-relaxed mb-16"
        >
          I&apos;m a computer science student passionate about technology,
          programming, and creating things that solve real-world problems.
          I&apos;m exploring Python, terminal commands, Git, and open source
          while continuously improving my technical and leadership skills. I
          enjoy collaborating with new people, participating in hackathons, and
          turning ambitious ideas into working projects.
        </motion.p>

        {/* Info Cards Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {infoCards.map(({ label, text, Icon }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass rounded-xl p-6 border border-gojo-blue/10 hover:border-gojo-blue/30 hover:glow-blue transition-all duration-300 group"
            >
              <div className="relative mb-4">
                <Icon className="w-8 h-8 text-gojo-blue transition-transform duration-300 group-hover:scale-110" />
                {/* Icon glow on hover */}
                <div className="absolute inset-0 w-8 h-8 bg-gojo-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-sm text-gojo-blue uppercase tracking-wider mb-2">
                {label}
              </h3>
              <p className="text-gojo-ice/70 text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
