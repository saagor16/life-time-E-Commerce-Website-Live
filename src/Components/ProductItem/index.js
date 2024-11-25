import { Rating } from "@mui/material";
import Button from "@mui/material/Button";



const ProductItem = () => {
    return (
        <>
            <div className="item productItem">
                      <div className="imgWrapper">
                        <img
                          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg"
                          alt=""
                          className="w-100"
                        />
                        <span className="badge badge-primary">20%</span>
                        
                        <div className="actions">
                          <Button></Button>
                        </div>

                      </div>
                      <div className="info">
                        <h4>Weathers Original Caramel Hard Candies</h4>
                        <span className="text-danger d-block">In Stock</span>
                        <Rating
                          className="mt-2 mb-2"
                          name="read-only"
                          value={5}
                          readOnly
                          size="small"
                          precision={0.5}
                        />
                        <div className="d-flex">
                          <span className="oldPrice">$20.00</span>
                          <span className="netPrice text-danger ml-2">
                            $15.00
                          </span>
                        </div>
                      </div>
                    </div>
        </>
    );
};

export default ProductItem;