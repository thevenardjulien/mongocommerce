import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { dirname, sep } from "path";
import { fileURLToPath } from "url";
import process from "process";
import { createAdminUser } from "./seeders/createAdminUser.js";

// Import des routeurs

const url = process.env.DB_URL || "mongodb://localhost:27017/";
const dbName = process.env.DB_NAME || "mongocommerceapi";

async function main() {
  await mongoose.connect(`${url}${dbName}`);
}

main()
  .then(() => console.log(`Connected to MongoDB database : ${dbName}`))
  .then(() => createAdminUser())
  .catch((err) => console.log(err));

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;

// Configuration
const cfg = {
  port: process.env.APP_PORT || process.argv[2] || 7777,
  dir: {
    root: __dirname,
    public: __dirname + "public" + sep,
  },
};

// Cors

app.use(cors());

// Static files
app.use(express.static(cfg.dir.public));

// Middlewares de base
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.get("/api", async (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// Gestion des erreurs
app.use((req, res) => {
  console.log(`[404] ${req.method} ${req.path}`);
  res.status(404).send("Page not found");
});

// Démarrage du serveur
app.listen(cfg.port, () => {
  console.log(`Serveur démarré sur http://localhost:${cfg.port}`);
});
