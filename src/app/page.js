import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-start relative w-full">
      <Navbar />
      <Hero />
      <Services />
      <Platform />
      <About />
      <Footer />
    </main>
  );
}
