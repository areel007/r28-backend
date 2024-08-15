import { Router } from "express";
import {
  registerUser,
  loginUser,
  changePassword,
  getAllUsers,
  deleteUser,
} from "../../controllers/auth/index.mjs";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/change-password").post(changePassword);
router.route("/users").get(getAllUsers);
router.route("/users/:id").delete(deleteUser);

export default router;
