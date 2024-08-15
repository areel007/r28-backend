import { Router } from "express";
import {
  getCoreValues,
  getWhoWeAre,
  newCoreValues,
  newWhoWeAre,
  updateCoreValues,
  updateWhoWeAre,
} from "../../controllers/about/index.mjs";

const router = Router();

// who we are
router.route("/who-we-are").post(newWhoWeAre);
router.route("/who-we-are/:id").get(getWhoWeAre).patch(updateWhoWeAre);

// core values
router.route("/core-values").post(newCoreValues);
router.route("/core-values/:id").get(getCoreValues).patch(updateCoreValues);

export default router;
