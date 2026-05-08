import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* About — cyan ambient */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04] blur-[120px] bg-[var(--accent-cyan)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(100,255,218,0.25)] to-transparent" />
        <About />
      </div>

      {/* Skills — purple ambient */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.05] blur-[120px] bg-[var(--accent-purple)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.25)] to-transparent" />
        <Skills />
      </div>

      {/* Projects — blue ambient */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-96 rounded-full opacity-[0.04] blur-[130px] bg-[var(--accent-blue)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(59,130,246,0.25)] to-transparent" />
        <Projects />
      </div>

      {/* Education — purple ambient */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.05] blur-[120px] bg-[var(--accent-purple)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(168,85,247,0.25)] to-transparent" />
        <Education />
      </div>

      {/* Contact — cyan ambient */}
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.04] blur-[120px] bg-[var(--accent-cyan)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[rgba(100,255,218,0.25)] to-transparent" />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
