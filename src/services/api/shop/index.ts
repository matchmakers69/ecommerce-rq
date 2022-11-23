import jsonPlaceholderSpa from "config/axios/jsonPlaceholderShop";
import { Product } from "types/products";

export const getProducts = async (): Promise<Product[]> => {
  const res = await jsonPlaceholderSpa.get("/products");
  return res.data.products;
};

export const getShopCategories = async (): Promise<Array<string>> => {
  const res = await jsonPlaceholderSpa.get("/products/categories");
  return res.data;
};

export const getSearchProductsBySearchValue = async (
  searchValue: string
): Promise<Product[]> => {
  const res = await jsonPlaceholderSpa.get(`/products/search?q=${searchValue}`);
  return res.data.products;
};
