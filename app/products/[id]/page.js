import products from "@/app/data/products";
import Image from "next/image";


import StarImage from "@/public/assets/svg/star.svg";
import Link from "next/link";

const SingleProduct = ({ params }) => {
  const { id } = params;
  const product = products.find((item) => item.id == id);
  const { title, thumbnail, price, category, discountPercentage,images } = product;
  
  return (
    <>
      
      <main className="h-screen">
        <section className="bg-[#fafaf2] h-full py-20">
          <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
            <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
              <Image
                src={thumbnail}
                width={400}
                height={500}
                className="w-[400px] h-[500px] mx-auto object-cover"
                alt="product thumbnail"
              />

              <div className="flex gap-4 mt-4">
            {
              images.map((item, i)=>(
                <Image key={i} src={item} width={50} height={50} className="w-[80px] h-[80px] mx-auto border object-cover" alt="" />
              ))
            }
       
          </div>
          
            </div>
            <div className="w-full lg:w-5/12">
              <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
                {title}
              </h1>
              <Link href="/category"><span className="text-[#919090] my-3">{category}</span></Link>
              <div className="mt-3 flex items-center justify-start gap-1">
                <Image src={StarImage} width="20px" alt="star image" />
                <Image src={StarImage} width="20px" alt="star image" />
                <Image src={StarImage} width="20px" alt="star image" />
                <Image src={StarImage} width="20px" alt="star image" />
                <Image src={StarImage} width="20px" alt="star image" />
              </div>
              <hr className="my-5 bg-black" />

              <div>
                <p className="my-3">
                  <span className="text-rose-600 opacity-60 line-through">
                    ${discountPercentage}
                  </span>
                  <span className="font-bold text-2xl">
                    ${price}
                  </span>
                </p>
              </div>
              <div>
                <p className="leading-7">
                  Enhance your dining space with this sleek, contemporary dining
                  table, crafted from high-quality solid wood with a warm
                  finish. Its sturdy construction and minimalist design make it
                  a perfect addition for any home looking for a touch of
                  elegance. Accommodates up to six guests comfortably and
                  includes a striking fruit bowl centerpiece. The overhead
                  lighting is not included.
                </p>

                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                  Add To Cart - ${price}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SingleProduct;
