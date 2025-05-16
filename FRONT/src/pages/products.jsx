import { useEffect, useState } from "react";
import Layout from "../layout";
import { fetchProducts } from "../api/products";
import Boutique from "../components/boutique";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <Layout>
            <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen flex flex-col items-center gap-10">
                <h1 className="text-5xl font-bold text-gray-800 mb-10">Nos produits</h1>
                <Boutique products={products} />
            </div>
        </Layout>
    );
}
