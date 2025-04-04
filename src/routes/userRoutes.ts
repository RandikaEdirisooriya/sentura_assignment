import express from "express";
import * as controller from "../controllers/userController";

const router = express.Router();

router.post("/", controller.createUser);
router.get("/", controller.listUsers);
router.get("/:id", controller.getUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

export default router;
