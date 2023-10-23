"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=774&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hanseul portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <span className="absolute bottom-0 right-0 text-4xl">👋🏻</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
