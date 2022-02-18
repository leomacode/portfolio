import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer flex section-margin-top">
      <p>Copyright © {new Date().getFullYear()} Leo Ma. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
