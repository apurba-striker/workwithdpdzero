// src/components/LogoSlider.jsx

import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import a from "../assets/images/a.png";
import b from "../assets/images/b.png";
import c from "../assets/images/c.png";
import d from "../assets/images/d.png";
import e  from "../assets/images/e.png";
import f from "../assets/images/f.png";
import g from "../assets/images/g.png";
import k from "../assets/images/g.png";
import m from "../assets/images/g.png";
import 'swiper/css';
// Import the CSS file directly from node_modules


export const Brands = () => {
  return (
    <Swiper
  spaceBetween={30}
  slidesPerView={'4'}
  
  rewind={true}
  loop={true}
  
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay]}
  
  > 
  <section className='ml-5'>
  <div className="mt-8  ml-10 flex items-center justify-center gap-x-2 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
      

    <SwiperSlide><img alt="Logo 1"
                className="w-[100px] h-[25.56px]"
                style={{ top: '917px', left: '175px' }}
                src={d}/></SwiperSlide> 
    <SwiperSlide><img alt="Logo 5"
                className="w-[125px] h-[29.14px]"
                style={{ top: '915px', left: '344px' }}
                src={k}/></SwiperSlide>
    <SwiperSlide><img alt="Logo 2"
                className="w-[100px] h-[29.47px]"
                style={{ top: '915px', left: '511px' }} 
                src={a}/></SwiperSlide>
    <SwiperSlide><img alt="Logo 3"
                className="w-[95.53px] h-[29.14px]"
                style={{ top: '915px', left: '344px' }}
                 src={b}/></SwiperSlide>
    <SwiperSlide><img alt="Logo 4"
                className="w-[95.53px] h-[29.14px]"
                style={{ top: '915px', left: '344px' }} 
                src={c}/></SwiperSlide>
    
    <SwiperSlide><img alt="Logo 5"
                className="w-[95.53px] h-[29.14px]"
                style={{ top: '915px', left: '344px' }}
                src={k}/></SwiperSlide>
    <SwiperSlide><img alt="Logo 1"
                className="w-[95.53px] h-[29.14px]"
                style={{ top: '915px', left: '344px' }}
                src={m}/></SwiperSlide>
    
    </div>

    </section> 
    
    
  </Swiper>
  )
}
