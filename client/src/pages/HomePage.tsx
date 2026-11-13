import Box from "@mui/material/Box";
import CategoriesSection from "../components/CategoriesSection";
import HomePageHero from "../components/HomePageHero";
import WhyChooseUs from "../components/WhyChooseUs";
import PopularProducts from "../components/PopularProducts";
import { useProducts } from "../context/ProductContext";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";

function HomePage() {
  const { products } = useProducts();

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
