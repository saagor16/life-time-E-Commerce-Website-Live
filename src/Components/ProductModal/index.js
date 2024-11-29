import Button from "@mui/material/Button";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";

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

        <h4 className="mb-0">
          Alt Lit Smartwatch with Bluetooth Calling, 1.85 Inch TFT Screen
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span>Brands:</span>
            <span className="ml-2">Welch</span>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;
