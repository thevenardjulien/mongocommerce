import express from "express";
import { getProducts } from "../controllers/productController.js";

export const productRoutes = express.Router();

productRoutes.get("/", getProducts);
