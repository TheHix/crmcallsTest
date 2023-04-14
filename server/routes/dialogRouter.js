import { Router } from "express";
import { dialogController } from "../controller/dialogController.js";

export const dialogRouter = new Router();
dialogRouter.post("/dialogues", dialogController.getAll);
