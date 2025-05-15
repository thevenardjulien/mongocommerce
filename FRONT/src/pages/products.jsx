import { useState } from "react";
import Layout from "../layout";

export default function Products() {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:3000/api/products");
        if(response.ok && response.status === 200) {
            const data = await response.json();
            setProducts(data);
        }
    };

    fetchProducts();

    return (
        <Layout>
            <div className="App py-6 px-4 sm:px-6 lg:px-8">
                <h1>Products</h1>
                <div className="flex flex-col gap-10">
                    {products && products.map(product => (
                        <div key={product._id}>
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} />
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}