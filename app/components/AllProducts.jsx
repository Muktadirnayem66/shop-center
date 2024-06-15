
const AllProducts = ({ product }) => {
  return (
    <>
      <div className="relative delay-150 w-180px lg:w-[270px] h-[205px] lg:h-[310px] bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform" style={{backgroundImage: `url(${product.thumbnail})`}}></div>
      <h2 className="text-sm lg:text-base mt-2">
        <a className="text-base font-bold" href="./productPage.html">
          {product.title}
        </a>
        <span className="text-[#919090]">
          <a href="./category.html">({product.category})</a>
        </span>
      </h2>
      <p className="text-[#919090] text-sm ">{product.description}</p>

      <p className="text-rose-600 text-sm mt-4">
        <span className="text-[#919090] line-through">${product.discountPercentage}</span> ${product.price}
      </p>
    </>
  );
};

export default AllProducts;
