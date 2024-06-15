
import AllProducts from "@/app/components/AllProducts";
import products from "@/app/data/products";
import Link from "next/link";

const ProductPage = () => {
  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">
            {
                products.map((product)=>(
                    <Link href={`/products/${product.id}`} key={product.id}>
                    <AllProducts product={product} />
                    </Link>
                ))
            }
          
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
