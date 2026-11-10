import Box from "@mui/material/Box";
import CategoriesSection from "../components/CategoriesSection";
import HomePageHero from "../components/HomePagehero";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularProducts from "../components/PopularProducts";
import { products } from "../data/products";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Box component="main" sx={{ bgcolor: "background.default" }}>
      <HomePageHero />
      <CategoriesSection />
      <WhyChooseUs />
      <PopularProducts products={products} />
      <FeedBack />
      <Footer />
    </Box>
  );
}

export default HomePage;
