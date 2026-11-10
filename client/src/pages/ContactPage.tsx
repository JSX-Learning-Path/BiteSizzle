import { Box, Card, Typography, CardContent } from "@mui/material";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { TextField, Button } from "@mui/material";
import { Alert } from "@mui/material";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    console.log(formData);
  };
  return (
    <Box
      component="main"
      sx={{
        maxWidth: "1250px",
        mx: "auto",
        px: 3,
        py: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontFamily: '"Fredoka Variable", sans-serif', fontWeight: 700 }}
      >
        Get in Touch
      </Typography>
      <Typography sx={{ color: "text.secondary", mt: 2 }}>
        Have a question for us ? We'd love to hear from you !
      </Typography>
      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
          mt: 5,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Phone:
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Your restaurant's phone number.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Email
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Your business email
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Address
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Your restaurant address
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box component="section" sx={{ mt: 6, maxWidth: "650px", mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: '"Fredoka Variable", "sans-serif"',
          }}
        >
          Open Hours:
        </Typography>
        <Card>
          <CardContent sx={{ p: 3 }}>
            {[
              { day: "Monday - Friday", hours: "10:00 AM - 10:00 PM" },
              { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
              { day: "Sunday", hours: "11:00 AM - 09:00 PM" },
            ].map((item) => (
              <Box
                key={item.day}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  py: 2,
                  borderBottom: "1px solid",
                  borderColor: "divider",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
                <Typography sx={{ fontWeight: "medium" }}>
                  {item.day}
                </Typography>
                <Typography color="text.secondary">{item.hours}</Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Box>
      <Box component="section" sx={{ mt: 6, maxWidth: "650px", mx: "auto" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontFamily: '"Fredoka Variable", "sans-serif"',
          }}
        >
          Send us a Message
        </Typography>
        <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
          Give us your feedback it's important to us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Full Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, width: "100%" }}
            onClick={() => setIsSubmitted(true)}
          >
            Send Message
          </Button>
        </Box>
        {isSubmitted && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Message sent successfully!
          </Alert>
        )}
      </Box>
    </Box>
  );
}

export default ContactPage;
