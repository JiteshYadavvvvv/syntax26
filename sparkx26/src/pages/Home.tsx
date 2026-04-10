import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/hero/Hero";
import { Timeline } from "../components/timeline/Timeline";
import { Mentors } from "../components/mentor/Mentors";

export const Home = () => {
  return (
    <main className="relative min-h-screen w-full selection:bg-blue-500/30 z-0 text-white">
      {/* Global strict background */}
      <div className="fixed inset-0 -z-10 bg-[url('/bg.jpeg')] bg-cover bg-center bg-no-repeat" />
      
      {/* Global dark overlay (matching the original hero overlay) */}
      <div className="fixed inset-0 -z-10 bg-black/50" />

      <Navbar />
      <Hero />
      <Timeline />
      <Mentors />
    </main>
  );
};
