import Express from "express";
import { save, findAll } from "./controllers/produto.js";
const router = Express.Router();

router.post("/", save);
router.get("/", findAll);

export { router };
