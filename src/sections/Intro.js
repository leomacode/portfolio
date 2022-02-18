import React from "react";
import "./intro.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IconLink } from "../components";
function Intro() {
  return (
    <section id="intro" className="intro center">
      <h1 className="about__title text-h1">
        Hi, My name is <span className="about__name">Leo Ma.</span>
      </h1>
      <h2 className="about__role text-h2">A Front end Developer.</h2>
      <div className="about__links flex">
        <IconLink
          icon={FaLinkedin}
          path="https://www.linkedin.com/in/leo-ma-2a3998a6/"
        />
        <IconLink icon={FaGithub} path="https://github.com/leomacode" />
      </div>
    </section>
  );
}

export default Intro;
