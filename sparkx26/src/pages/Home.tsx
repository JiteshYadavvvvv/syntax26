import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/hero/Hero";
import { Timeline } from "../components/timeline/Timeline";
import { Events } from "../components/event/Events";
import { Mentors } from "../components/mentor/Mentors";
import { FAQ } from "../components/faq/FAQ";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30 z-0 text-white">
      <div className="fixed inset-0 -z-10 bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat" />
      <div className="fixed inset-0 -z-10 bg-black/50" />
      <Navbar />
      <Hero />
      <Timeline />
      <Events />
      <Mentors />
      <FAQ />
      <Footer />
    </main>
  );
};
