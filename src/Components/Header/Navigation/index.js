import Button from "@mui/material/Button";
import { useState } from "react";
import { FaChild, FaClock, FaFemale, FaGift, FaHome } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";
import { GiClothes, GiLipstick } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu></IoIosMenu>
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ml-2">
                  <FaAnglesDown></FaAnglesDown>
                </span>
              </Button>
              <div className={`sidebarNav ${isOpenSidebarVal===true?'open':''}`}>
                <ul>
                  <li>
                    <Link to="/">
                      <Button>
                        <GiClothes /> &nbsp; Men
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        <FaFemale /> &nbsp; Women
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        <GiLipstick /> &nbsp; Beauty
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        <FaClock /> &nbsp; Watches
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        <FaChild /> &nbsp; Kids
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        <FaGift /> &nbsp; Gift
                      </Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-10 navPart2 d-flex align-items-center">
            <ul className="list list-inline ml-auto">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaHome /> &nbsp; Home
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiClothes /> &nbsp; Men
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaFemale /> &nbsp; Women
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Clothing</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                  <Link to="/">
                    <Button>Footwear</Button>
                  </Link>
                  <Link to="/">
                    <Button>Watches</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <GiLipstick /> &nbsp; Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaClock /> &nbsp; Watches
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaChild /> &nbsp; Kids
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FaGift /> &nbsp; Gift
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
