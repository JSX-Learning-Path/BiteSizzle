import { Router } from "express";
import { pool } from "../config/db.js";

const router = Router();
router.get("/:id", async (req, res) => {
  try {
    const orderId = Number(req.params.id);
    console.log(orderId);
    if (Number.isNaN(orderId) || orderId <= 0) {
      return res.status(400).json({
        message: "Invalid ID",
      });
    }
    const result = await pool.query(
      `SELECT
      id,
      full_name AS "fullName",
      phone,
      email,
      city,
      address,
      instructions,
      subtotal,
      delivery_fee AS "deliveryFee",
      total,
      status,
      created_at AS "createdAt"
      FROM orders
      WHERE id =$1
      `,
      [orderId],
    );
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Order it's not found",
      });
    }
    const itemsResult = await pool.query(
      `SELECT 
      id,
      product_id AS "productID",
      product_name as "productName",
      image_url as "imageUrl",
      quantity,
      unit_price as "unitPrice",
      line_total as "lineTotal"
      FROM order_items
      WHERE order_id =$1
      `,
      [orderId],
    );
    const order = result.rows[0];

    return res.status(200).json({
      order: {
        ...order,
        subtotal: Number(order.subtotal),
        deliveryFee: Number(order.deliveryFee),
        total: Number(order.total),
      },
      items: itemsResult.rows.map((item) => ({
        id: item.id,
        productID: item.productID,
        productName: item.productName,
        imageUrl: item.imageUrl,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
        lineTotal: Number(item.lineTotal),
      })),
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  }
});

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
