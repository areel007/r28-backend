import { Router } from "express";
import {
  addFooter,
  getFooter,
  updateFooter,
} from "../../../controllers/home/footer/index.mjs";

const router = Router();
router.route("/").post(addFooter);
router.route("/:id").get(getFooter).patch(updateFooter);

export default router;
