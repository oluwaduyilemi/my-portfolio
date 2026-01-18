
"use client";

import { motion, Variants, Transition } from "framer-motion";
import { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right"; 
   className?: string;
}

export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
}: AnimateInProps) {
  const transition: Transition = {
    duration: 0.6,
    ease: "easeOut",
    delay,
  };

  // Set initial offset based on direction
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -50;
      break;
    case "right":
      x = 50;
      break;
    case "up":
      y = 50;
      break;
    case "down":
      y = -50;
      break;
  }

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: { opacity: 1, x: 0, y: 0, transition },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}