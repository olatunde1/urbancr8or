import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from './images/slide/D17.png';
import image2 from './images/slide/D5.png';
import image3 from './images/slide/D27.png';
import image4 from './images/slide/D28.png';
import image5 from './images/slide/D29.png';
import image6 from './images/slide/D30.png';
import image7 from './images/slide/D32.png';
import image8 from './images/slide/D33.png';
import image9 from './images/slide/D34.png';
import image10 from './images/slide/D40.png';
import image11 from './images/slide/PPDEV1E.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/pictureslider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function PictureSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        id='pictureslider'
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image11} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
