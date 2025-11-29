import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Experience />
        <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Blogs/>  
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
