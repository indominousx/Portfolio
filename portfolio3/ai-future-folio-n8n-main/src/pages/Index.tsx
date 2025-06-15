
import React from "react";
import FuturisticBg from "../components/FuturisticBg";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => (
  <div className="relative min-h-screen flex flex-col items-center justify-start bg-background overflow-x-hidden">
    <FuturisticBg />
    <main className="relative z-10 flex-1 w-full flex flex-col items-center px-4">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <footer className="w-full text-center py-8 text-gray-500 text-xs relative z-10">
      &copy; {new Date().getFullYear()} Your Name · AI/ML Portfolio
    </footer>
  </div>
);

export default Index;
