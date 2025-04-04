import { Request, Response } from "express";
import * as Weavy from "../services/weavyServices";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await Weavy.createUser(req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Create user failed", details: err });
  }
};