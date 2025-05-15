import { Product } from "../models/ProductModel.js";

export async function getProducts(req, res) {
  const products = await Product.find();
  if (products) {
    res.status(200).json(products);
  } else {
    res.status(404).json({ message: "No products found" });
  }
}
