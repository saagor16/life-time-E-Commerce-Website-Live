import Button from "@mui/material/Button";
import { FaAnglesDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navPart1">
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

          <div className="col-sm-9 navPart2">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Fashion</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Electronics</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Bakery</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Groceries</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
