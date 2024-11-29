import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
const QuantityBox = () => {
  const [inputVal, setInputVal] = useState(1);
  const minus = () => {
    if (inputVal !== 1 && inputVal > 0) {
      setInputVal(inputVal - 1);
    }
  };
  const plus = () => {
    setInputVal(inputVal + 1);
  };

  return (
    <div>
      <div className="quantityDrop d-flex align-items-center">
        <Button onClick={minus}>
          <FaMinus></FaMinus>
        </Button>
        <input text="text" value={inputVal}></input>
        <Button onClick={plus}>
          <FaPlus></FaPlus>
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
