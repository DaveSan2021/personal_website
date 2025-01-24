'use client'
import { projects } from "./projects";
import React from "react";
import Project from "./Project";

const ProjectsShowcase = () => {
  return (
    <div className="text-white">
      <h2 className="text-5xl mb-4 text-center text-[#7de2d1]">Showcase</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProjectsShowcase;
