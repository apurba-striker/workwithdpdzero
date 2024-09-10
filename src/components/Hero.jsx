import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from 'react-fontawesome';
import  design from "../assets/logos/design.svg";

import dual from "../assets/logos/dual-underline 1.svg";
export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className=" w-screen h-screen flex justify-center items-center mb-[28vw] md:mb-[18vw] lg:mb-[18vw] xl:mb-[18vw] 2xl:mb-60  pb-24 sm:pb-32 md:pb-44 lg:pb-0   bg-[linear-gradient(_#8AC1FA80_50%,_#8AC1FA)] "
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-30 lg:pt-30 text-center ">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-5xl sm:text-4xl lg:text-[56px] xl:text-[56px] leading-[74.09px] font-bold tracking-wide  text-[#210076] px-30 py-30 sm:px-9 py-10 md:px-40 lg:px-4 font-abc relative">
          A new path  <span className=" font-abc font-bold leading-[74.09px] bg-gradient-to-r from-[#8D83FF] to-[#1CD9A7] bg-clip-text text-transparent">zero NPAs </span>
          
          </div>
          {/* <div className="absolute sm:hidden lg:bottom-[85px] left-[615px] items-end justify-end w-[34.2px] h-[30.64px]  "><img
        src={design}// Replace with the actual icon you want to use
        
      /></div> */}
      
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className=" justify-center text-[#08111480] text-sm lg:text-base xl:text-[26px] font-medium sm:text-base  px-10 sm:px-48v font-abc">
          Helping you driving the focus back 
          </div><br/>
          <div className=" justify-center items-center text-[#08111480] text-sm lg:text-base xl:text-[26px] font-medium sm:text-base  sm:px-48v font-abc ">on what you do best, lending</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
         
            
          <div className="w-64 sm:w-52 h-12 font-semibold text-[#F8F7F2] border border-solid  flex justify-center items-center cursor-pointer bg-[#675AF9] transition rounded-full"
             onClick={() => setIsModalOpen(true)}
            >
               Schedule a Demo
            </div> 

          </div>
        </motion.div>
     
        
      </div>
      
    </section>
  );
};
