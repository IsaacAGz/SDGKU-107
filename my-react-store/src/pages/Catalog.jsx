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

        //The empty array means the effect runs only ONCE
    }, []);

    return(
        <div className="catalog-container">
            <h4>Check out our Products</h4>
            <div className="product-catalog">
                {products.map( prod => <Product key={prod._id} data={prod} />)}
            </div>
        </div>


    )
}

export default Catalog;
