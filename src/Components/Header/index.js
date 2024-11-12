import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import CountryDropdown from "../CountryDropdown";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-blue">
          <div className="container">
            <p className="mb-0 mt-0 text-center">
              Due to the <b>COVID 19</b> epidemic, orders may be processed with
              a slight delay
            </p>
          </div>
        </div>
        {/* Main Header Section */}
        <header className="header">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="logoWrapper d-flex align-items-center col-sm-3">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              {/* Country Dropdown and Search Bar */}
              <div className="part2 d-flex align-items-center col-sm-9">
                <CountryDropdown />

                {/* Header Search Bar */}
                <div className="headerSearch mr-3  ml-3">
                  <input
                    type="text"
                    placeholder="Search for products..."
                  />
                  <Button>
                    <IoSearch />
                  </Button>
                </div>

                {/* header search end bars */}
                <div className="part3 d-flex align-items-center ml-auto">
                    <Button className="circle mr-3"><FiUser></FiUser></Button>
                    <div className="ml-auto d-flex cartTab">
                        <span className="price">$3.29</span>
                        <Button className="circle ml-2"><IoBagOutline></IoBagOutline></Button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
