import { Router } from "express";
import {
  newApproach,
  getApproach,
  updateApproach,
  addApproachBanner,
  getApproachBanner,
  updateApproachBanner,
} from "../../controllers/approach/index.mjs";

const router = Router();

router.route("/").post(newApproach);
router.route("/:id").get(getApproach).patch(updateApproach);

router.route("/banner-image").post(addApproachBanner);
router
  .route("/banner-image/:id")
  .get(getApproachBanner)
  .patch(updateApproachBanner);

export default router;
