import { useEffect, useState } from "react";
import Layout from "../layout";
import { fetchProducts } from "../api/products";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then((data) => setProducts(data));
    }, []);

    return (
        <Layout>
            <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">Nos produits</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products && products.map(product => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-4 flex-1 flex flex-col">
                                <h2 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h2>
                                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{product.category}</span>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">{product.brand}</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className="text-yellow-500 mr-1">
                                        {'★'.repeat(Math.round(product.rating))}
                                        {'☆'.repeat(5 - Math.round(product.rating))}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-1">({product.numReviews})</span>
                                </div>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xl font-bold text-indigo-600">{product.price} €</span>
                                    {product.countInStock > 0 ? (
                                        <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">En stock</span>
                                    ) : (
                                        <span className="bg-red-200 text-red-800 text-xs px-2 py-1 rounded">Rupture</span>
                                    )}
                                </div>
                                <p className="text-xs text-gray-400 mt-2">Ajouté le {new Date(product.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
