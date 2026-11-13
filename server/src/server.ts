import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import ordersRoutes from "./routes/orders.routes.js";

const app = express();
const PORT = Number(process.env.PORT) || 5001;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/orders", ordersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "BiteSizzle it's okay" });
});

app.listen(PORT, () => {
  console.log("Server is Running on Port " + PORT);
});
