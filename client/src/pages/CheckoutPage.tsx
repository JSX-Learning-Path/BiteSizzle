import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  Divider,
} from "@mui/material";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { items, clearCart } = useCart();

  const navigate = useNavigate();

  // Calculate order prices
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = subtotal * 0.1;
  const total = subtotal + deliveryFee;

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    instructions: "",
    email: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (items.length === 0) return;
    const order = {
      orderNumber: Date.now(),
      customer: formData,
      items: [...items],
      subtotal,
      deliveryFee,
      total,
    };
    navigate("/order-confirmation", {
      state: { order },
    });
    clearCart();
  };

  return (
    <Box
      component="main"
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        py: 4,
        px: 2,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Checkout
      </Typography>

      <Typography color="text.secondary">
        Please review your order and provide your delivery information.
      </Typography>

      {/* Main Grid Container */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.4fr 0.8fr",
          },
          gap: 3,
          mt: 3,
          alignItems: "start",
        }}
      >
        {/* LEFT COLUMN - Delivery Information */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Delivery Information
          </Typography>

          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Delivery Instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Place Order
          </Button>
        </Box>

        {/* RIGHT COLUMN - Order Summary */}
        <Card sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Order Summary
          </Typography>

          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 2,
                mt: 2,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: "medium" }}>
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Quantity: {item.quantity}
                </Typography>
              </Box>

              <Typography sx={{ fontWeight: "bold" }}>
                €{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>Subtotal</Typography>
            <Typography>€{subtotal.toFixed(2)}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography>Delivery Fee</Typography>
            <Typography>€{deliveryFee.toFixed(2)}</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold" }}
              color="primary"
            >
              €{total.toFixed(2)}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default CheckoutPage;
