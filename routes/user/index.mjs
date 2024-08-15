import { Router } from "express";
import {
  changePassword,
  deleteUser,
  getAllUsers,
} from "../../controllers/auth/index.mjs";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/:id").delete(deleteUser).patch(changePassword);

export default router;
