import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Video, Layers } from 'lucide-react';

const projects = [
  {
    title: 'AI Story Lab',
    icon: BrainCircuit,
    description:
      'Interactive lessons on generative models with narrative-driven prompts and live demos.',
    tags: ['GenAI', 'Education', 'Playful UX'],
  },
  {
    title: 'Full‑Stack Playground',
    icon: Layers,
    description:
      'Production-ready templates combining FastAPI, React, and Mongo with clean abstractions.',
    tags: ['FastAPI', 'React', 'MongoDB'],
  },
  {
    title: 'Code Cinematics',
    icon: Video,
    description:
      'Short-form videos that turn complex AI concepts into crisp, memorable visuals.',
    tags: ['Content', 'Motion', 'Education'],
  },
  {
    title: 'Dev Tools & Snippets',
    icon: Code2,
    description:
      'Reusable utilities for model evaluation, prompts, and DX improvements.',
    tags: ['Tooling', 'Open Source'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-white shadow-lg shadow-black/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white">
                  <p.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
