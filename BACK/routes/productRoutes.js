import express from "express";
import {
  getProducts,
  getProduct,
  postCreateProduct,
} from "../controllers/productController.js";
import upload from "../middlewares/multer.js";
import { auth } from "../middlewares/auth.js";
import { isAdmin } from "../middlewares/isAdmin.js";

export const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:id", getProduct);
productRoutes.post(
  "/create",
  auth,
  isAdmin,
  upload.single("image"),
  postCreateProduct,
);
