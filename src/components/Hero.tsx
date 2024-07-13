"use client";
import Image from 'next/image';
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import {motion} from 'framer-motion';
export const Hero = () => {
  return (
    <div>

      <div className="bg-black text-white bg-gradient-to-b from-black via-[#200D42] via-34% via-[#4F21A1] via-65% to-[#A46EDB] to-82% py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-full bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side, #000 82%, #9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]">
</div>

        <div className="container relative">
          <a href="#"
          className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text"> 
              Version 2.0 is here 
              </span>
            <span className="inline-flex items-center gap-1">
            <span> Read More </span>
            <ArrowWIcon />
            </span>
          </a>
          <div className="flex justify-center mt-8">
            <div className="inline-flex relative"> 
              <h1 className="text-7xl sm:text-9xl ont-bold tracking-tighter text-center mt-8 inline-flex"> 
                One task 
                <br /> at a time 
              </h1>
              <motion.div className='absolute right-[476px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin>
              <Image src={cursorImage} 
              height={200} 
              width={200} 
              alt="Cursor Image" 
              className="max-w-none"
              draggable="false" 
              />
              </motion.div>
              <motion.div className="absolute top-[56px] left-[498px] hidden sm:inline" 
              drag
              dragSnapToOrigin
              >
              <Image src={messageImage} 
              height={200} 
              width={200} 
              alt="Message Image" 
              className="max-w-none"
              draggable="false"
              />
              </motion.div>
            </div>
          </div>
          <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md"> 
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes
          </p>
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-black py-3 px-5 rounded-lg font-medium"> Get for free </button>
          </div>
          
        </div>

      </div>
      
    </div>
  );
};
