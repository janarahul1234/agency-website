import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero />
        <Stats />
        <Services />
        <Process />
        <Work />
        <Marquee />
        <Testimonials />
        <Team />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
