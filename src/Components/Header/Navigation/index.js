import Button from "@mui/material/Button";
import { CiHome } from "react-icons/ci";
import { FaAnglesDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

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
                <Link to="/"><Button><CiHome></CiHome> &nbsp; Home</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Fashion</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Electronics</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Bakery</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Groceries</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Blog</Button></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/"><Button>Contact Us</Button></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
