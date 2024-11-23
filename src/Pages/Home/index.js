import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from '@mui/material/Rating';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";

const Home = () => {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <HomeBanner></HomeBanner>

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src={banner1} className="cursor w-100" alt="" />
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
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                      <h4>Weathers Original Caramel Hard Candies</h4>
                      <span className="text-danger d-block">In Stock</span>
                      <Rating name="read-only" value={5} readOnly size="small" precision={0.5}/>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                      </div>
                    </div>
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
