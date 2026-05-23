import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { GitHubSection } from "@/components/GitHubSection";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GitHubSection />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
