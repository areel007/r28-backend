import { Router } from "express";
import newsAndEvents from "../routes/news.events/index.mjs";
import auth from "../routes/auth/index.mjs";
import user from "../routes/user/index.mjs";
import about from "../routes/about/index.mjs";
import approach from "../routes/approach/index.mjs";
import strategicAlliances from "../routes/strategic-alliances/index.mjs";
import hero from "../routes/home/hero/index.mjs";
import overview from "../routes/home/overview/index.mjs";
import stats from "../routes/home/stats/index.mjs";
import whatWeDo from "../routes/home/what-we-do/index.mjs";
import footer from "../routes/home/footer/index.mjs";
import investments from "../routes/investments/index.mjs";

const router = Router();

router.use("/api/news-and-events", newsAndEvents);
router.use("/api/auth", auth);
router.use("/api/users", user);
router.use("/api/about", about);
router.use("/api/approach", approach);
router.use("/api/strategic-alliances", strategicAlliances);
router.use("/api/home/hero", hero);
router.use("/api/home/overview", overview);
router.use("/api/home/stats", stats);
router.use("/api/home/what-we-do", whatWeDo);
router.use("/api/home/footer", footer);
router.use("/api/investments", investments);

export default router;
