import React from "react";
import "./iconLink.css";

function IconLink({ icon, path }) {
  const CustomTag = icon;
  return (
    <a
      href={path}
      target="_blank"
      rel="noreferrer"
      className="icon__link text-h2"
    >
      <CustomTag />
    </a>
  );
}

export default IconLink;
