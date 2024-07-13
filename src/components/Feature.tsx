"use client"; 
import { useEffect, useRef } from "react";
import EcoSystemIcon from "../assets/icons/ecosystem.svg"; // Ensure this path is correct
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export const Feature = ({ title, description }: { title: string; description: string }) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div key={title} className="relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1">
      <motion.div
        ref={border}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      ></motion.div>

      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-xl relative z-10">
        <EcoSystemIcon />
      </div>
      <h3 className="mt-6 font-bold relative z-10">{title}</h3>
      <p className="mt-2 text-white/70 relative z-10">{description}</p>
    </div>
  );
};