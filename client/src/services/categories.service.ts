import type { Category } from "../types/category";

const API_URL = "http://localhost:5001/api";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) {
    throw new Error(
      "Failed to fetch categories" +
        `: ${response.status} ${response.statusText}`,
    );
  }
  const categories: Category[] = await response.json();
  return categories;
};
