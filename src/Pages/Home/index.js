import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeCat></HomeCat>

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100" alt="" />
              </div>

              <div className="banner mt-4">
                <img src={banner2} className="cursor w-100" alt="" />
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS </h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>

                <Button className="viewAllBtn">
                  View All<IoIosArrowForward></IoIosArrowForward>
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New product with update stocks
                  </p>
                </div>

                <Button className="viewAllBtn">
                  View All<IoIosArrowForward></IoIosArrowForward>
                </Button>
              </div>

              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem></ProductItem>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
