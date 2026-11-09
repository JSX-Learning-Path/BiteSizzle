import { Box, Typography, Button, Card, Divider } from "@mui/material";
import { Navigate, Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import type { CartItem } from "../types/cart";

interface Order {
  orderNumber: number;
  customer: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    instructions: string;
    email: string;
  };
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

function OrderConfirmationPage() {
  const location = useLocation();
  const order = (location.state as { order?: Order } | null)?.order;
  if (!order) {
    return <Navigate to="/" />;
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
        Thank you for your order, {order.customer.fullName}!
      </Typography>

      <Card sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Order #{order.orderNumber}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6">Delivery Information</Typography>

        <Typography>{order.customer.fullName}</Typography>
        <Typography>{order.customer.phone}</Typography>
        <Typography>{order.customer.email}</Typography>
        <Typography>
          {order.customer.address}, {order.customer.city}
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
              {item.name} × {item.quantity}
            </Typography>

            <Typography>€{(item.price * item.quantity).toFixed(2)}</Typography>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Subtotal</Typography>
          <Typography>€{order.subtotal.toFixed(2)}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography>Delivery Fee</Typography>
          <Typography>€{order.deliveryFee.toFixed(2)}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: "bold" }} color="primary">
            €{order.total.toFixed(2)}
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
