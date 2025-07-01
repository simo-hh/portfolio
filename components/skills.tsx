"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-white/80">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

