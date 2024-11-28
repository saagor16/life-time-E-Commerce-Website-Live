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
            spaceBetween={0}
            navigation={true}
            loop={true}
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
                  src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32015952117790/web_3093.jpg"
                  className="w-100"
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32015952117790/web_3093.jpg"
                  className="w-100"
                ></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img
                  src="https://sslimages.shoppersstop.com/sys-master/root/h98/h92/32015952117790/web_3093.jpg"
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
