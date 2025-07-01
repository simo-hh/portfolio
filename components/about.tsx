"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I recently graduated with a degree in{" "}
        <span className="font-medium">Visual Computing</span> from{" "}
          <a
            href="https://www.sfu.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline"
          >
            Simon Fraser University
          </a>, after completing my{" "}
        <span className="font-medium">Bachelor's in Computing Science with First-Class Honors</span> at the {" "}
          <a
            href="https://www.ualberta.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline"
          >
            University of Alberta
          </a>
        . My studies gave me a strong foundation in{" "}
        <span className="italic">software systems, scalable architecture, and human-computer interaction</span>.
      </p>

      <p className="mb-3">
        My internship experiences span a wide spectrum — from{" "}
        <span className="font-medium">agile startup teams</span> to{" "}
        <span className="font-medium">large-scale industrial systems</span> — which taught me to navigate{" "}
        <span className="italic">different workflows, communication styles, and problem spaces</span>. 
        I contributed to production-level features, collaborated across teams, and developed a{" "}
        <span className="font-medium">strong sense of ownership and adaptability</span>.
      </p>

      <p>
        As a <span className="underline">new graduate</span>, I’m actively looking for a{" "}
        <span className="font-medium">full-time position</span> as a software engineer. 
        I’m excited to contribute to impactful products, grow alongside talented engineers, and{" "}
        <span className="italic">keep learning every day</span>.
      </p>

    </motion.section>
  );
}
