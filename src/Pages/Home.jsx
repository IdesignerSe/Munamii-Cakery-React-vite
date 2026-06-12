import HeroBanner from "../components/HeroBanner";
import HomeIntro from "../components/HomeIntro";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <HeroBanner />
      <HomeIntro />
      <ProductGrid />
      <Footer />
    </div>
  );
}
