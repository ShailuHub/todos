import { Router } from "express";
import { Todo } from "../models/todo";
import { text } from "body-parser";
const router = Router();

const todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).send({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  console.log(newTodo.id);
  res.status(200).send("Post recieved");
});

router.delete("/delete/:id", (req, res, next) => {
  const id = req.params.id;
  if (todos.length > 0) {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
      todos.splice(idx, 1);
      res.status(200).send("TODO item deleted");
    }
  } else {
    res.status(404).send("TODO item not found");
  }
});

router.patch("/edit/:id", (req, res, next) => {
  const id = req.params.id;
  const updatedText = req.body.text;

  if (todos.length > 0) {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
      todos[idx].text = updatedText;
      res.status(200).send("TDOD item updated");
    }
  } else {
    res.status(404).send("TODO item  not found");
  }
});

export default router;
