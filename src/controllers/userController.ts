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

export const listUsers = async (_: Request, res: Response) => {
  try {
    const users = await Weavy.listUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "List users failed" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await Weavy.getUser(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Get user failed" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await Weavy.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const response = await Weavy.deleteUser(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
