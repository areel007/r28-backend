import { Router } from "express";
import newsAndEvents from "../routes/news.events/index.mjs";
import auth from "../routes/auth/index.mjs";

const router = Router();

router.use("/api/news-and-events", newsAndEvents);
router.use("/api/auth", auth);

export default router;
