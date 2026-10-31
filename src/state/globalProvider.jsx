import { useState } from 'react';

import GlobalContext from './globalContext'

function GlobalProvider(props) {
    const [cart, setCart] = useState([])
    const [user, setUser] = useState({name: "Isaac", id: 71})

    function addProductToCart() {

    }

    function clearCart() {
        setCart([])
    }

    function removeProductFromCart() {

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