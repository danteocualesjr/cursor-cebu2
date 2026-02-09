import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Events from "@/components/Events";
import Speakers from "@/components/Speakers";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Mission />
        <Divider />
        <Events />
        <Divider />
        <Speakers />
        <Divider />
        <Gallery />
        <Divider />
        <GetInvolved />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px bg-white/5" />
    </div>
  );
}
