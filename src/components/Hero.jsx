import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-neutral-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradients that won't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-neutral-200 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for collaborations and speaking
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl"
        >
          Ivan Andrianto
          <br />
          <span className="text-transparent">Innovative AI Storytelling</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-4 max-w-2xl text-base text-neutral-300 sm:text-lg"
        >
          AI content creator and educator blending narrative, code, and interaction. I craft
          playful learning experiences and production‑ready apps with full‑stack engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
          >
            Explore the Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/40"
          >
            Book a Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
