import React from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  return (
    <>
      <Button className="countryDrop" onClick={() => setIsOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">Bangladesh</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown></FaAngleDown>
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setIsOpenModel(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModel(false)}>
          <MdClose></MdClose>
        </Button>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search your area..." />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li onClick={() => setIsOpenModel(false)}>
            <Button>Bangladesh</Button>
          </li>
          <li onClick={() => setIsOpenModel(false)}>
            <Button>India</Button>
          </li>
          <li>
            <Button>Sri Lanka</Button>
          </li>
          <li>
            <Button>Saudi Arabia</Button>
          </li>
          <li>
            <Button>Italy</Button>
          </li>
          <li>
            <Button>United States</Button>
          </li>
          <li>
            <Button>United Kingdom</Button>
          </li>
          <li>
            <Button>Canada</Button>
          </li>
          <li>
            <Button>Australia</Button>
          </li>
          <li>
            <Button>Japan</Button>
          </li>
          <li>
            <Button>Germany</Button>
          </li>
          <li>
            <Button>France</Button>
          </li>
          <li>
            <Button>China</Button>
          </li>
          <li>
            <Button>Brazil</Button>
          </li>
          <li>
            <Button>South Africa</Button>
          </li>
          <li>
            <Button>Mexico</Button>
          </li>
          <li>
            <Button>Russia</Button>
          </li>
          <li>
            <Button>Spain</Button>
          </li>
          <li>
            <Button>Netherlands</Button>
          </li>
          <li>
            <Button>Argentina</Button>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
