import express from "express";
import { getApi } from "../controllers/apiController.js";

export const apiRoutes = express.Router();

apiRoutes.get("/", getApi);
