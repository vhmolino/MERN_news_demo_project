import { Router } from "express";
import { getNews } from "../controllers/newsController";

const router = Router();

// Definir las rutas relacionadas con los usuarios
router.get("/", getNews);

export default router;
