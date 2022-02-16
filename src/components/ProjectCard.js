import React from "react";
import "./projectCard.css";
import { IconLink } from "../components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ name, description, githubPath, livePath }) {
  return (
    <div class="project">
      <h3 className="text-h3 project__title capitalize">{name}</h3>
      <p class="project__description">{description}</p>
      <ul class="project__stack">
        <li class="project__stack-item">HTML</li>
        <li class="project__stack-item">CSS</li>
        <li class="project__stack-item">React</li>
      </ul>

      <div className="project__icon-links flex">
        <IconLink icon={FaGithub} path={githubPath} />
        <IconLink icon={FaExternalLinkAlt} path={livePath} />
      </div>
    </div>
  );
}

export default ProjectCard;
