import "./QuantityPicker.css";
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import { useState } from "react";

function QuantityPicker(props) {

    function handleDecrease() {
        let nextValue = props.value - 1;
        if (nextValue < 1) {
            nextValue = 1;
        }
        props.onChange(nextValue);
    }

    function handleIncrease() {
        props.onChange(props.value + 1);
    }

    return (
        <div className="product-buttons">
            <div className="quantity-picker">
                <button className="btn btn-primary btn-minus" onClick={handleDecrease}>-</button>
                <label className="label-qty">{props.value}</label>
                <button className="btn btn-primary btn-plus" onClick={handleIncrease}>+</button>
            </div>   
        </div>    
    )
}

export default QuantityPicker;