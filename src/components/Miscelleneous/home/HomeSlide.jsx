import React from 'react';
// import {homeSlider} from '../../Data/HeaderData'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../../style/homeStyle.css';
import image1 from '../../../assets/homeImages/slide1.webp'
import image2 from "../../../assets/homeImages/slide2.webp";
import image3 from "../../../assets/homeImages/slide3.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeSlide = () => {

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="h-[50%]">
          <img
            src={image1}
            alt=""
            className="w-full h-[50%] block object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt=""
            className="w-full h-[50%] block object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt=""
            className="w-full h-[50%] block object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSlide