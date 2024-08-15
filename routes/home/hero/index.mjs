import { Router } from "express";
import {
  addHeroText,
  getHeroText,
  updateHeroText,
} from "../../../controllers/home/hero/index.mjs";

const router = Router();

router.route("/hero-text").post(addHeroText);
router.route("/hero-text/:id").get(getHeroText).patch(updateHeroText);

export default router;
