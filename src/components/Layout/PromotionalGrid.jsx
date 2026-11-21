
import React from "react";

const categories = [
  {
    name: "Smartphones",
    image: "src/assets/mobile.png",
    span: "lg:col-span-4",
  },
  {
    name: "Headphones",
    image: "src/assets/headphoneset.png",
    span: "lg:col-span-3",
  },
  {
    name: "Smart Watches",   
    image: "src/assets/smartwatch.png",
    span: "lg:col-span-5",
  },
  
  {
    name: "Wireless Earbuds",   
    image: "src/assets/earbuds.png",
    span: "lg:col-span-3",
  },
  
  {
    name: "Gaming Accessories",  
    image: "src/assets/gaminheadset.png",
    span: "lg:col-span-5",
  },
  {
    name: "Laptops", 
    image: "src/assets/laptop.png",
    span: "lg:col-span-4",
  },
  
];

const PromotionalGrid = () => {
  return (
    <section className="w-full py-16 px-5 font-dm">
      <div className="max-w-[1280px] mx-auto">

        {/* Heading */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4">
          <p className="text-[#F56900] text-sm font-bold tracking-widest uppercase mb-2">
            Explore Categories
          </p>

          <h2 className="text-xl md:text-5xl font-bold text-[#171717]">
            Shop By <span className="text-[#F56900]">Categories</span>
          </h2>

        
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">

          {categories.map((category) => (
            <div
              key={category.name}
              className={`
                ${category.span}
                relative
                h-[230px] lg:h-[300px]
                overflow-hidden
                rounded-2xl
                group
                cursor-pointer
                bg-[#F5F5F5]
              `}
            >

              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 p-6 z-10">

                <h3 className="text-white text-xl lg:text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="text-white/90 text-sm font-medium">
                  {category.count}
                </p>

                <span className="inline-block text-[#F56900] text-sm font-semibold mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore Now →
                </span>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PromotionalGrid;
