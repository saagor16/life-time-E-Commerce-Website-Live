import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedTab , setSelectedTab]=useState(null)

  const context = useContext(MyContext);

  const selectCountry=(index)=>{
    setSelectedTab(index);
    setIsOpenModel(false)
  }

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
          {context.countryList?.length !== 0 &&
            context.countryList?.map((item, index) => (
              <li key={index} >
                <Button onClick={() => selectCountry(index)}
                  className={`${selectedTab === index ? 'active':''}`}
                >{item.country}</Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
