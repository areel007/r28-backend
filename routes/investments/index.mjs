import { Router } from "express";
import {
  addInvestment,
  deleteInvestment,
  getInvestment,
  getInvestments,
  updateInvestment,
} from "../../controllers/investments/index.mjs";

const router = Router();

router.route("/").post(addInvestment).get(getInvestments);

router
  .route("/:id")
  .get(getInvestment)
  .delete(deleteInvestment)
  .patch(updateInvestment);

export default router;
