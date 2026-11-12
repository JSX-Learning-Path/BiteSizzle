import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");

    const products = result.rows.map((row) => ({
      id: String(row.id),
      name: row.name,
      description: row.description,
      price: Number(row.price),
      imageUrl: row.image_url,
      categoryId: String(row.category_id),
      ingredients: row.ingredients,
    }));

    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);

    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});

export default router;
