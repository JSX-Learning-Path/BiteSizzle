import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories ORDER BY id ASC");

    const categories = result.rows.map((row) => ({
      id: String(row.id),
      name: row.name,
      slug: row.slug,
      image: row.image_url,
    }));

    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);

    res.status(500).json({
      message: "Failed to fetch categories",
    });
  }
});

export default router;
