import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import heroImage from "../assets/hero-logo.png";
import CategoriesSection from "./CategoriesSection";

import { Link as RouterLink } from "react-router-dom";
function HomePage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <Box
        component="section"
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          minHeight: {
            xs: "420px",
            sm: "520px",
            md: "calc(100svh - 64px)",
          },
          overflow: "hidden",
          px: 2,
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={heroImage}
          alt="Fresh and delicious food"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 100%)",
            zIndex: 1,
          }}
        />
        {/* Hero Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              color: "primary.light",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Fresh food , fresh mood
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-brand)",
              fontWeight: 700,
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem", lg: "5rem" },
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Delicious meals delivered to your door
          </Typography>
          {/*CTA */}
          <Typography
            sx={{
              color: "primary.dark",
              fontWeight: 700,
              marginTop: 2,
              maxWidth: "600px",
              fontSize: {
                xs: "0.9rem",
                sm: "1.2rem",
                md: "1.5rem",
                lg: "2rem",
              },
              lineHeight: 1.5,
            }}
          >
            Discover delicious meals made fresh every day and delivered straight
            to your door. Your next favorite bite is waiting!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              mt: 2,
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <Button
              component={RouterLink}
              to="/menu"
              variant="contained"
              color="primary"
              sx={{ flexGrow: 1, mr: { md: 2 } }}
            >
              Order Now
            </Button>
            <Button variant="outlined" color="primary" sx={{ flexGrow: 1 }}>
              See Offers
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
