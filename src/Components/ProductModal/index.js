import Button from "@mui/material/Button";
import React from "react";
import Dialog from "@mui/material/Dialog";
import { MdClose } from "react-icons/md";

const ProductModal = () => {
  return (
    <>
      <Dialog
        open={true}
        
      >
        <Button className="close_">
          <MdClose></MdClose>
        </Button>
        
        
      </Dialog>
    </>
  );
};

export default ProductModal;
