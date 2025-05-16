import { useParams } from "react-router-dom";
import Layout from "../layout";
import { fetchProduct } from "../api/products";
import { useEffect, useState } from "react";

export default function Product() {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct(id).then((data) => setProduct(data));
  }, [id]);

  return (
    <Layout>
      <div
        style={{
          maxWidth: 900,
          margin: "40px auto",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          display: "flex",
          gap: 40,
          padding: 32,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: 280 }}>
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/${product.image}`}
            alt={product.name}
            style={{
              width: "100%",
              borderRadius: 8,
              objectFit: "cover",
              maxHeight: 350,
              background: "#fafafa",
            }}
          />
        </div>
        <div style={{ flex: "2 1 350px", minWidth: 300 }}>
          <h1 className="text-3xl font-bold mb-4" style={{ marginTop: 0 }}>{product.name}</h1>
          <p>
            <strong>Marque :</strong> {product.brand}
          </p>
          <p>
            <strong>Catégorie :</strong> {product.category}
          </p>
          <p style={{ fontSize: 18, margin: "20px 0" }}>{product.description}</p>
          <div style={{ fontSize: 22, fontWeight: "bold", color: "#2d7a2d" }}>
            {product.price} €
          </div>
          <div style={{ margin: "16px 0" }}>
            {product.countInStock > 0 ? (
              <span style={{ color: "#2d7a2d" }}>
                En stock ({product.countInStock})
              </span>
            ) : (
              <span style={{ color: "#d32f2f" }}>Rupture de stock</span>
            )}
          </div>
          <button
            disabled={product.countInStock === 0}
            style={{
              padding: "12px 32px",
              fontSize: 16,
              borderRadius: 6,
              background: product.countInStock === 0 ? "#ccc" : "#1976d2",
              color: "#fff",
              border: "none",
              cursor: product.countInStock === 0 ? "not-allowed" : "pointer",
              transition: "background 0.2s",
            }}
            onClick={() => alert("Ajouté au panier !")}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </Layout>
  );
}
