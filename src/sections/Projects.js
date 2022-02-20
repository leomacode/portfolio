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
    stack: ["HTML", "CSS", "React"],
  },
  {
    name: "GPT - 3 website",
    description:
      "This is a mobile first responsive static website built base on the Figma desigen.",
    githubPath: "https://github.com/leomacode/gpt3-official-website",
    livePath: "https://zen-borg-d8002e.netlify.app/",
    stack: ["HTML", "CSS", "React"],
  },
  {
    name: "Space tourism",
    description:
      "This is a solution to the Space tourism website challenge on Frontend Mentor.",
    githubPath: "https://github.com/leomacode/space-tourism-website-react",
    livePath: "https://distracted-hamilton-6ab835.netlify.app/",
    stack: ["HTML", "CSS", "React"],
  },
  {
    name: "MSH-Design",
    description:
      "Responsive Personal portfolio. Modified the tamplate according to user reqirements ",
    githubPath: "https://github.com/leomacode/MSH-Design",
    livePath: "https://dreamy-wright-2b4b2e.netlify.app/",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Rijschool H3",
    description:
      "Responsive website for a driving school. Modified the tamplatefor user reqirements.",
    githubPath: "https://github.com/leomacode/Driving-School-",
    livePath: "http://rijschoolh3.nl/",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    name: "Creative Team",
    description:
      "Responsive website for a phycological training school. Modified the tamplatefor user reqirements",
    githubPath: "https://github.com/leomacode/creative_trigger_team",
    livePath: "https://wizardly-jepsen-6e733d.netlify.app/",
    stack: ["HTML", "CSS", "Javascript"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects section-margin-top">
      <SectionTitle title="Projects" />
      <div className="projects-collection">
        {projects.map(({ name, description, githubPath, livePath, stack }) => (
          <ProjectCard
            key={name}
            name={name}
            description={description}
            githubPath={githubPath}
            livePath={livePath}
            stack={stack}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
