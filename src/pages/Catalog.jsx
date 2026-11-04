import './Catalog.css';
import { useEffect, useState } from "react";
import DataService from '../services/dataService.js';
import Product from '../components/Product';

function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        let service = new DataService();
        let data = service.getProduct();

        setProducts(data);

    }, []);

    return(
        <div className="catalog-container">
            <h4>Check out our products</h4>
            <p className="catalog-lead">
                Three items are in stock today. Set a quantity on a card, then add it to the cart.
            </p>
            <div className="product-catalog">
                {products.map( prod => <Product key={prod._id} data={prod}/>)}
            </div>
        </div>
    )
}

export default Catalog;
