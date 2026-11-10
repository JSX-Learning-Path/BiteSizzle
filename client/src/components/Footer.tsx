import { Box, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import logoSizzzle from "../assets/logo-sizzle.png";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#202020", color: "#FFFFFF", py: 4 }}
    >
      <Box
        sx={{
          maxWidth: "1250px",
          mx: "auto",
          px: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2 , 1fr)",
            md: "1.5fr repeat(3, 1fr)",
          },
          placeItems:{xs:"center",},
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logoSizzzle}
            alt="BiteSizzle Logo"
            sx={{ width: 60 }}
          ></Box>
          <Typography
            variant="body2"
            sx={{
              mt: 1,
              ml: 1,
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "24px", md: "50px" },
              fontFamily: '"Fredoka One", cursive',
            }}
          >
            {" "}
            BiteSizzle
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </Box>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Opening Hours
          </Typography>

          <Typography sx={{ color: "#D1D5DB", mb: 1 }}>
            Monday - Friday
          </Typography>
          <Typography sx={{ color: "#D1D5DB", mb: 1 }}>
            10:00 AM - 10:00 PM
          </Typography>
          <Typography sx={{ color: "#D1D5DB" }}>Saturday - Sunday</Typography>
        </Box>
      </Box>
      <Divider sx={{ mt: 5, mb: 3, borderColor: "#444444" }} />
      <Box
        sx={{
          maxWidth: "1250px",
          mx: "auto",
          textAlign: "center",
          flexDirection: { xs: "column", md: "row" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ color: "#D1D5DB" }}>
          &copy; {new Date().getFullYear()} BiteSizzle. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
export default Footer;
