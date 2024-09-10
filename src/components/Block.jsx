import { motion } from "framer-motion";

export const Block = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full h-[478px] py-16 text-[#FFFFFF] px-4 bg-[#675AF9]'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 items-center justify-center'>
          <div className='lg:col-span-3 my-4 '>
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold font py-2 items-center justify-center'>
             <br/>
             <br/>
              <nsbp/> <nsbp/><nsbp/> <nsbp/> Find Out how you Can Scale
            </h1>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold font py-2 items-center justify-center'>
            <nsbp/> <nsbp/><nsbp/> <nsbp/> your lending business with us
            </h1>
            
          </div>
          <div className='my-4 justify-center items-center'>
             <br/>
             <br/>
             <br/>
              <button className='bg-[#FFFFFF] text-[#675AF9] rounded-full font-medium w-[200px] ml-4 my-6 px-6 py-3 '>
                Schedule a demo
              </button>
            </div>
          
          </div>
          
      {/* <div
        className="h-[171px] w-[342px] rounded-full bg-[#938AFC] absolute left-[234px] bottom-[2.34px] top-[206px] right-[666.84px] transform -translate-x-1/2"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          transform: 'rotate(161.73deg)',
        }}
      ></div> */}
      {/* <div className="relative">
      <div
        className="absolute h-[342px] w-[171px] bg-[#938AFC] rounded-full "
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          transform: 'rotate(161deg)',
          transformOrigin: 'center',
          left: '234px',
          bottom: '2.34rem',
          top: '206px',
          right: '666.84px'
        }}
      ></div>
    </div> */}
    <div className="relative flex justify-center items-center right-[370.55px] top-1 ">

<div className=" bg-[#938AFC] 
            rounded-tl-full rounded-tr-full h-[136px] w-[270px] transform rotate-20"></div>
</div>
    </div>
    
      
      </motion.div>
    );
  };
  