import express from "express";
import {
  getProducts,
  postCreateProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";

export const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.post("/create", upload.single("image"), postCreateProduct);
