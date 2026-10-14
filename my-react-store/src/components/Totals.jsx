import "./Totals.css";

function Totals(props) {
    const cart = props.cart;

    const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return(
        <div className="Cart">
            <h5>Your Cart</h5>
            {cart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}
            <ul className="cart-items">
                {cart.map(item => {
                    const lineTotal = item.quantity * item.price;
                    return (
                        <li key={item._id}>
                            <span>{item.title}</span>
                            <span>{item.quantity} × ${item.price.toFixed(2)}</span>
                            <span>${lineTotal.toFixed(2)}</span>
                        </li>
                    );
                })}
            </ul>
            <p className="cart-total">Total: ${total.toFixed(2)}</p>
        </div>
    )
}

export default Totals;
