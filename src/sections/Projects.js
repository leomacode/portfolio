import React from "react";
import "./projects.css";
import { ProjectCard } from "../components";

const projects = [
  {
    name: "designo",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="text-h2 uppercase"> Projects</h2>
      <div className="projects-collection">
        {projects.map(({ name, description, githubPath, livePath }) => (
          <ProjectCard
            key={name}
            name={name}
            description={description}
            githubPath={githubPath}
            livePath={livePath}
          />
        ))}
        <ProjectCard
          name="Designo"
          githubPath="https://github.com/leomacode/designo/"
          livePath="https://festive-swirles-8aecae.netlify.app"
        />
        <ProjectCard
          name="Designo"
          githubPath="https://github.com/leomacode/designo/"
          livePath="https://festive-swirles-8aecae.netlify.app"
        />
      </div>
    </section>
  );
}

export default Projects;
