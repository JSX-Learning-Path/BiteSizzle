import Box from "@mui/material/Box";
import CategoriesSection from "../components/CategoriesSection";
import HomePageHero from "../components/HomePagehero";
import WhyChooseUs from "../components/WhyChooseUs";

function HomePage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <HomePageHero />
      <CategoriesSection />
      <WhyChooseUs />
    </Box>
  );
}

export default HomePage;
