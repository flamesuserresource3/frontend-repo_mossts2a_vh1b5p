import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-neutral-950 font-inter text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <footer className="border-t border-white/10 bg-neutral-950 py-10 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} Ivan Andrianto — Innovative AI storytelling, education, and full‑stack builds.
      </footer>
    </div>
  );
}

export default App;
