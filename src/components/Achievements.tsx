import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const achievements = [
  {
    emoji: "🏆",
    title: "College Buildathon Win",
    description:
      'Won [Event Name] during the first week of college, competing with incredible teams and building something meaningful under pressure.',
    date: "[Month Year]",
    tag: "Achievement",
  },
  {
    emoji: "💻",
    title: "Hackathon Participation",
    description:
      'Participated in [Hackathon Name], collaborating with a team to build innovative solutions within tight deadlines.',
    date: "[Month Year]",
    tag: "Experience",
  },
  {
    emoji: "🌟",
    title: "Open Source Journey Begins",
    description:
      "Started contributing to open source projects, learning collaborative development workflows and making an impact in the community.",
    date: "[Month Year]",
    tag: "Milestone",
  },
  {
    emoji: "📜",
    title: "Technical Certifications",
    description:
      "Pursuing certifications to validate skills and deepen expertise in key technologies.",
    date: "In Progress",
    tag: "Learning",
  },
  {
    emoji: "🚀",
    title: "Future Internship",
    description:
      "Working toward landing a meaningful internship to gain real-world industry experience.",
    date: "Coming Soon",
    tag: "Goal",
  },
];

function TimelineNode({
  item,
  index,
}: {
  item: (typeof achievements)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex items-start gap-6 pl-8 md:pl-12">
      {/* Glowing dot on timeline */}
      <div className="absolute left-0 top-2 z-10 flex items-center justify-center">
        <span className="absolute h-6 w-6 rounded-full bg-gojo-blue/20 animate-pulse" />
        <span className="relative h-3 w-3 rounded-full bg-gojo-blue glow-blue" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
        animate={
          isInView
            ? { opacity: 1, x: 0, filter: "blur(0px)" }
            : { opacity: 0, x: -60, filter: "blur(8px)" }
        }
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="glass rounded-xl p-6 w-full group hover:border-gojo-blue/30 transition-all duration-500"
      >
        {/* Tag & Date row */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span className="bg-gojo-blue/10 text-gojo-blue text-xs rounded-full px-3 py-1 font-medium tracking-wide">
            {item.tag}
          </span>
          <span className="text-gojo-ice/40 text-sm font-mono">
            {item.date}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg text-gojo-ice mb-2 flex items-center gap-2">
          <span className="text-xl">{item.emoji}</span>
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gojo-ice/70 text-sm leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative min-h-screen py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Infinite Void background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gojo-dark via-[#080d24] to-gojo-dark" />

      {/* Star-like dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(0,212,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 35%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 40% 8%, rgba(0,229,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 42%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 70% 18%, rgba(124,58,237,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 85% 55%, rgba(0,212,255,0.4) 0%, transparent 100%),
            radial-gradient(1px 1px at 15% 65%, rgba(255,255,255,0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 30% 80%, rgba(0,229,255,0.35) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 50% 70%, rgba(168,85,247,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 65% 85%, rgba(255,255,255,0.2) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 30%, rgba(0,212,255,0.45) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 5% 45%, rgba(124,58,237,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 45% 25%, rgba(255,255,255,0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 75% 50%, rgba(0,212,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 20% 90%, rgba(168,85,247,0.25) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 60%, rgba(255,255,255,0.15) 0%, transparent 100%),
            radial-gradient(1px 1px at 35% 5%, rgba(0,229,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 95% 10%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 95%, rgba(0,212,255,0.25) 0%, transparent 100%)
          `,
        }}
      />

      {/* Radial void glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gojo-blue/[0.03] blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gojo-violet/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-display text-3xl md:text-5xl gradient-text text-glow tracking-wider mb-4">
            DOMAIN EXPANSION
          </h2>
          <p className="text-gojo-ice/60 text-base md:text-lg">
            Milestones Along the Path
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[5px] top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, #00d4ff, #7c3aed, transparent)",
            }}
          />

          <div className="flex flex-col gap-10">
            {achievements.map((item, index) => (
              <TimelineNode key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
