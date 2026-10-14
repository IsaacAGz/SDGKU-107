import './Catalog.css';
import { useEffect, useState } from "react";
import DataService from '../services/dataService.js';
import Product from '../components/Product';
import Totals from '../components/Totals';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        let service = new DataService();
        let data = service.getProduct();

        setProducts(data);

        //The empty array means the effect runs only ONCE
    }, []);

    function addToCart(product, quantity) {
        if (quantity <= 0) {
            return;
        }

        setCart(current => {
            let existing = current.find(item => item._id === product._id);

            if (existing) {
                return current.map(item => {
                    if (item._id !== product._id) {
                        return item;
                    }

                    return { ...item, quantity: item.quantity + quantity };
                });
            }

            return [
                ...current,
                {
                    _id: product._id,
                    title: product.title,
                    price: product.price,
                    quantity: quantity
                }
            ];
        });
    }

    return(
        <div className="catalog-container">
            <h4>Check out our Products</h4>
            <div className="product-catalog">
                {products.map( prod => <Product key={prod._id} data={prod} onAddToCart={addToCart} />)}
            </div>
            <Totals cart={cart} />
        </div>


    )
}

export default Catalog;
