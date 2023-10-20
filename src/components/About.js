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
            <p>
              I am a <u>Senior Software Engineer</u> with <u>5 years</u> of
              professional experience in <u>frontend web development</u>. I
              graduated as a Computer Systems Engineer in 2018.
            </p>
            <br />
            <p>
              Over my five-year career, I've had the privilege of contributing
              to a number of projects, including static websites, web apps,
              ecommerce sites, admin dashboards, email templates etc. I have a
              keen eye for detail, ensuring pixel-perfect designs and seamless
              experiences across all devices.
            </p>
            <br />
            <p>
              I've worked with both small and large teams and also collaborated
              directly with the clients. Currently, I am working remotely for a
              US based company as an outsourced resource.
            </p>
            <br />
            <p>
              Apart from coding, I also enjoy designing UI and have worked on a
              few personal projects.
            </p>
            {/* <button className="read-more">read more</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
