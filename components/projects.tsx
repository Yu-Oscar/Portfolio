"use client";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { LinkIcon } from "@/components/icons";
import { PROJECTS } from "@/data";

function ProjectImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority: boolean;
}) {
  const fallbackSrc = "/image/bg.svg";
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={400}
      height={250}
      unoptimized
      priority={priority}
      className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
      onError={() => {
        if (imageSrc !== fallbackSrc) setImageSrc(fallbackSrc);
      }}
    />
  );
}

export default function Projects() {
  const contentList = PROJECTS.map((project) => ({
    title: project.title,
    description: project.description,
    link: project.link,
    src: project.imageUrl,
    skills: project.techStack,
  }));
  return (
    <>
      <div id="projects" className="pt-16 flex flex-col overflow-hidden">
        <div className="section-divider"></div>
        <h2 className="self-center mb-12 text-3xl lg:text-4xl font-bold text-gradient animate-fadeIn ">
          projects
        </h2>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {contentList
              .slice()
              .reverse()
              .map((item, index) => {
                const ProjectContent = () => (
                  <div
                    className={`group flex flex-col h-full glass hover-effect p-6 rounded-2xl transition-all duration-500 cursor-pointer`}
                  >
                    <div className="mb-4 relative overflow-hidden rounded-xl">
                      <ProjectImage
                        src={item.src}
                        alt={item.title}
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.link && (
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="glass p-2 rounded-lg">
                            <LinkIcon />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="mb-3">
                        <h3 className="font-bold text-lg text-white hover-text group-hover:text-gradient transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1.5 text-xs font-semibold bg-slate-800/80 text-cyan-300 rounded-md border border-slate-700 backdrop-blur-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <Link
                    key={index}
                    href={item.link}
                    isExternal
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ProjectContent />
                  </Link>
                ) : (
                  <ProjectContent key={index} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
