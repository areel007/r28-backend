import { Router } from "express";
import {
  newApproach,
  getApproach,
  updateApproach,
} from "../../controllers/approach/index.mjs";

const router = Router();

router.route("/").post(newApproach);
router.route("/:id").get(getApproach).patch(updateApproach);

export default router;
