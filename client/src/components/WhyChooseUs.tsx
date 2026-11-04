import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import whyUsImg from "../assets/whyChooseUs/whyUs.png";
import { ingredients } from "../data/ingredients";

function WhyChooseUs() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, lg: 4 },

        background: `
          radial-gradient(
            circle at 10% 20%,
            rgba(242, 106, 33, 0.10),
            transparent 35%
          ),
          radial-gradient(
            circle at 90% 80%,
            rgba(242, 106, 33, 0.06),
            transparent 35%
          ),
          linear-gradient(
            135deg,
            #171717 0%,
            #242424 55%,
            #191919 100%
          )
        `,
      }}
    >
      {/* Main Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",

          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
          },

          alignItems: "center",
          gap: { xs: 4, md: 7 },
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={whyUsImg}
          alt="Fresh food preparation"
          loading="lazy"
          decoding="async"
          sx={{
            display: "block",
            width: "100%",
            maxWidth: { xs: "520px", md: "100%" },
            height: "auto",
            objectFit: "contain",
            borderRadius: "15px",
            mx: "auto",
          }}
        />

        {/* Content */}
        <Box
          sx={{
            width: "100%",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              md: "flex-start",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          {/* Section Label */}
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            About our Food
          </Typography>

          {/* Heading */}
          <Typography
            component="h2"
            sx={{
              color: "#FFFFFF",
              fontFamily: "var(--font-brand)",
              fontWeight: 700,
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.4rem",
                lg: "2.8rem",
              },
              lineHeight: 1.2,
              maxWidth: "550px",
            }}
          >
            We Deliver the best food experience to your doorstep.
          </Typography>

          {/* Ingredients / Features */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              mt: 4,
            }}
          >
            {ingredients.map((item) => {
              const IngredientIcon = item.icon;

              return (
                <Box
                  component="article"
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: { xs: 1.5, sm: 2 },
                    p: { xs: 1.5, sm: 2 },
                    width: "100%",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: 3,
                    backgroundColor: "rgba(255,255,255,0.04)",

                    transition:
                      "transform 250ms ease, border-color 250ms ease, background-color 250ms ease",

                    "&:hover": {
                      borderColor: "rgba(242,106,33,0.5)",
                      backgroundColor: "rgba(255,255,255,0.07)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {/* Icon */}
                  <Box
                    sx={{
                      width: { xs: 44, sm: 52 },
                      height: { xs: 44, sm: 52 },
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      backgroundColor: "rgba(242,106,33,0.13)",
                    }}
                  >
                    <IngredientIcon size={26} color="#F26A21" />
                  </Box>

                  {/* Feature Content */}
                  <Box
                    sx={{
                      minWidth: 0,
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      component="h3"
                      sx={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.95rem",
                        },
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      component="p"
                      sx={{
                        color: "#BDBDBD",
                        fontSize: {
                          xs: "0.8rem",
                          sm: "0.9rem",
                        },
                        lineHeight: 1.5,
                        mt: 0.5,
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
