import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import  Logo  from "../assets/logos/Logo.png";
import  vector  from "../assets/logos/Vector.svg";
import  Group  from "../assets/logos/Group 75.svg";
import  logodpd  from "../assets/logos/logodpd.png";
import dual from "../assets/logos/dual-underline 1.svg";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Vision", href: "#FAQ", ariaLabel: "FAQ" },

  { label: "Team", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex flex-col justify-center  items-center relative  lg: z-40 lg:backdrop-blur-xl bg-[#8AC1FA80]">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0 gap-5">
              
                <img src={logodpd}/>
              

            </div>
          </a>
        </motion.div>
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
        <div className="grow basis-0 justify-end hidden lg:flex">
          <div className=" grow flex justify-center items-center p-0 font-abc ">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>

            <a
              className="text-[#F8F7F2]  
           bg-[#675AF9] border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex rounded-full font-abc font-semibold"
              href="#"
              target="_blank"
              aria-label="source code"
            >
              
              <span className="pt-px">Schedule a Demo</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-[#15B776] rounded-md cursor-pointer hover:bg-[#15B776]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              
            <a
              className="text-white custom-border-green rounded-xl
           bg-green-500 hover:bg-[#675AF9]  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="#"
              target="_blank"
              aria-label="source code"
            >
              
              <span className="pt-px">Book Your Slot</span>
            </a>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
