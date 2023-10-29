"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPhone,
  faEnvelope,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="text-left">
        <div className="mb-7 flex items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mr-6">
            <FontAwesomeIcon icon={faAddressCard} className="text-3xl" />
          </div>
          <div>
            <h2 className="font-bold text-xl">이름</h2>
            <span>최한슬</span>
          </div>
        </div>
        <div className="mb-7 flex items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mr-6">
            <FontAwesomeIcon icon={faPhone} className="text-3xl" />
          </div>
          <div>
            <h2 className="font-bold text-xl">연락처</h2>
            <span>010-8488-9913</span>
          </div>
        </div>
        <div className="mb-7 flex items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mr-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </div>
          <div>
            <h2 className="font-bold text-xl">이메일</h2>
            <a
              href="mailto:hanseulo@naver.com"
              className="hover:underline text-lg"
            >
              hanseulo@naver.com
            </a>
          </div>
        </div>
        <div className="mb-7 flex items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-200 mr-6">
            <FontAwesomeIcon icon={faSchool} className="text-3xl" />
          </div>
          <div>
            <h2 className="font-bold text-xl">부트캠프</h2>
            <span>멀티캠퍼스 프론트엔드 과정</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
