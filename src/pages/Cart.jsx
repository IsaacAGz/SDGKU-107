import './Cart.css';
import { useContext } from 'react';
import GlobalContext from '../state/globalContext';

function Cart(){

    const globalCart = useContext(GlobalContext).cart;

    function getTotalItems() {
        let total = 0

        for(let i = 0; i < globalCart.length; i++) {
            total += globalCart[i].quantity;
        }

        return total;
    }

    function getTotalPrice() {
        let total = 0;

        for(let i = 0; i < globalCart.length; i++) {
            total += globalCart[i].price * globalCart[i].quantity;
        }

        return total;
    }

    return(
        <div className="Cart">
            <h5>Your Cart</h5>
            {globalCart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}
            <ul className="cart-items">
                {globalCart.map(item => {
                    const lineTotal = item.quantity * item.price;
                    return (
                        <li key={item._id}>
                            <img className="cart-image" src={"images/" + item.image}></img>
                            <span>{item.title}</span>
                            <span>{item.quantity} × ${item.price.toFixed(2)}</span>
                            <span>${lineTotal.toFixed(2)}</span>
                            <button className="btn-solid theme-danger pe-4">Delete</button>
                        </li>
                    );
                })}
            </ul>
            <p className="cart-total">You have {getTotalItems()} in your cart</p>
            <p className="cart-total">Total: ${getTotalPrice().toFixed(2)}</p>
        </div>
    )
}

export default Cart