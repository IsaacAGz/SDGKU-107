import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product() {
    return(
        <div className="product-container">
            <img src="https://picsum.photos/200/300" alt="Product"></img>
            <h5>Test Title</h5>
            <div className="prices">
                <label>Price</label>
                <label>Total</label>
            </div>
            <QuantityPicker/>
        </div>
    )
}

export default Product;