import React from "react";
import "./projects.css";
import { ProjectCard, SectionTitle } from "../components";

const projects = [
  {
    name: "designo",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
  {
    name: "designo1",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
  {
    name: "designo2",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
  {
    name: "designo3",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
  {
    name: "designo4",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
  {
    name: "designo5",
    description:
      "An exhibition in implementing a multi-page responsive static website from a figma design.",
    githubPath: "https://github.com/leomacode/designo/",
    livePath: "https://festive-swirles-8aecae.netlify.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section-margin-top">
      <SectionTitle title="Projects" />
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
      </div>
    </section>
  );
}

export default Projects;
