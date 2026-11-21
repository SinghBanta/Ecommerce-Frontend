
import React from 'react'
import mobile from "/src/assets/product-cat-2.webp";
import headphones from "/src/assets/product-cat-1.webp";
import smartwatch from "/src/assets/product-cat-4.webp";
import earbuds from "/src/assets/product-cat-5.webp";
import speakers from "/src/assets/banner-speaker.png";

const CategorySection = () => {

    const categories = [
        {
            id: 1,
            name: "Mobile Tablets",
            image: "mobile tablets"
        },
        {
            id: 2,
            name: "Headphones",
            image: "headphones"
        },
        {
            id: 3,
            name: "Smart Watches",
            image: "src/assets/product-cat-4.webp"
        },
        {
            id: 4,
            name: "Earbuds",
            image: "src/assets/product-cat-5.webp"
        },
        {
            id: 5,
            name: "Speakers",
            image: "src/assets/banner-speaker.png"
        }
    ];

    return (
        <section className='font-dm w-full py-20'>
            <div className='max-w-7xl w-full mx-auto px-8'>

                {/* Category Grid */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-10'>

                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="w-full flex flex-col items-center justify-center gap-6"
                        >

                            {/* Circular Background */}
                            <div className="image-product w-40 h-40 md:w-48 md:h-48 lg:w-50 lg:h-50 rounded-full bg-[#f569001a] flex items-center justify-center overflow-hidden">

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-2/4 h-2/4 object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-semibold text-center text-[#3C3C3C]">
                                {category.name}
                            </h3>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default CategorySection;
