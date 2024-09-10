import { motion } from "framer-motion";
import hel from "../assets/logos/hel.png";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features3 = () => {
  return (
    <section
      className="w-full bg-white mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[2rem]  md:pt-[12vw] lg:pt-0"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              
              <h2 className="mt-6 mb-8 text-3xl lg:text-4xl text-[#1A535C] font-abc font-bold">
                Our partner's success is celebrated
              </h2>
              
              <ul className="mb-6 text-[#1A535C] font-abc">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Reduce credits loses </span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Improved on-time collections</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Improvement in rate of disbursal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            
            <img
              width={"1000px"}
              src={hel}
            
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
