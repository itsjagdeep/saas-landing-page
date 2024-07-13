"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latestValue) =>
      console.log("latestValue", latestValue)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes
            one at a time.
          </p>
        </div>
        <motion.div
          ref={appImage}
          className="mt-14 flex justify-center items-center"
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
          <Image src={appScreen} alt="The product screenshot" />
        </motion.div>
      </div>
    </div>
  );
};