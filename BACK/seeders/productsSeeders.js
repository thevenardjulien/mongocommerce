import { Product } from "../models/ProductModel.js";
import { products } from "../data/products.js";

export async function createProducts() {
  try {
    for (const product of products) {
      const newProduct = await Product.findOne({ name: product.name });
      if (!newProduct) {
        await Product.create({ ...product, createdAt: Date.now() });
        console.log("Created product : ", product.name);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
