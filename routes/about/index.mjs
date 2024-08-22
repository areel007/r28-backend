import { Router } from "express";
import {
  getCoreValues,
  getWhoWeAre,
  newCoreValues,
  newWhoWeAre,
  updateCoreValues,
  updateWhoWeAre,
  addWhoWeAreBanner,
  getWhoWeAreBanner,
  updateWhoWeAreBanner,
  addCoreValuesBanner,
  getCoreValuesBanner,
  updateCoreValuesBanner,
} from "../../controllers/about/index.mjs";

const router = Router();

// who we are
router.route("/who-we-are").post(newWhoWeAre);
router.route("/who-we-are/:id").get(getWhoWeAre).patch(updateWhoWeAre);

// core values
router.route("/core-values").post(newCoreValues);
router.route("/core-values/:id").get(getCoreValues).patch(updateCoreValues);

// who we are banner image
router.route("/who-we-are/banner-image").post(addWhoWeAreBanner);
router
  .route("/who-we-are/banner-image/:id")
  .get(getWhoWeAreBanner)
  .patch(updateWhoWeAreBanner);

// core values banner image
router.route("/core-values/banner").post(addCoreValuesBanner);
router
  .route("/core-values/banner/:id")
  .get(getCoreValuesBanner)
  .patch(updateCoreValuesBanner);

export default router;
