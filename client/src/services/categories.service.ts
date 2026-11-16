import type { Category } from "../types/category";
import fetchApi from "./api.services";

const API_URL = "http://localhost:5001/api";

export const getCategories = async (): Promise<Category[]> => {
  const categories = await fetchApi<Category[]>(`${API_URL}/categories`);
  return categories;
};
