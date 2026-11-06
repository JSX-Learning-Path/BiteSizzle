import Box from "@mui/material/Box";
import CategoriesSection from "../components/CategoriesSection";
import HomePageHero from "../components/HomePagehero";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularProducts from "../components/PopularProducts";
import { products } from "../data/products";

function HomePage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <HomePageHero />
      <CategoriesSection />
      <WhyChooseUs />
      <PopularProducts products={products} />
    </Box>
  );
}

export default HomePage;
