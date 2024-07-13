// components/LogoTicker.js
'use client';

import Image from "next/image";
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [tickerWidth, setTickerWidth] = useState(0);

  useEffect(() => {
    if (tickerRef.current) {
      setTickerWidth(tickerRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world&apos;s most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative" aria-live="off">
          <motion.div
            ref={tickerRef}
            className="flex gap-16"
            animate={{
              x: [0, -tickerWidth],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {images.concat(images).map(({ src, alt }, index) => (
              <Image 
                key={`${alt}-${index}`}
                src={src} 
                alt={alt} 
                width={100} // Adjust based on your image size
                height={32} 
                className="h-8 w-auto" 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};