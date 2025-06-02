import { FiDownload, FiMail, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

export const jobTitle = "front-end developer";

export const navigationLinks = [
  {
    id: "home",
    title: "Home",
    url: "#home",
  },
  {
    id: "about",
    title: "About",
    url: "#about",
  },
  {
    id: "skills",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "experience",
    title: "Experience",
    url: "#experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    url: "#portfolio",
  },
];

export const links = {
  resume: "https://drive.google.com/file/d/1vL0IsQs2_EKfY2Ev3cEFOURt4Mhq7aPH/view?usp=sharing",
  email: "mailto:ujalakhurram@yahoo.com",
  github: "https://github.com/ujalak1812",
  linkedin: "https://linkedin.com/in/ujalakhurram",
};

export const socialLinks = [
  {
    id: "resume",
    icon: <FiDownload />,
    title: "Download Resume",
    url: links.resume,
  },
  {
    id: "email",
    icon: <FiMail />,
    title: "Email",
    url: links.email,
  },
  {
    id: "github",
    icon: <FiGithub />,
    title: "Github",
    url: links.github,
  },
  {
    id: "linkedin",
    icon: <RiLinkedinLine />,
    title: "LinkedIn",
    url: links.linkedin,
  },
];

export const skills = ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Next.js", "Vue", "Nuxt.js", "jQuery", "GraphQL", "SCSS", "Tailwind CSS", "Material UI", "Ant Design", "Styled Components", "Git", "RESTful APIs"];

export const projects = [
  {
    id: 1,
    title: "Campbuddy",
    desc: "A web app that allows users to explore campgrounds across US National Parks",
    img: "",
    techs: ["React", "React Router", "Redux", "Tailwind CSS", "REST APIs"],
    demo: "https://ujalak1812.github.io/campbuddy",
    code: "https://github.com/ujalak1812/campbuddy",
  },
  {
    id: 2,
    title: "EasyBank",
    desc: "A static landing page created for a challenge,  using the given content and style guide",
    img: "",
    techs: ["HTML", "SASS"],
    demo: "https://ujalak1812.github.io/EasyBank/",
    code: "https://github.com/ujalak1812/EasyBank",
  },
  {
    id: 3,
    title: "BudgetApp",
    desc: "A simple web app that keeps track of the monthly income and expenses (not responsive)",
    img: "",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://ujalak1812.github.io/BudgetApp/",
    code: "https://github.com/ujalak1812/BudgetApp",
  },
  {
    id: 4,
    title: "Roll-and-play",
    desc: "A fun dice rolling game built to practice JavaScript DOM Manipulation",
    img: "",
    techs: ["HTML", "CSS", "JavaScript"],
    demo: "https://ujalak1812.github.io/Roll-n-Play/",
    code: "https://github.com/ujalak1812/Roll-n-Play",
  },
];

export const experience = [
  {
    id: 1,
    date: "Mar 2024 - Present",
    jobTitle: "Frontend Engineer",
    company: "DotCMS",
    location: "Remote, USA",
    responsibilities: [],
  },
  {
    id: 2,
    date: "Jan 2022 - Mar 2024",
    jobTitle: "Senior Software Engineer (Frontend)",
    company: "VentureDive",
    location: "Karachi, Pakistan",
    responsibilities: [],
  },
  {
    id: 3,
    date: "Nov 2020 - Dec 2022",
    jobTitle: "Software Engineer (Frontend)",
    company: "VentureDive",
    location: "Karachi, Pakistan",
    responsibilities: [],
  },
  {
    id: 4,
    date: "Nov 2018 - Nov 2020",
    jobTitle: "Software Engineer",
    company: "TPS Worldwide",
    location: "Karachi, Pakistan",
    responsibilities: [],
  },
];
