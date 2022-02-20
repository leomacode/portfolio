import React from "react";
import "./skills.css";
import { SectionTitle } from "../components";
const skilldata = [
  "HTML",
  "CSS",
  "Sass",
  "Javascript",
  "TypeScript",
  "React",
  "Vue",
  "Redux",
  "Veux",
  "Git",
  "npm",
  "yarn",
  "Unit Test",
  "React Testing Library",
  "Node.js",
  "Express",
];
function Skills() {
  return (
    <section className="skills section-margin-top" id="skills">
      <SectionTitle title="Skills" />
      <ul className="skills__list">
        {skilldata.map((skill) => (
          <li key={skill} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
