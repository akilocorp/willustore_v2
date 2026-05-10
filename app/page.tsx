import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryPlayer from "@/components/StoryPlayer";
import Comparison from "@/components/Comparison";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoryPlayer />
        <Comparison />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
