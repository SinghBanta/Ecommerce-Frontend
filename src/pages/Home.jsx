
import React from 'react';
import Navbar from '../components/Layout/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
       {/* Banner */}
            <div className="font-gamesans flex flex-col justify-center items-center w-full h-[650px] mt-0 bg-[url('/src/assets/banner.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col items-start w-full max-w-[1280px] px-8">
                  <div className='max-w-[650px] w-full flex flex-col items-start gap-6 mr-0 ml-0 '>
                    <p className="tracking-widest flex items-center text-[14px] font-semibold gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6900" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot preview-icon"><circle cx="12" cy="12" r="1"/></svg>TRENDING NOW</p>
                    <h1 className="font-[500] text-7xl">Smarter Shopping. <span className="text-[#FF6900]">Better Living</span></h1>
                    <p className="text-2xl text-[#3c3c3c]">Discover top quality products, unbeatable prices and a shopping experience like never before.</p>
                    <a className="flex gap-3 font-semibold bg-[#FF6900] py-3 px-6 text-white rounded-full " href="">Shop Now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right preview-icon"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></a>
                </div>
                </div>
            </div>
    </>
  );
};

export default Home;
