"use client";

import React from "react";
import SectionHeading from "./section-heading";

export default function Life() {
  return (
    <section
      id="life"
      className="scroll-mt-28 mb-28 sm:mb-40 px-4 sm:px-8 lg:px-12"
    >
      <SectionHeading>Life</SectionHeading>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-10 italic">
        The most beautiful things in my life aren’t things — they’re moments.
      </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {["life1.jpeg", "life2.jpeg", "life3.jpeg", "life4.jpeg", "life5.jpeg"].map(
                (src, index) => (
                <div
                    key={index}
                    className="overflow-hidden rounded-xl border-2 border-white shadow-md dark:border-white/10"
                >
                    <img
                    src={`/life/${src}`}
                    alt={`Life ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>
                )
            )}
        </div>

    </section>
  );
}
