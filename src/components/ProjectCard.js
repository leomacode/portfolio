import React from "react";
import "./projectCard.css";
import { IconLink } from "../components";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard({ name, description, githubPath, livePath, stack }) {
  return (
    <div className="project">
      <h3 className="text-h3 project__title capitalize">{name}</h3>
      <p className="project__description">{description}</p>
      <ul className="project__stack">
        {stack.map((name) => (
          <li key={name} className="project__stack-item">
            {name}
          </li>
        ))}
      </ul>

      <div className="project__icon-links flex">
        <IconLink icon={FaGithub} path={githubPath} />
        <IconLink icon={FaExternalLinkAlt} path={livePath} />
      </div>
    </div>
  );
}

export default ProjectCard;
