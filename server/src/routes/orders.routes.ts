import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();

router.post("/", async (req, res) => {
  const { customer, items } = req.body;
  if (!customer || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      message: "Invalid order data",
    });
  }
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const productIds = items.map((item) => item.id);
    const productsResult = await client.query(
      `SELECT id, name, price, image_url
       FROM products
       WHERE id = ANY($1::int[])`,
      [productIds],
    );
    if (productsResult.rows.length !== new Set(productIds).size) {
      await client.query("ROLLBACK");
      return res.status(400).json({
        message: "One or more products do not exist",
      });
    }

    const products = productsResult.rows;
    const orderItems = items.map((item) => {
      const product = products.find(
        (product) => product.id === Number(item.id),
      );

      const quantity = Number(item.quantity);
      if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid product quantity");
      }
      return {
        productId: product.id,
        name: product.name,
        imageUrl: product.image_url,
        price: Number(product.price),
        quantity,
      };
    });
    const subtotal = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const deliveryFee = Number((subtotal * 0.1).toFixed(2));
    const total = Number((subtotal + deliveryFee).toFixed(2));

    const orderResult = await client.query(
      `INSERT INTO orders (
        full_name, phone, email, address, city,
        instructions, subtotal, delivery_fee, total
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING id, status, created_at, subtotal, delivery_fee, total`,
      [
        customer.fullName,
        customer.phone,
        customer.email,
        customer.address,
        customer.city,
        customer.instructions || "",
        subtotal,
        deliveryFee,
        total,
      ],
    );
    const order = orderResult.rows[0];
    for (const item of orderItems) {
      await client.query(
        `INSERT INTO order_items (
          order_id, product_id, product_name,
          image_url, quantity, unit_price
        )
        VALUES ($1, $2, $3, $4, $5, $6)`,
        [
          order.id,
          item.productId,
          item.name,
          item.imageUrl,
          item.quantity,
          item.price,
        ],
      );
    }
    await client.query("COMMIT");

    return res.status(201).json({
      message: "Order created successfully",
      order,
      items: orderItems,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Error creating order:", error);
    return res.status(500).json({
      message: "Failed to create order",
    });
  } finally {
    client.release();
  }
});

export default router;
