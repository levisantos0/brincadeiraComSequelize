import Sequelize from "sequelize";
import { Produto } from "../model/produto.js";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "prateste",
  username: "root",
  password: "",
});

Produto.init(connection);

export { connection };
