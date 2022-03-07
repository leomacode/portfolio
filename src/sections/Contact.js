import React from "react";
import "./contact.css";
import { SectionTitle } from "../components";

function Contact() {
  return (
    <section className="contact section-margin-top" id="contact">
      <SectionTitle title="contact" />
      <a href="mailto:forza.leoma@gmail.com">
        <span className="contact__btn--outline">Email me</span>
      </a>
    </section>
  );
}

export default Contact;
