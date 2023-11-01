import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BSImg from "@/public/BSgif.gif";
import PFImg from "@/public/PFgif.gif";

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "BookStock 북스탁",
    description:
      "4인 팀 프로젝트로, 리버스 옥션 기반 도서 구매 웹 사이트입니다. 역경매 시스템을 이용, 일반도서를 비롯한 희귀/절판 도서에 가격 경쟁을 붙여 공급자와 수요자 양측이 만족할 수 있는 거래를 도모하는 것을 목표로 합니다.",
    moreDescription: "React-Responsive 모듈을 사용하여 전 화면을 반응형으로 설계했습니다. 그리고 react-Slick 라이브러리를 사용하여 메인페이지의 새로 올라온 도서 및 실시간 인기 도서 섹션을 구현했습니다.",
    tags: ["HTML/CSS", "React", "Node.js", "MySQL", "AWS ES2"],
    imageUrl: BSImg,
    GithubUrl: "https://github.com/Hanseul516/BookStock",
  },
  {
    title: "Portfolio 포트폴리오",
    description:
      "개인 프로젝트로, 포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 계신 바로 이 웹사이트에 해당합니다.",
    moreDescription: "Tailwind CSS를 사용하여 부드럽고 현대적인 UI를 구현하고자 했습니다. 그리고 Vercel을 이용한 배포를 경험할 수 있었습니다.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Vercel"],
    imageUrl: PFImg,
    GithubUrl: "https://github.com/Hanseul516/Portfolio",
  },

  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;