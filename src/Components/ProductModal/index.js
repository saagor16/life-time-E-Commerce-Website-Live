import Button from "@mui/material/Button";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';

const ProductModal = (props) => {
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
            <span className="ml-2"><b>Welch</b></span>
          </div>
          <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
