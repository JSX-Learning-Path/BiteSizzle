import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import heroImage from "../assets/hero-logo.png";

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
              fontSize: { xs: "1.5rem", md: "2rem", lg: "5rem" },
              color: "#ffffff",
            }}
          >
            Delicious meals delivered to your door
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
