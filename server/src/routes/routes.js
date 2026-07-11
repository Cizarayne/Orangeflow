import { Router } from "express";
import { homePage } from "../controllers/homepage.js";
import { signup } from "../controllers/Auth/signup.Controller.js";
import { login } from "../controllers/Auth/login.Controller.js";
import { updatedUser } from "../controllers/Private/update.Controller.js";
import { deletedUser } from "../controllers/Private/delete.Controller.js";
import { protectMiddleware } from "../middlewares/authMiddleware.js";
import { changePassword } from "../controllers/Auth/changePass.Controller.js";
import { logout } from "../controllers/Auth/logout.Controller.js";
import { getUser } from "../controllers/Private/getuser.Controller.js";
import { profile } from "../controllers/Private/profile.Controller.js";
import { getLastLogin } from "../controllers/lastLogin.js";
import { getLoginHistory } from "../controllers/getLoginHistory.js";

const route = Router();

route
  .get("/", homePage)
  .post("/auth/signup", signup)
  .post("/auth/login", login)
  .put("/auth/update", protectMiddleware, updatedUser)
  .delete("/auth/delete", protectMiddleware, deletedUser)
  .put("/auth/change-password", protectMiddleware, changePassword)
  .post("/auth/logout", logout)
  .get("/auth/profile", protectMiddleware, profile)
  .get("/user/last-login", protectMiddleware, getLastLogin)
  .get("/user/login-history", protectMiddleware, getLoginHistory)
  .get("/user/:id", getUser);

export default route;
