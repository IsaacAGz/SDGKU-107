import './Catalog.css';
import Product from '../components/Product';

function Catalog() {
    return(
        <div className="catalog-container">
            <h4>Check out our Products</h4>
            <div className="product-catalog">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>


    )
}


export default Catalog;
