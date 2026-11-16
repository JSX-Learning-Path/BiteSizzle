import type { Product } from "../types/product";
import fetchApi from "./api.services";

const API_URL = "http://localhost:5001/api";

export const getProducts = async (): Promise<Product[]> => {
  const products = await fetchApi<Product[]>(`${API_URL}/products`);
  return products;
};


