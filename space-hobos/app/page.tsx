import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Roadmap from "@/components/Roadmap";
import Mint from "@/components/Mint";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Roadmap />
        <Mint />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
