import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker(props) {

    const [quantity, setQuantity] = useState (0);

    function handleDecrease() {
        let nextValue = quantity - 1;

        if (nextValue <= 0) {
            nextValue = 0;
        }

        setQuantity(nextValue);
    }

    function handleIncrease() {
        let nextValue = quantity + 1;
        setQuantity(nextValue);
    }

    function addToCart() {
        props.onAddToCart(props.data, quantity);
        setQuantity(0);
    }

    return (
        <div className="product-buttons">
            <div className="quantity-picker">
                <button className="btn btn-primary btn-minus" onClick={handleDecrease}>-</button>
                <label className="label-qty">{quantity}</label>
                <button className="btn btn-primary btn-plus" onClick={handleIncrease}>+</button>
            </div>
            <div className="add-cart">
                <button className="btn btn-primary" onClick={addToCart}>Add Items to Cart</button>
            </div>      
        </div>    
    )
}

export default QuantityPicker;