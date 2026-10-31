import { useState } from 'react';
import './Admin.css';

function Admin() {
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(""); 
    const [coupons, setCoupons] = useState([]);

    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState(""); 
    const [productURL, setProductURL] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    function saveCoupon(event) {
        event.preventDefault();

        console.log(couponCode);
        console.log(couponDiscount);

        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        };
        
        setCoupons([...coupons, newCoupon]);

        setCouponCode("");
        setCouponDiscount("");
    }

    function saveProduct(event) {
        if (!productTitle.trim() || !productCategory.trim() || !productURL.trim()) return;
        event.preventDefault();
        console.log(productTitle);

        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productURL,
            price: parseFloat(productPrice)
        };
        
        setProducts([...products, newProduct]);

        setProductTitle("");
        setProductCategory("");
        setProductURL("");
        setProductPrice("");
    }

    return (
        <div className="admin">
            <h1>Store Administration</h1>
            
            <div className="d-flex gap-4">
                <section className="w-50 border">
                    <h2>Products</h2>

                    <form className="m-4">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={productTitle}
                                onChange={(event) => setProductTitle(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={productCategory}
                                onChange={(event) => setProductCategory(event.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">URL</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={productURL}
                                onChange={(event) => setProductURL(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label className="form-label">Price</label>
                            <input 
                                type="number" 
                                className="form-control"
                                value={productPrice}
                                onChange={(event) => setProductPrice(event.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <button type="submit" className="btn-solid theme-inverse" onClick={saveProduct}>Save Product</button>
                        </div>
                    </form>

                    <div>
                        <h5>Products List:</h5>

                        {
                            products.map((product, index) => (
                                <div key={index} className="list-item">
                                    <img src={product.image} alt={product.title} />
                                    <span className="title">{product.title}</span>
                                    <span className="category">{product.category}</span>
                                    <span className="price">${product.price.toFixed(2)}</span>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="w-50 border">
                    <h2>Add Coupons</h2>

                    <div>
                        <div className="m-4">
                            <div className="mb-3">
                                <label className="form-label">Code</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={couponCode}
                                    onChange={(event) => setCouponCode(event.target.value)}
                                />
                            </div>

                            <div>
                                <label className="form-label">Discount</label>
                                <input 
                                    type="number" 
                                    className="form-control"
                                    value={couponDiscount}
                                    onChange={(event) => setCouponDiscount(event.target.value)}
                                />
                            </div>

                            <div>
                                <button className="btn-solid theme-inverse" onClick={saveCoupon}>Save Coupon</button>
                            </div>
                        </div>
                    </div>

                    

                    <div>
                        <h5>Coupons List:</h5>

                        {
                            coupons.map((coupon, index) => (
                                <div key={index} className="list-item">
                                    <span className="title">{coupon.code}</span>
                                    <span className="price">{coupon.discount}% off</span>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
        
    );
}

export default Admin
