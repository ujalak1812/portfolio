import React from "react";
import SectionTitle from "./SectionTitle";
import aboutImage from "../assets/about.svg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="About Me" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="img-wrapper">
              <img src={aboutImage} className="about-img" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <p>I am a <u>Frontend Engineer</u> with <u>over 6 years of experience</u> building clean, scalable, and high-performing web applications. I graduated as a Computer Systems Engineer back in 2018, and since then, I have worked on a wide range of projects—everything from static websites and e-commerce platforms to admin dashboards and email templates.</p>
            <br />
            <p>I have had the chance to work in both small teams and larger setups, often collaborating directly with designers, backend developers, and clients to bring ideas to life.</p>
            <br />
            <p>These days, I am working remotely with a US-based company, where I focus on building responsive, accessible UIs using HTML, SCSS, React, and Next.js.</p>
            <br />
            <p>I love solving problems with clean code, building reusable components, and making sure every design looks great on any screen. Whether it's leading a frontend architecture or helping content teams move faster with custom CMS components, I am all about creating smooth, user-friendly experiences.
            </p>
            {/* <button className="read-more">read more</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
