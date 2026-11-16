import { Box, Typography, Button, Card, Divider } from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { OrderResponse } from "../types/order";
import { getOrderById } from "../services/orders.service";

function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (!id) return;
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(Number(id));
        setOrder(data);
      } catch (error) {
        setError("Failed to fetch order");
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);
  if (loading) {
    return <Typography sx={{ textAlign: "center" }}>Loading...</Typography>;
  }
  if (error || !order) {
    return (
      <Typography sx={{ textAlign: "center" }} color="error">
        {error || "Order not found"}
      </Typography>
    );
  }
  return (
    <Box
      component="main"
      sx={{
        maxWidth: "800px",
        mx: "auto",
        px: 3,
        py: 6,
      }}
    >
      <Typography
        variant="h3"
        color="success.main"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        Order Confirmed!
      </Typography>

      <Typography sx={{ textAlign: "center", mt: 2 }} color="text.secondary">
        Thank you for your order, {order.order.fullName}!
      </Typography>

      <Card sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Order #{order.order.id}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Delivery Information</Typography>

        <Typography>{order.order.fullName}</Typography>
        <Typography>{order.order.phone}</Typography>
        <Typography>{order.order.email}</Typography>
        <Typography>
          {order.order.address}, {order.order.city}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Ordered Products
        </Typography>

        {order.items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography>
              {item.productName} × {item.quantity}
            </Typography>

            <Typography>€{item.lineTotal.toFixed(2)}</Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          <Typography>€{order.order.subtotal.toFixed(2)}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography>Delivery Fee</Typography>
          <Typography>€{order.order.deliveryFee.toFixed(2)}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }} color="primary">
            €{order.order.total.toFixed(2)}
          </Typography>
        </Box>
      </Card>

      <Button
        component={RouterLink}
        to="/"
        variant="contained"
        fullWidth
        sx={{ mt: 3 }}
      >
        Back to Home
      </Button>
    </Box>
  );
}
export default OrderConfirmationPage;
