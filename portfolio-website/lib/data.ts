import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaLaptop, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import BSImg from "@/public/BSgif.gif";
import PFImg from "@/public/PFgif.gif";
import { faComputer, faLaptop } from "@fortawesome/free-solid-svg-icons";

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
    title: "선문대학교 간호학과",
    location: "충청남도, 아산시",
    description:
      "학점 4.1/4.5",
    icon: React.createElement(LuGraduationCap),
    date: "2019.03 - 2023.02",
  },
  {
    title: "한림대학교춘천성심병원",
    location: "강원도, 춘천시",
    description:
      "응급실 간호사",
    icon: React.createElement(CgWorkAlt),
    date: "2023.05 - 2023.05",
  },
  {
    title: "프론트엔드 개발자 부트캠프",
    location: "멀티캠퍼스",
    description:
      "JavaScript, React 기반 프론트엔드 개발자 과정 수료",
    icon: React.createElement(FaReact),
    date: "2023.05 - 2023.10",
  },
  {
    title: "티스토리 기술 블로그 운영",
    location: "개발자두슬의 댕발블로그",
    description:
      "포스팅 220개, 누적방문자 10,400명",
    icon: React.createElement(FaLaptop),
    date: "2023.05 - ing",
  },
] as const;

export const projectsData = [
  {
    title: "BookStock 북스탁",
    description:
      "4인 팀 프로젝트로, 리버스 옥션 기반 도서 구매 웹 사이트입니다. 역경매 시스템을 이용, 일반도서를 비롯한 희귀/절판 도서에 가격 경쟁을 붙여 공급자와 수요자 양측이 만족할 수 있는 거래를 도모하는 것을 목표로 합니다.",
    moreDescription: "React-Responsive 모듈을 사용하여 전 화면을 반응형으로 설계했습니다. 그리고 react-Slick 라이브러리를 사용하여 메인페이지의 새로 올라온 도서 및 실시간 인기 도서 섹션을 구현했습니다.",
    tags: ["HTML/CSS", "React", "Node.js", "MySQL", "AWS ES2", "클릭 시 깃허브로 이동해요!"],
    imageUrl: BSImg,
    GithubUrl: "https://github.com/Hanseul516/BookStock",
  },
  {
    title: "Portfolio 포트폴리오",
    description:
      "개인 프로젝트로, 포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 계신 바로 이 웹사이트에 해당합니다.",
    moreDescription: "Tailwind CSS를 사용하여 부드럽고 현대적인 UI를 구현하고자 했습니다. 그리고 Vercel을 이용한 배포를 경험할 수 있었습니다.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Vercel", "클릭 시 깃허브로 이동해요!"],
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
  "Bootstrap",
  "Framer Motion",
  "MySQL",
  "Python",
] as const;

export const certificatesData = [
  "정보처리기사(필기)",
  "SQL개발자(SQLD)",
  "데이터분석준전문가(ADsP)",
  "간호사 면허",
] as const;