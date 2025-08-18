import Image from "next/image";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Project from "@/components/projects";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-between px-3 sm:px-6 md:px-12 lg:px-24 xl:px-32 w-full max-w-screen-2xl mx-auto">
      <Hero />
      <Skills />
      <Project />
    </main>
    </>
  );
}
