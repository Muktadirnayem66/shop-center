import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import AllProducts from "@/app/components/AllProducts";
import ProductPage from "./products/page";

const Page = () => {
  return (
    <div>
      <Hero />
      <ProductPage/>
      <Footer />
    </div>
  );
};

export default Page;
