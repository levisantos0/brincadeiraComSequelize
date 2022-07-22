import { saveProduct, findAllProducts } from "../repository/produtos.js";

export const save = async (req, res) => {
  try {
    const { name, price } = req.body;
    const response = await saveProduct(name, price);

    return res.status(200).json(response);
  } catch (error) {
    console.log("erro:", error);
  }
};

export const findAll = async (req, res) => {
  try {
    const response = await findAllProducts();

    return res.status(200).json(response);
  } catch (error) {
    console.log("erro:", error);
  }
};
