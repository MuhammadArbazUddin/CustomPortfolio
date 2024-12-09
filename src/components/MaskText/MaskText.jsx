"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function MaskText({ phrases }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-10%" });
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.1 * i },
      ease: [0.33, 1, 0.68, 1],
    }),
  };
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <div ref={body}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="lineMask text-8xl">
            <motion.p
              variants={animate}
              custom={index}
              initial="initial"
              animate={isInView ? "open" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
