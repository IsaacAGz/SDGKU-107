import { useContext, useEffect, useRef, useState } from 'react';
import GlobalContext from '../state/globalContext';

import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
    const globalAdd = useContext(GlobalContext).addProductToCart;
    const [quantity, setQuantity] = useState(0)
    const [justAdded, setJustAdded] = useState(false)
    const addedTimer = useRef(null)

    // Stop the timer if the card leaves the page before it finishes
    useEffect(() => () => clearTimeout(addedTimer.current), [])

    function handleQuantityChange(quantity) {
        setQuantity(quantity)
    }

    function onAdd() {
        if (quantity === 0) return;
        let fixedProduct = {...props.data}
        fixedProduct.quantity = quantity
        globalAdd(fixedProduct)
        setQuantity(0)

        // Show "Added" on the button for a moment
        setJustAdded(true)
        clearTimeout(addedTimer.current)
        addedTimer.current = setTimeout(() => setJustAdded(false), 1200)
    }

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
            <QuantityPicker value={quantity} onChange={handleQuantityChange}/>
            <div className="add-cart">
                <button
                    className={"btn btn-primary m-5 add-cart-btn" + (justAdded ? " added" : "")}
                    onClick={onAdd}
                >
                    <span aria-live="polite">{justAdded ? "Added ✓" : "Add Items to Cart"}</span>
                </button>
            </div>   
        </div>
    )
}

export default Product;