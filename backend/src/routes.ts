import { Request, Response, Router } from "express";
import { CreateTodoController } from "./controllers/CreateTodoController";
import { GetTodosController } from "./controllers/GetTodosController";
import { UpdateTodoController } from "./controllers/UpdateTodoController";

export const router = Router();

router.get("/ping", (req: Request, res: Response) => {
  return res.json({ pong: true });
});

router.post("/todo", new CreateTodoController().handle);
router.get("/todos", new GetTodosController().handle);
router.put("/todo", new UpdateTodoController().handle);
