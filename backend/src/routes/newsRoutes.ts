import { Router } from "express";
import { getNews } from "../controllers/get-news";
import { addNew } from "../controllers/add-new";

const router = Router();

router.get("/", getNews);
router.post("/add", addNew);

export default router;
