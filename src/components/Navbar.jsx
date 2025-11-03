import { motion } from 'framer-motion';
import { Sparkles, PlayCircle, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { label: 'Work', href: '#projects', icon: <PlayCircle size={16} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 text-neutral-900">
                <Sparkles size={18} />
              </span>
              <span className="font-semibold text-white">Ivan Andrianto</span>
              <span className="hidden text-sm text-neutral-400 sm:block">AI Creator • Educator • Full‑Stack Dev</span>
            </a>
            <div className="flex items-center gap-1">
              {navItems.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  <span className="opacity-70 group-hover:opacity-100">{n.icon}</span>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
