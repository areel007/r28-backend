import { Router } from "express";
import {
  getStrategicAlliances,
  newStrategicAlliances,
  updateStrategicAlliances,
} from "../../controllers/strategic-alliances/index.mjs";

const router = Router();

router.route("/").post(newStrategicAlliances);
router.route("/:id").get(getStrategicAlliances).patch(updateStrategicAlliances);

export default router;
