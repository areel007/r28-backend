import { Router } from "express";
import {
  addOverview,
  getOverview,
  updateOverview,
} from "../../../controllers/home/overview/index.mjs";

const router = Router();

router.route("/").post(addOverview);
router.route("/:id").get(getOverview).patch(updateOverview);

export default router;
