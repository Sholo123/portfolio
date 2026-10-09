import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Flagship from "./sections/Flagship";
import Video from "./sections/Video";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-ink-950 font-sans text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Flagship />
        <Video />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
