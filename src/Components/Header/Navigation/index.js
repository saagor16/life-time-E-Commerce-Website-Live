import Button from "@mui/material/Button";
import { CiHome } from "react-icons/ci";
import { FaAnglesDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaTshirt } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GiCakeSlice } from "react-icons/gi";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <Button className="allCatTab align-items-center">
              <span className="icon1 mr-2">
                <IoIosMenu></IoIosMenu>
              </span>
              <span className="text">ALL CATEGORIES</span>
              <span className="icon2 ml-2">
                <FaAnglesDown></FaAnglesDown>
              </span>
            </Button>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <CiHome /> &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaTshirt /> &nbsp; Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdOutlineElectricalServices /> &nbsp; Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiCakeSlice /> &nbsp; Bakery
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdLocalGroceryStore /> &nbsp; Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaBloggerB /> &nbsp; Blog
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdContactMail /> &nbsp; Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
