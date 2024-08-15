import { Router } from "express";
import {
  addStats,
  getStats,
  updateStats,
} from "../../../controllers/home/stats/index.mjs";

const router = Router();

router.route("/").post(addStats);
router.route("/:id").get(getStats).patch(updateStats);

export default router;
