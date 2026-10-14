import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {

    const [quantity, setQuantity] = useState (1);

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

    return (
        <div className="quantity-picker">
            <button className="btn btn-primary btn-minus" onClick={handleDecrease}>-</button>
            <label className="label-qty">{quantity}</label>
            <button className="btn btn-primary btn-plus" onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;