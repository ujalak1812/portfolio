import { FiDownload, FiMail, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiJqueryLogo, DiSass } from "react-icons/di";
import { FaCogs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiMui, SiReactrouter } from "react-icons/si";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandReact,
  TbBrandFigma,
  TbBrandVue,
  TbBrandJavascript,
  TbBrandRedux,
} from "react-icons/tb";

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
  resume: "https://drive.google.com/file/d/1xllGpmAnnIYjum0rbFQe6eelWj7W_qeA/view?usp=share_link",
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

export const skills = [
  {
    id: "html",
    icon: <TbBrandHtml5 />,
    title: "HTML",
  },
  {
    id: "css",
    icon: <TbBrandCss3 />,
    title: "CSS",
  },
  {
    id: "sass",
    icon: <DiSass />,
    title: "SASS",
  },
  {
    id: "js",
    icon: <TbBrandJavascript />,
    title: "JavaScript",
  },
  {
    id: "jquery",
    icon: <DiJqueryLogo />,
    title: "JQuery",
  },
  {
    id: "react",
    icon: <TbBrandReact />,
    title: "React",
  },
  {
    id: "antd",
    icon: <AiOutlineAntDesign />,
    title: "Ant Design",
  },
  {
    id: "mui",
    icon: <SiMui />,
    title: "Material UI",
  },
  {
    id: "tailwind",
    icon: <BiLogoTailwindCss />,
    title: "Tailwind CSS",
  },
  {
    id: "vue",
    icon: <TbBrandVue />,
    title: "Vue",
  },
  {
    id: "rest",
    icon: <FaCogs />,
    title: "REST APIs",
  },
  {
    id: "figma",
    icon: <TbBrandFigma />,
    title: "Figma",
  },
];

export const projects = [
  {
    id: 1,
    title: "Campbuddy",
    desc: "A web app that allows users to explore campgrounds across US National Parks",
    img: "",
    techs: [
      {
        id: "react",
        icon: <TbBrandReact />,
        title: "React",
      },
      {
        id: "react-router",
        icon: <SiReactrouter />,
        title: "React Router",
      },
      {
        id: "redux",
        icon: <TbBrandRedux />,
        title: "Redux",
      },
      {
        id: "tailwind",
        icon: <BiLogoTailwindCss />,
        title: "Tailwind CSS",
      },
      {
        id: "rest",
        icon: <FaCogs />,
        title: "REST APIs",
      },
    ],
    demo: "https://ujalak1812.github.io/campbuddy",
    code: "https://github.com/ujalak1812/campbuddy",
  },
  {
    id: 2,
    title: "EasyBank",
    desc: "A static landing page created for a challenge,  using the given content and style guide",
    img: "",
    techs: [
      {
        id: "html",
        icon: <TbBrandHtml5 />,
        title: "HTML",
      },
      {
        id: "sass",
        icon: <DiSass />,
        title: "SASS",
      },
    ],
    demo: "https://ujalak1812.github.io/EasyBank/",
    code: "https://github.com/ujalak1812/EasyBank",
  },
  {
    id: 3,
    title: "BudgetApp",
    desc: "A simple web app that keeps track of the monthly income and expenses (not responsive)",
    img: "",
    techs: [
      {
        id: "html",
        icon: <TbBrandHtml5 />,
        title: "HTML",
      },
      {
        id: "css",
        icon: <TbBrandCss3 />,
        title: "CSS",
      },
      {
        id: "js",
        icon: <TbBrandJavascript />,
        title: "JavaScript",
      },
    ],
    demo: "https://ujalak1812.github.io/BudgetApp/",
    code: "https://github.com/ujalak1812/BudgetApp",
  },
  {
    id: 4,
    title: "Roll-and-play",
    desc: "A fun dice rolling game built to practice JavaScript DOM Manipulation",
    img: "",
    techs: [
      {
        id: "html",
        icon: <TbBrandHtml5 />,
        title: "HTML",
      },
      {
        id: "css",
        icon: <TbBrandCss3 />,
        title: "CSS",
      },
      {
        id: "js",
        icon: <TbBrandJavascript />,
        title: "JavaScript",
      },
    ],
    demo: "https://ujalak1812.github.io/Roll-n-Play/",
    code: "https://github.com/ujalak1812/Roll-n-Play",
  },
];

export const experience = [
  {
    id: 1,
    date: "Jan 2022 - Present",
    jobTitle: "Senior Software Engineer (Frontend)",
    company: "VentureDive",
    responsibilities: [],
  },
  {
    id: 2,
    date: "Nov 2020 - Dec 2022",
    jobTitle: "Software Engineer (Frontend)",
    company: "VentureDive",
    responsibilities: [],
  },
  {
    id: 3,
    date: "Nov 2018 - Nov 2020",
    jobTitle: "Software Engineer",
    company: "TPS Worldwide",
    responsibilities: [],
  },
];
