import Image from "next/image";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Project from "@/components/projects";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex flex-col items-center justify-between px-5 sm:px-24 w-full">
      <Hero />
      <Skills />
      <Project />
    </main>
    </>
  );
}
