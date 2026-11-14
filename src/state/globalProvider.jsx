import { useState } from 'react';

import GlobalContext from './globalContext';

function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name: "Isaac", id: 71})

    function addProductToCart(product) {
        setCart(prevCart => {
            const exists = prevCart.some(item => item._id === product._id)
            if (!exists) return [...prevCart, product]

            return prevCart.map(item =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            )
        })
    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item._id !== id))
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>

        {props.children}{/* render any children components inside the provider */}

        </GlobalContext.Provider>
    )
}

export default GlobalProvider