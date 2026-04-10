import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/hero/Hero";

export const Home = () => {
  return (
    <main className="min-h-screen w-full selection:bg-blue-500/30">
      <Navbar />
      <Hero />
    </main>
  );
};
