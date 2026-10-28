import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    level: 1,
    title: "Mastering Python Fundamentals",
    description:
      "Building a strong foundation in programming logic, data structures, and algorithmic thinking.",
    progress: 60,
  },
  {
    level: 2,
    title: "Terminal & Git Workflows",
    description:
      "Becoming fluent in command-line operations, version control, and collaborative development.",
    progress: 45,
  },
  {
    level: 3,
    title: "Exploring Open Source",
    description:
      "Learning to read codebases, contribute meaningfully, and work with the global developer community.",
    progress: 30,
  },
  {
    level: 4,
    title: "Building Real-World Projects",
    description:
      "Applying skills to create applications that solve genuine problems.",
    progress: 35,
  },
  {
    level: 5,
    title: "Leadership & Communication",
    description:
      "Improving teamwork, public speaking, and the ability to lead technical projects.",
    progress: 40,
  },
];

function MilestoneCard({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 50, filter: "blur(6px)" }
      }
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass rounded-xl p-6 group hover:border-gojo-blue/30 transition-all duration-500"
    >
      <div className="flex items-start gap-5">
        {/* Level indicator */}
        <div className="flex flex-col items-center shrink-0">
          <span className="text-xs text-gojo-ice/40 font-mono tracking-widest uppercase">
            LVL
          </span>
          <span className="font-display text-2xl gradient-text leading-none mt-1">
            {item.level}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-md text-gojo-ice mb-1 tracking-wide">
            {item.title}
          </h3>
          <p className="text-gojo-ice/60 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          {/* Progress bar */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-gojo-ice/40 font-mono">
                Progress
              </span>
              <span className="text-xs text-gojo-blue font-mono font-medium">
                {item.progress}%
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-gojo-navy overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(to right, #00d4ff, #7c3aed)",
                }}
                initial={{ width: 0 }}
                animate={
                  isInView
                    ? { width: `${item.progress}%` }
                    : { width: 0 }
                }
                transition={{
                  duration: 1.2,
                  delay: index * 0.12 + 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Learning() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="learning"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gojo-dark via-gojo-navy/50 to-gojo-dark" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gojo-violet/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gojo-blue/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl gradient-text tracking-wider mb-4">
            THE GRIND NEVER ENDS
          </h2>
          <p className="text-gojo-ice/60 text-base md:text-lg">
            My Ongoing Journey of Growth
          </p>
        </motion.div>

        {/* Milestone cards */}
        <div className="flex flex-col gap-5">
          {milestones.map((item, index) => (
            <MilestoneCard key={item.level} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
