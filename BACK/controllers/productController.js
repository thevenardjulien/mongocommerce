import { Product } from "../models/ProductModel.js";

export async function getProducts(req, res) {
  const products = await Product.find().sort({ createdAt: -1 });
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "No products found" });
  }
}

export async function postCreateProduct(req, res) {
  const { name, description, brand, category, price, countInStock } = req.body;
  const product = await Product.findOne({ name });
  if (product) {
    res.status(400).json({ message: "Ce produit existe déjà" });
  } else {
    try {
      const product = await Product.create({
        name,
        image: req.file ? req.file.filename : "",
        description,
        brand,
        category,
        price,
        countInStock,
        rating: undefined,
        numReviews: 0,
      });
      res.status(201).json(product);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Erreur lors de la création du produit" });
    }
  }
}
