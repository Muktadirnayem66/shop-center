import AllProducts from '@/app/components/AllProducts';
import products from '@/app/data/products';
import Link from 'next/link';
import React from 'react';

const CategoryName = ({params}) => {

    const categoryname = params
    const product = products.filter((item)=>item.category == categoryname)

    return (
        <main>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10">

                {
                    product.map((item)=>(
                        
                        <AllProducts product={item} key={item.id}/>
                       
                    ))
                }
                </div>
                </section>
        </main>
    );
};

export default CategoryName;