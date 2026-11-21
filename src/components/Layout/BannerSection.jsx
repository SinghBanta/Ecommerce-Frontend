
import React from "react";
import banner from "../../assets/banner.png";

const BannerSection = () => {
  return (
    <section className="font-dm w-full">

      {/* Banner */}
      <div
        className="flex flex-col justify-center items-center w-full h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col items-start w-full max-w-[1280px] px-8">

          <div className="max-w-[650px] w-full flex flex-col items-start gap-6">

            <p className="tracking-widest flex items-center text-[14px] font-semibold gap-2">
              <svg
                className="pulse rounded-full"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C2500A"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
              </svg>
              TRENDING NOW
            </p>

            <h1 className="font-semibold text-5xl md:text-7xl">
              Smarter Shopping.
            </h1>

            <h1 className="text-[#f56900] font-semibold text-5xl md:text-7xl">
              Better Living
            </h1>

            <p className="text-xl leading-9 text-[#3c3c3c]">
              Discover top quality products, unbeatable prices and a
              shopping experience like never before.
            </p>

            <a
              className="flex items-center gap-3 font-semibold bg-[#f56900] py-3 px-6 text-white rounded-full hover:bg-white border-2 border-[#f56900] hover:text-[#f56900] transition-colors duration-200"
              href="#products"
            >
              Shop Now

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Search Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 max-w-[800px] w-[90%] mx-auto p-[30px] rounded-xl shadow-md -mt-[40px] bg-white"
      >
        <div className="relative">

          <svg
            className="pointer-events-none absolute left-1 top-1/2 h-8 w-8 -translate-y-1/2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#F56900"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full h-[55px] pl-12 pr-36 border-0 rounded-lg outline-none transition-all font-semibold"
          />

          <button
            type="submit"
            className="absolute flex items-center gap-3 right-1.5 top-1/2 -translate-y-1/2 bg-[#f56900] hover:bg-[#C2500A] text-white px-7 py-4 rounded-lg font-medium transition-all cursor-pointer"
          >
            Search Products

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>

        </div>
      </form>

    </section>
  );
};

export default BannerSection;
