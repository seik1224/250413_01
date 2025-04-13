import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      loop={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      onSlideChangeTransitionStart={(swiper)=>{
        setActiveIndex(swiper.realIndex);
      }}
    >
      {
        [
          {title:'Mario', desc : '마리오와 함께 신나는 모험을 떠나보세요!', img :'bg1.jpg'},
          {title:'Zelda', desc : '마리오와 함께 신나는 모험을 떠나보세요!', img :'bg2.jpg'},
          {title:'Poke', desc : '마리오와 함께 신나는 모험을 떠나보세요!', img :'bg3.jpg'},
        ].map((v, i)=>(
          <SwiperSlide key={i}>
            <img className={
              `w-full h-full transition-transform duration-1000
              ${activeIndex === i ? 'scale-100' : 'scale-110'}`
            }
            src={`${process.env.PUBLIC_URL}/${v.img}`} alt="" />
            <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
              <h4 className="text-8xl en-txt text-white mb-2">{v.title}</h4>
              <p className="text-2xl text-white mb-14">마리오와 함께 신나는 모험을 떠나보세요!</p>
              <a
                href="/"
                className="text-white border-2 border-white border-solid px-4 py-2 rounded-full hover:bg-white hover:!text-[#ff541e]"
              >
                더보기
              </a>
            </div>
          </SwiperSlide>
        ))
      }
      
    </Swiper>
  );
};

export default Home;
