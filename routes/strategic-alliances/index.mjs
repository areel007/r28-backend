import { Router } from "express";
import {
  getStrategicAlliances,
  newStrategicAlliances,
  updateStrategicAlliances,
  addStrategicAlliancesBanner,
  getStrategicAlliancesBanner,
  updateStrategicAlliancesBanner,
} from "../../controllers/strategic-alliances/index.mjs";

const router = Router();

router.route("/").post(newStrategicAlliances);
router.route("/:id").get(getStrategicAlliances).patch(updateStrategicAlliances);

router.route("/banner-image").post(addStrategicAlliancesBanner);
router
  .route("/banner-image/:id")
  .get(getStrategicAlliancesBanner)
  .patch(updateStrategicAlliancesBanner);

export default router;
