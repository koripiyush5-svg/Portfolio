import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/YOUR_USERNAME",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOUR_USERNAME",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:your.email@example.com",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gojo-dark via-gojo-navy/30 to-gojo-dark" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gojo-blue/[0.04] blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-gojo-violet/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-5xl gradient-text text-glow tracking-wider mb-6"
              style={{
                textShadow: "0 0 30px rgba(0,212,255,0.4), 0 0 60px rgba(124,58,237,0.2)",
              }}
          >
            READY TO ENTER MY DOMAIN?
          </h2>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-gojo-ice/70 text-base md:text-lg max-w-2xl mx-auto text-center mb-12 leading-relaxed"
        >
          I&apos;m always open to collaborating on interesting projects,
          exploring open source, and connecting with people who love building
          things.
        </motion.p>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20 md:mb-28"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  headingInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  ease: "easeOut",
                }}
                className="glass rounded-xl px-8 py-4 flex items-center gap-3 hover:border-gojo-blue/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-400 group"
              >
                <Icon className="w-5 h-5 text-gojo-blue group-hover:text-gojo-cyan transition-colors duration-300" />
                <span className="font-body text-lg text-gojo-ice group-hover:text-white transition-colors duration-300">
                  {link.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Divider */}
          <div className="section-divider mb-8" />

          <p className="text-gojo-ice/30 text-sm text-center py-4 leading-relaxed">
            Designed with curiosity. Built with code. Inspired by the Limitless.
          </p>
          <p className="text-gojo-ice/20 text-xs text-center pb-4">
            © 2026 Piyush Kori
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
