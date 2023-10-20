import React from "react";
import { links } from "../constants/data";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            <h2>Get In Touch</h2>
            <p>
              To learn more about my professional experience, <a target="_blank" rel="noreferrer" className="link" href={links.resume}>download my resume
              </a>. Get in touch with me at <a target="_blank" rel="noreferrer" href={links.email} className="link">ujalakhurram@yahoo.com</a> or at <a target="_blank" rel="noreferrer" href={links.linkedin} className="link">LinkedIn</a>. See my work at <a target="_blank" rel="noreferrer" href={links.github} className="link">Github</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
