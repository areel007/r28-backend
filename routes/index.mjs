import { Router } from "express";
import newsAndEvents from "../routes/news.events/index.mjs";

const router = Router();

router.use("/api/news-and-events", newsAndEvents);

export default router;
