import express from "express";
import todosRouter from "./todos/todos.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(todosRouter);
app.listen(3000, () => {
  console.log("Server is working on the port 3000");
});
