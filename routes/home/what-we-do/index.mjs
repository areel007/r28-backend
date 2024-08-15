import { Router } from "express";
import {
  addWhatWeDo,
  getWhatWeDo,
  updateWhatWeDo,
} from "../../../controllers/home/what-we-do/index.mjs";

const router = Router();

router.route("/").post(addWhatWeDo);
router.route("/:id").get(getWhatWeDo).patch(updateWhatWeDo);

export default router;
