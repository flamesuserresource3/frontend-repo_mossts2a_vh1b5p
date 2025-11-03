import { motion } from 'framer-motion';
import { Mail, Video, CalendarDays } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-neutral-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 text-center text-white"
        >
          <h3 className="text-2xl font-semibold sm:text-3xl">Let’s build something memorable</h3>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-300">
            Mentoring, workshops, content partnerships, or full‑stack product sprints. I bring
            a storytelling lens to AI education and engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@ivanandrianto.dev"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40"
            >
              <CalendarDays size={16} /> Book a call
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40"
            >
              <Video size={16} /> Watch reels
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
