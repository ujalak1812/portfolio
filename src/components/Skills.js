import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="I work with" />
          </div>
        </div>
        <div className="row">
          {skills.map((skill) => (
            <div className="col-4 col-md-3 col-lg-2 skill" key={skill.id}>
              <div className="icon">{skill.icon}</div>
              <p className="title">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
