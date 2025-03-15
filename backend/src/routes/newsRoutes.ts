import { Router } from "express";
import { getNews } from "../controllers/get-news";
import { addNew } from "../controllers/add-new";
import { archiveNew } from "../controllers/archive-new";
import { getArchivedNews } from "../controllers/get-archived-news";
import { deleteNew } from "../controllers/delete-new";

const router = Router();

router.post("/", getNews);
router.post("/getArchivedNews", getArchivedNews);
router.post("/add", addNew);
router.post("/archiveNew", archiveNew);
router.post("/deleteNew", deleteNew);

export default router;
