import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Life",
    hash: "#life",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Teaching Assistant",
    institution: "Simon Fraser University",
    location: "Burnaby, BC",
    description:
    "Graduate Teaching Assistant of CMPT 307 (Data Structures and Algorithms) and CMPT 120 (Probability and Computing)",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 – Dec 2024",
  },
  {
    title: "Software Engineer Intern",
    institution: "Mediashaker",
    location: "Edmonton, AB",
    description:
    "Built a dynamic form builder and real-time team chat module for a live CMS product. Improved submission completion through UX iteration, reduced system load by optimizing communication patterns, and enabled zero-downtime deployments through safe rollout practices.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – Aug 2024",
  },
  {
    title: "MSc. in Visual Computing",
    institution: "Simon Fraser University",
    location: "Burnaby, BC",
    description:
      "I received my Master's degree from Simon Fraser University, focusing on computer vision, artificial intelligence, and software systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer Intern",
    institution: "ShoutCMS",
    location: "Edmonton, AB",
    description:
      "Contributed to the development of an online form system by working on the visual configuration interface, submission logic, and deployment-related features.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 – Apr 2023",
  },
  {
    title: "Software Engineer Intern",
    institution: "Jutong Automation",
    location: "Suzhou, China (Remote)",
    description:
      "Participated in building a logistics exception tracking feature focused on interactive map visualization, real-time data updates, and issue history queries.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 – Dec 2022",
  },
  {
    title: "BSc. in Computing Science (Honors)",
    institution: "University of Alberta",
    location: "Edmonton, AB",
    description:
      "I earned my Honors Bachelor's degree from the University of Alberta, where I built a strong foundation in computing theory, system design, and software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
] as const;


export const projectsData = [
  {
    title: "Course Scheduling System",
    description: 'Developed an internal scheduling platform for U-School at University of Alberta',
    tags: ["Typescipt", "React", "Python", "Django", "PostgreSQL", "Docker"],
    imageUrl: "/project/project1.png",
    githubUrl: "https://ualberta-cmput401.github.io/uschool-scheduling/",
    demoUrl: "https://www.youtube.com/watch?v=vh7YIemEY_4",
  },
  {
    title: "Echo AI",
    description:
      "A customizable AI voice chat platform with transcript playback.",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "Stream.io", "OpenAI API", "Redis", "Docker"],
    imageUrl: "/project/project2.png",
    githubUrl: "https://github.com/simo-hh/echoai",
    // demoUrl: "https://www.youtube.com/watch?v=vh7YIemEY_4",
  },
  {
    title: "Social Distribution",
    description:
      "A full-featured blogging platform supporting user registration, post creation, commenting, and content browsing.",
    tags: ["Python", "Django", "HTML", "CSS", "SQLite", "JavaScript"],
    imageUrl: "/project/project4.png",
    githubUrl: "https://github.com/Zhijian-Mei/zhijian-group-cmput404-project",
  },
  {
    title: "Order Service System",
    description:
      "An order service system supporting order creation, persistence, and async event dispatch.",
    tags: ["Java","Spring Boot","JPA","PostgreSQL","RabbitMQ","Maven","Docker"],
    imageUrl: "/project/project3.png",
    githubUrl: "https://github.com/simo-hh/order-service",
  },
] as const;

import { ReactElement } from "react";

type Skill = {
  name: string;
  icon: ReactElement;
};


import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGoland,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiRedis,
  SiPostgresql,
  SiApachekafka,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGit,
} from "react-icons/si";

import { DiJava } from "react-icons/di";

// Removed duplicate Skill type declaration

export const skillsData: Skill[] = [
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "Python", icon: React.createElement(SiPython) },
  { name: "Java", icon: React.createElement(DiJava) },
  { name: "Golang", icon: React.createElement(SiGoland) },
  { name: "React", icon: React.createElement(SiReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "Tailwind CSS", icon: React.createElement(SiTailwindcss) },
  { name: "Node.js", icon: React.createElement(SiNodedotjs) },
  { name: "Spring Boot", icon: React.createElement(SiSpringboot) },
  { name: "Redis", icon: React.createElement(SiRedis) },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql) },
  { name: "Kafka", icon: React.createElement(SiApachekafka) },
  { name: "AWS", icon: React.createElement(SiAmazonaws) },
  { name: "Docker", icon: React.createElement(SiDocker) },
  { name: "Kubernetes", icon: React.createElement(SiKubernetes) },
  { name: "Git", icon: React.createElement(SiGit) },
];

