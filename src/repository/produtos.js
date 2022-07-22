import { Produto } from "../model/produto.js";

export const saveProduct = async (name, price) => {
  try {
    const response = await Produto.create({ name, price });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const findAllProducts = async () => {
  try {
    const response = await Produto.findAll();
    return response;
  } catch (error) {
    console.log(error);
  }
};
