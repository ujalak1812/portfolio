import React from "react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
// import Chip from "./Chip";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="Personal Projects" />
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div
              className="col-12 col-sm-6 col-xl-4"
              key={`project-${project.id}`}
            >
              <Card>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="techs">
                  {/* {project.techs.map((tech) => (
                    <Chip text={tech} id={tech} />
                  ))} */}
                </div>
                <div className="btn-wrapper">
                  <Button url={project.demo} type="default" text="View Demo" />
                  <Button url={project.code} type="outline" text="View Code" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
