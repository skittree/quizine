import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import card_1 from "./images/card 1.svg";
import card_2 from "./images/card 2.svg";
import card_3 from "./images/card 3.svg";
import card_4 from "./images/card 4.svg";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={card_1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={card_2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={card_3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={card_4} alt="" /> </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
