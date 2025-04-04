import express from "express";
import * as controller from "../controllers/userController";

const router = express.Router();

router.post("/", controller.createUser);


export default router;
