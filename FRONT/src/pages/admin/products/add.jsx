import React, { useState } from "react";
import Layout from "../../../layout";
import { fetchCreateProduct } from "../../../api/products";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        description: "",
        brand: "",
        category: "",
        price: "",
        countInStock: "",
        image: null,
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setForm({ ...form, [name]: files[0] });
        } else {
            setForm({ ...form, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null) formData.append(key, value);
        });

        try {
            const res = await fetchCreateProduct(formData);
            const data = await res.json();

            if(res.ok && res.status === 201) {
                setMessage("Produit ajouté avec succès");
                navigate("/");
            } else {
                setMessage(data.message);
            }

        } catch (error) {
            setMessage("Erreur réseau ou serveur: " + error.message);
            console.error(error);
        }
    };

    return (
        <Layout>
            <div className="max-w-xl mx-auto bg-white rounded shadow p-8">
                <h1 className="text-3xl font-bold mb-8">Admin - Ajouter un produit</h1>
                <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom du produit"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={form.description}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="brand"
                        placeholder="Marque"
                        value={form.brand}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Catégorie"
                        value={form.category}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Prix"
                        value={form.price}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                        min="0"
                        step="0.01"
                    />
                    <input
                        type="number"
                        name="countInStock"
                        placeholder="Stock"
                        value={form.countInStock}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded"
                        required
                        min="0"
                    />
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gray-900 text-white py-2 rounded"
                    >
                        Ajouter le produit
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-sm text-red-600">{message}</div>
                )}
            </div>
        </Layout>
    );
}
