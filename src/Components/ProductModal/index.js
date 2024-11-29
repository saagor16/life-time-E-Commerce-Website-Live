import Button from "@mui/material/Button";
import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";


const ProductModal = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
        className="productModal"
        onClose={() => props.closeProductModal()}
      >
        <Button className="close_">
          <MdClose onClick={() => props.closeProductModal()}></MdClose>
        </Button>

        <h4 className="mb-1 font-weight-bold">
          Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch</b>
            </span>
          </div>
          <Rating
            name="read-only"
            value={5}
            size="small"
            precision={0.5}
            readOnly
          />
        </div>
        <hr></hr>

        <div className="row mt-2 productDetailsMOdel">
          <div className="col-md-5">
            <div className="productZoom">
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp"
                    }
                  ></InnerImageZoom>
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427356/1731427353236_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-2-202401240757.webp"
                    }
                  ></InnerImageZoom>
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src={
                      "https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp"
                    }
                  ></InnerImageZoom>
                </div>
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp"
                  className="w-100"
                  alt=""
                  onClick={() => goto(0)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427356/1731427353236_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-2-202401240757.webp"
                  className="w-100"
                  alt=""
                  onClick={() => goto(1)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731427355/1731427353235_noise-alt-lit-smartwatch-berry-blue-digital-o494352052-p607510006-0-202401240757.webp"
                  className="w-100"
                  alt=""
                  onClick={() => goto(2)}
                ></img>
              </div>
            </Slider>
          </div>

          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg mr-2">$9.35</span>
              <span className="netPrice text-danger lg">$6.35</span>
            </div>
            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">
              Rs: Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>


            <div className="d-flex align-items-center">
              <QuantityBox></QuantityBox>
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">Add to cart</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
