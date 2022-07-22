import Express from "express";
import { router } from "./routes.js";
import cors from "cors";
import("./database/index.js");

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(router);

const PORT = 3333;

app.listen(3333, console.log(`Servidor rodando na porta ${PORT}`));
