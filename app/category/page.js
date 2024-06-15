import Link from "next/link";
import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import ProductPage from "../products/page";
import CategoryName from "./[categoryname]/page";
import products from "../data/products";

const CateGoryPage = () => {

  const uniqueCategoryName = Array.from(new Set(products.map((product)=>product.category)))
  const capitalizeCategoryName = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
   
  return (
    <>
      <header className="h-[500px] bg-center flex flex-col-reverse bg-cover w-full bg-[url('/assets/header.webp')]"></header>

      <main>
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">

            <button className="hover:border-b border-black block h-6 box-border mt-4">
              All
            </button>

            {
              uniqueCategoryName.map((product, i)=>(
                
                <Link href={`/category/${product}`} key={i}>
                  
                <button className="hover:border-b border-black block h-6 box-border mt-5">
              {capitalizeCategoryName(product)}
            </button>
                </Link>
              ))
            }            
            
          </div>

          <ProductPage />
        </section>

        <FormSection />
      </main>

      <Footer />
    </>
  );
};

export default CateGoryPage;
