import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Divider from "@mui/material/Divider";
import { Link as RouterLink } from "react-router-dom";

function CartPage() {
  const { items, updateQuantity, removeFromCart } = useCart();
  const cartTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <Box
      component="main"
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        px: 3,
        py: 4,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Shopping Cart
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 1.6fr) minmax(280px, 0.8fr)",
          },
          gap: 3,
          mt: 3,
          alignItems: "start",
        }}
      >
        {/*Cart Items */}
        <Box sx={{ display: "grid", gap: 2 }}>
          {items.length === 0 ? (
            <>
              <Box sx={{ textAlign: "center" }}>Your cart is empty</Box>
              <Box sx={{ textAlign: "center" }}>
                Add some items to your cart
              </Box>
              <Button
                component={RouterLink}
                to="/"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Continue Shopping
              </Button>
            </>
          ) : (
            items.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  transition: "transform 0.5s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{
                    width: 120,
                    height: 130,
                    objectFit: "cover",
                    borderRadius: 2,
                    p: 2,
                  }}
                />

                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <AddIcon
                      onClick={() => updateQuantity(item.id, 1)}
                      sx={{ cursor: "pointer" }}
                    />

                    <RemoveIcon
                      onClick={() => updateQuantity(item.id, -1)}
                      sx={{ cursor: "pointer" }}
                    />

                    <DeleteOutlineOutlinedIcon
                      onClick={() => removeFromCart(item.id)}
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>

                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>

                <Box sx={{ ml: "auto", alignSelf: "end", p: 1 }}>
                  <Typography variant="h6" color="primary">
                    €{(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Card>
            ))
          )}
        </Box>

        {/* Order Summary */}
        <Card sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Order Summary
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography>Subtotal:</Typography>
            <Typography>€{cartTotal.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography>Delivery Fee:</Typography>
            <Typography>€{(cartTotal * 0.1).toFixed(2)}</Typography>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Total:
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              €{(cartTotal + cartTotal * 0.1).toFixed(2)}
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/checkout"
            variant="contained"
            fullWidth
            disabled={items.length === 0}
            sx={{ mt: 3 }}
          >
            Proceed to Checkout
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

export default CartPage;
