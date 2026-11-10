import { Box, Typography, Card, CardContent } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function AboutPage() {
  return (
    <Box component="main" sx={{ maxWidth: "1250px", mx: "auto", px: 2, py: 3 }}>
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 4,
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: '"Fredoka Variable", sans-serif',
              fontWeight: 700,
              mb: 2,
            }}
          >
            Our Story
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            BiteSizzle was created for people who love great food, bold flavors
            and unforgettable moments.
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            Our goal is simple: bring delicious food, convenience and happiness
            together in every order.
          </Typography>
        </Box>

        <Box
          sx={{
            minHeight: 300,
            bgcolor: "primary.light",
            borderRadius: 4,
          }}
        />
      </Box>
      <Box
        component="section"
        sx={{
          mt: 8,
          py: 6,
          px: { xs: 3, md: 6 },
          bgcolor: "primary.light",
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Fredoka Variable", sans-serif',
            fontWeight: 700,
            mb: 2,
          }}
        >
          Our Mission
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          Our mission is to make every meal special by serving delicious food
          made with quality ingredients, bringing people together and delivering
          happiness with every bite.
        </Typography>
      </Box>
      <Box component="section" sx={{ mt: 8, mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Fredoka Variable", sans-serif',
            fontWeight: 700,
            mb: 4,
          }}
        >
          Our Values
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: 3,
          }}
        >
          <Card>
            <CardContent sx={{ p: 3 }}>
              <WorkspacePremiumIcon color="primary" sx={{ fontSize: 30 }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                color="primary"
              >
                Quality
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                We believe great food starts with high-quality ingredients.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <FavoriteBorderIcon color="primary" sx={{ fontSize: 30 }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                color="primary"
              >
                Freshness
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Fresh ingredients and carefully prepared meals make every bite
                special.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ p: 3 }}>
              <SpaIcon color="primary" sx={{ fontSize: 30 }} />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold" }}
                color="primary"
              >
                Passion
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                We put passion and care into everything we prepare.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutPage;
