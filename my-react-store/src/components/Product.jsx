import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product(props) {
    return(
        <div className="product-container">
            <div class="product-image-wrapper">
                <img class="product-image" src={"/images/" + props.data.image} alt="Product"></img>
            </div>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>{props.data.price}.00</label><br></br>
                <label>Total</label>
            </div>
            <QuantityPicker/>
        </div>
    )
}

export default Product;