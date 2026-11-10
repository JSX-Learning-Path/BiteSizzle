import type { Feedback } from "../types/feedback";
import { feedback } from "../data/feedback";
import { Box, Typography, Card, Rating, CardContent } from "@mui/material";

function FeedBack() {
  return (
    <Box
      component="section"
      sx={{ maxWidth: "1250px", mx: "auto", px: 3, py: 8 }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: '"Fredoka Variable", sans-serif',
        }}
      >
        See what people think about BiteSizzle!
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0,1fr))",
            md: "repeat(3, minmax(0,1fr))",
          },
          gap: 3,
          mt: 3,
        }}
      >
        {feedback.map((item: Feedback) => (
          <Card key={item.id} sx={{ height: "100%", borderRadius: 2 }}>
            <CardContent sx={{ p: 2 }}>
              <Rating value={item.rating} readOnly />
              <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                <Typography sx={{ mr: 2 }}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                  />
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
              </Box>
              <Typography sx={{ mt: 2 }}>" {item.comment} "</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default FeedBack;
