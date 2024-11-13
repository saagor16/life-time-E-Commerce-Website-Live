import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import CountryDropdown from "../CountryDropdown";
import { IoBagOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="headerWrapper">
      {/* Top Announcement Strip */}
      <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the <b>COVID-19</b> epidemic, orders may be processed with
            a slight delay
          </p>
        </div>
      </div>
      
      {/* Main Header Section */}
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Section */}
            <div className="logoWrapper d-flex align-items-center col-sm-3">
              <Link to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>
            
            {/* Country Dropdown, Search Bar, and User/Cart Section */}
            <div className="part2 d-flex align-items-center col-sm-9">
              <CountryDropdown />

              {/* Header Search Bar */}
              <SearchBox></SearchBox>

              {/* User and Cart Icons */}
              <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle mr-3">
                  <FiUser />
                </Button>
                <div className="ml-auto d-flex cartTab align-items-center">
                  <span className="price">$3.29</span>
                  <div className="position-relative ml-2">
                    <Button className="circle">
                      <IoBagOutline />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



      <nav>
        <div className="container">
          
        </div>
      </nav>







    </div>
  );
};

export default Header;
