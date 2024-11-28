/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";

const HomeBanner = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="homeBannerSection">
          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            navigation={true}
            loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427456/1731427454225_1721277298204_banner.jpg"
                  className="w-100"
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427470/1731427468095_New_Project_13.jpg"
                  className="w-100"
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427534/1731427531889_New_Project_10.jpg"
                  className="w-100"
                ></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
