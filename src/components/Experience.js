import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { experience, links } from "../constants/data";

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="My Experience" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <VerticalTimeline lineColor="#20a5a0" layout="1-column-left">
              {experience.map((exp) => (
                <VerticalTimelineElement
                  key={`experience-${exp.id}`}
                  contentArrowStyle={{ display: "none" }}
                  date={exp.date}
                >
                  <Card>
                    <h4>{exp.jobTitle}</h4>
                    <h5>{exp.company}</h5>
                    <p className="d-sm-none">{exp.date}</p>
                    {/* <ul>
                        {
                          exp.responsibilities.map((resp, index) => 
                            <li key={`resp-${index}`}>{resp}</li>
                          )
                        }
                      </ul> */}
                  </Card>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p style={{ marginTop: 40 }}>
              To learn more about my work experience, <a target="_blank" rel="noreferrer" href={links.resume} className="link">download my resume</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
