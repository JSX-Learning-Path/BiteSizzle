import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", sm: "6rem" },
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          404
        </Typography>
        <Typography sx={{}}>Oops! Page Not Found</Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 2, width: "fit-content" }}
        >
          Go to Home
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
