import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Play, GitBranch, Code2, Eye, Braces } from "lucide-react";

interface ProjectData {
  techniqueAccent: string;
  accentColor: string;
  title: string;
  description: string;
  techStack: string[];
  buttons: { label: string; icon: "external" | "play" | "git"; href: string }[];
  visual: "surveillance" | "coming-soon" | "open-source";
  glowColor: string;
}

const projects: ProjectData[] = [
  {
    techniqueAccent: "BLUE",
    accentColor: "text-gojo-blue/40",
    title: "AI-Powered Intelligent Surveillance",
    description:
      "Multi-camera tracking system with object detection, dynamic risk scoring, and real-time alerts. Built to make environments safer through intelligent monitoring.",
    techStack: ["Python", "OpenCV", "TensorFlow", "YOLO"],
    buttons: [
      { label: "View on GitHub", icon: "external", href: "#" },
      { label: "Live Demo", icon: "play", href: "#" },
    ],
    visual: "surveillance",
    glowColor: "rgba(0, 212, 255, 0.15)",
  },
  {
    techniqueAccent: "LIMITLESS",
    accentColor: "text-gojo-cyan/40",
    title: "Real-World Problem Solver",
    description:
      "An application designed to address practical everyday challenges through clean interfaces and thoughtful engineering. Details coming soon.",
    techStack: ["Python", "TypeScript", "React"],
    buttons: [{ label: "View on GitHub", icon: "external", href: "#" }],
    visual: "coming-soon",
    glowColor: "rgba(0, 229, 255, 0.15)",
  },
  {
    techniqueAccent: "INFINITE VOID",
    accentColor: "text-gojo-purple/40",
    title: "Open Source Contributions",
    description:
      "Contributing to the open source community — building tools, improving documentation, and collaborating with developers worldwide.",
    techStack: ["Git", "GitHub", "Open Source"],
    buttons: [{ label: "View Contributions", icon: "git", href: "#" }],
    visual: "open-source",
    glowColor: "rgba(168, 85, 247, 0.15)",
  },
];

function ButtonIcon({ type }: { type: "external" | "play" | "git" }) {
  switch (type) {
    case "external":
      return <ExternalLink className="w-4 h-4" />;
    case "play":
      return <Play className="w-4 h-4" />;
    case "git":
      return <GitBranch className="w-4 h-4" />;
  }
}

function SurveillanceVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] lg:min-h-[340px] bg-gradient-to-br from-gojo-navy via-gojo-dark to-gojo-navy overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-28 h-28 rounded-full border-2 border-gojo-blue/20 flex items-center justify-center relative">
            <div className="w-20 h-20 rounded-full border border-gojo-blue/30 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border border-gojo-blue/40 flex items-center justify-center">
                <Eye className="w-6 h-6 text-gojo-blue/70" />
              </div>
            </div>
            <motion.div
              className="absolute w-full h-full rounded-full border border-gojo-blue/10"
              animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute w-full h-full rounded-full border border-gojo-blue/10"
              animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-8 left-8 w-2 h-2 rounded-full bg-gojo-blue/30"
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-12 right-10 w-3 h-3 rounded-full bg-gojo-cyan/20"
        animate={{ y: [0, 8, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-[1px] bg-gojo-blue/20 rotate-45"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-6 h-[1px] bg-gojo-cyan/20 -rotate-12"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute top-1/3 left-[15%] w-1.5 h-1.5 rounded-full bg-gojo-blue/20"
        animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function ComingSoonVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] lg:min-h-[340px] bg-gradient-to-br from-gojo-navy via-gojo-dark to-[#1a0a1e] overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,113,113,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(248,113,113,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-12 h-12 text-red-400/30" />
        </motion.div>
        <span className="font-display text-sm tracking-[0.3em] text-red-400/30 uppercase">
          Coming Soon
        </span>
      </div>

      <motion.div
        className="absolute top-10 right-12 w-2.5 h-2.5 rounded-full bg-red-400/15"
        animate={{ y: [0, -8, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-red-400/20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 left-1/5 w-6 h-[1px] bg-red-400/15 rotate-45"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function OpenSourceVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] lg:min-h-[340px] bg-gradient-to-br from-gojo-navy via-gojo-dark to-[#0f0a1e] overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex items-center gap-3"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Braces className="w-14 h-14 text-gojo-purple/30" strokeWidth={1.5} />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-[30%] left-[18%] font-mono text-[10px] text-gojo-purple/20"
        animate={{ opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"</>"}
      </motion.div>
      <motion.div
        className="absolute bottom-[25%] right-[15%] font-mono text-[10px] text-gojo-purple/20"
        animate={{ opacity: [0.1, 0.35, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        {"{ }"}
      </motion.div>
      <motion.div
        className="absolute top-8 right-14 w-2 h-2 rounded-full bg-gojo-purple/15"
        animate={{ y: [0, -6, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-14 left-12 w-1.5 h-1.5 rounded-full bg-gojo-purple/20"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-8 h-[1px] bg-gojo-purple/15 -rotate-30"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-5 h-[1px] bg-gojo-purple/10 rotate-60"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />
    </div>
  );
}

function ProjectVisual({ type }: { type: ProjectData["visual"] }) {
  switch (type) {
    case "surveillance":
      return <SurveillanceVisual />;
    case "coming-soon":
      return <ComingSoonVisual />;
    case "open-source":
      return <OpenSourceVisual />;
  }
}

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group"
    >
      <div
        className="glass rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.01]"
        style={{
          boxShadow: `0 0 0 1px rgba(0,212,255,0.06), 0 0 40px ${project.glowColor}`,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px rgba(0,212,255,0.15), 0 0 60px ${project.glowColor}, 0 0 100px ${project.glowColor}`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px rgba(0,212,255,0.06), 0 0 40px ${project.glowColor}`;
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="order-1 lg:order-1">
            <ProjectVisual type={project.visual} />
          </div>

          <div className="order-2 lg:order-2 p-8 lg:p-10 flex flex-col justify-center">
            <span className={`font-display text-xs tracking-[0.35em] ${project.accentColor} mb-3 block`}>
              {project.techniqueAccent}
            </span>

            <h3 className="font-display text-xl lg:text-2xl text-gojo-ice font-bold mb-4 tracking-wide">
              {project.title}
            </h3>

            <p className="text-gojo-ice/60 font-body text-sm lg:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-body rounded-full glass border border-gojo-blue/15 text-gojo-blue/80 tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.buttons.map((btn) => (
                <a
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-body font-medium glass border border-gojo-blue/10 text-gojo-ice/80 hover:text-gojo-blue hover:border-gojo-blue/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                >
                  <ButtonIcon type={btn.icon} />
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={sectionRef} className="relative py-28 lg:py-36 overflow-hidden">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,212,255,0.08) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,212,255,0.12) 0%, transparent 50%)",
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={
          isInView
            ? { opacity: [0, 0.8, 0], scale: [0, 2, 2.5] }
            : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 1.8, ease: "easeOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 tracking-wider">
            CURSED TECHNIQUES
          </h2>
          <p className="text-gojo-ice/60 font-body text-base lg:text-lg">
            Projects That Push Boundaries
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.p
          className="text-center text-sm text-gojo-ice/40 italic font-body mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          More projects coming soon. Stay tuned.
        </motion.p>
      </div>
    </section>
  );
}
