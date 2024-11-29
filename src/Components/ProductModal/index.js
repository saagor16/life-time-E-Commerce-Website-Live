import Button from "@mui/material/Button";
import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';



const ProductModal = (props) => {

  const zoomSliderBig=useRef();
  const zoomSlider=useRef();


  var settings2 ={
    dots:false,
    infinite:false,
    speed:700,
    slidesToShow:1,
    slidesToScroll:1,
    fade:false,
    arrows:false,
  }
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
                className="zoomSliderBir"
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
              </Slider>
            </div>
          </div>

          <div className="col-md-7"></div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
