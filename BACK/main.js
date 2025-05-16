import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import path, { dirname, sep } from "path";
import { fileURLToPath } from "url";
import process from "process";
import { createAdminUser } from "./seeders/createAdminUser.js";
import { createUsers } from "./seeders/createUsers.js";
import { createProducts } from "./seeders/productsSeeders.js";
import cookieParser from "cookie-parser";

// Import des routeurs
import { apiRoutes } from "./routes/apiRoute.js";
import { authRoutes } from "./routes/authRoutes.js";
import { productRoutes } from "./routes/productRoutes.js";

const url = process.env.DB_URL || "mongodb://localhost:27017/";
const dbName = process.env.DB_NAME || "mongocommerceapi";

async function main() {
  await mongoose.connect(`${url}${dbName}`);
}

main()
  .then(() => console.log(`Connected to MongoDB database : ${dbName}`))
  // Seeders
  .then(() => {
    createAdminUser();
    createUsers();
    createProducts();
  })
  .catch((err) => console.log(err));

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;

// Configuration
const cfg = {
  port: process.env.APP_PORT || process.argv[2] || 7777,
  dir: {
    root: __dirname,
    public: path.join(__dirname, "public"),
    uploads: path.join(__dirname, "uploads"),
    uploadsProducts: path.join(__dirname, "uploads/products"),
  },
};

// Cors, Cookies, Static files, Json, encodage URL
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.static(cfg.dir.public));
app.use(express.static(cfg.dir.uploads));
app.use(express.static(cfg.dir.uploadsProducts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/api", apiRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Gestion des erreurs
app.use((req, res) => {
  console.log(`[404] ${req.method} ${req.path}`);
  res.status(404).send("Page not found");
});

// Démarrage du serveur
app.listen(cfg.port, () => {
  console.log(`Serveur démarré sur http://localhost:${cfg.port}`);
});
