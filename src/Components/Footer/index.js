import { CiBadgeDollar } from "react-icons/ci";
import { LuShirt } from "react-icons/lu";
import { TbDisabled2, TbTruckDelivery } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span><LuShirt></LuShirt></span>
            <span className="ml-2">Everyday fresh products</span>
          </div>

          <div className="col d-flex align-items-center">
            <span><TbTruckDelivery></TbTruckDelivery></span>
            <span className="ml-2">Free delivery for order over $70</span>
          </div>

          <div className="col d-flex align-items-center">
            <span><TbDisabled2></TbDisabled2></span>
            <span className="ml-2">Daily Mega Discounts</span>
          </div>

          <div className="col d-flex align-items-center">
            <span><CiBadgeDollar></CiBadgeDollar></span>
            <span className="ml-2">Best price on the market</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
