import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StoryPlayer from "@/components/StoryPlayer";
import Problem from "@/components/Problem";
import Security from "@/components/Security";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StoryPlayer />
        <Problem />
        <Security />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
