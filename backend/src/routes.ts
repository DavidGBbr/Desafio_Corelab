import { Request, Response, Router } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";

export const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  return res.json({ pong: true });
});

router.post("/todo", new CreateTodoController().handle);
