const Navbar = () => {

    return (
      
            <header class="w-full bg-white">
                <div class="hidden items-center justify-center bg-stone-900 py-3 sm:flex">
                    <p class="text-xs font-medium flex items-center gap-2 tracking-[0.2em] text-stone-300 font-gamesans flex"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-check preview-icon"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9 10 2 2 4-4"/></svg>COMPLIMENTARY SHIPPING ON ORDERS OVER<span className="text-[#C2500A]">$200</span></p>
                </div>
                <nav class="border-b border-stone-200" aria-label="Main navigation">
                    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div class="flex items-center gap-8 lg:w-1/3">
                            <input type="checkbox" id="lux-nav-toggle" class="peer hidden" />
                            <label for="lux-nav-toggle" class="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus-within:ring-2 focus-within:ring-stone-900 lg:hidden" aria-label="Toggle menu">
                                <svg class="h-5 w-5 peer-checked:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                                </svg>
                            </label>
                            <ul class="hidden items-center gap-7 lg:flex">
                                <li class="group relative">
                                    <a href="#" aria-current="page" class="border-b border-stone-900 flex items-center gap-1 pb-1 text-[13px] font-medium uppercase tracking-[0.12em] text-stone-600 transition-colors duration-200 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900">
                                        New In
                                    </a>
                                </li>
                                <li class="group relative">
                                    <button type="button" class="flex items-center gap-1 pb-1 text-[13px] font-medium uppercase tracking-[0.12em] text-stone-600 transition-colors duration-200 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900">
                                        Women
                                    </button>
                                    <div class="invisible fixed inset-x-0 top-[7.5rem] z-20 border-y border-stone-200 bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                                        <div class="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-8 py-10">
                                            <div>
                                                <p class="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-gamesans">Clothing</p>
                                                <ul class="space-y-3">
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Dresses</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Outerwear</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Knitwear</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p class="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-gamesans">Accessories</p>
                                                <ul class="space-y-3">
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Handbags</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Jewelry</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Scarves</a></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p class="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-stone-400 font-gamesans">Footwear</p>
                                                <ul class="space-y-3">
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Heels</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Flats</a></li>
                                                    <li><a href="#" class="text-sm text-stone-700 transition-colors duration-150 hover:text-stone-900">Boots</a></li>
                                                </ul>
                                            </div>
                                            <a href="#" class="group/card relative block overflow-hidden rounded-lg">
                                                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" alt="Featured collection" class="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105" />
                                                <span class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></span>
                                                <span class="absolute bottom-4 left-4 text-sm font-medium uppercase tracking-[0.1em] text-white">Autumn Edit</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" class="block pb-1 text-[13px] font-medium uppercase tracking-[0.12em] text-stone-600 transition-colors duration-200 hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900">
                                        Men
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a href="#" class=" lg:text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-md">
                            < img src="src/assets/logo-original-Photoroom.png" className="h-20" />
                        </a>

                        <div class="flex items-center justify-end gap-1 lg:w-1/3">
                            {/* <div class="hidden items-center md:flex">
                                <div class="group relative flex items-center">
                                    <svg class="pointer-events-none absolute left-3 h-4 w-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                                    </svg>
                                    <input type="search" placeholder="Search" className="w-0 rounded-full border border-transparent bg-stone-100 py-2 pl-9 pr-3 text-sm text-stone-700 placeholder:text-stone-400 transition-all duration-300 ease-out focus:w-52 focus:border-[#202936] focus:bg-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#202936] group-hover:w-52" />
                                </div>
                            </div> */}

                            <button type="button" class="rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900" aria-label="Wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart preview-icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
                            </button>

                            <button type="button" class="rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900" aria-label="Account">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round preview-icon"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                            </button>

                            <button type="button" class="relative rounded-md p-2.5 text-stone-700 transition-colors duration-200 hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900" aria-label="Cart, 2 items">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart preview-icon"><path d="m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18" /><path d="M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25" /><circle cx="18" cy="20" r="2" /><circle cx="8" cy="20" r="2" /></svg>
                                <span class="absolute right-1 top-1 flex h-4 w-4 items-center bg-[#C2500A] justify-center rounded-full text-[10px] font-medium text-white">2</span>
                            </button>
                        </div>
                    </div>

                    <label for="lux-nav-toggle" class="fixed inset-0 z-30 hidden bg-stone-900/40 backdrop-blur-sm peer-checked:block lg:hidden"></label>

                    <div class="pointer-events-none fixed inset-y-0 left-0 z-40 w-full max-w-xs -translate-x-full transform bg-white shadow-2xl transition-transform duration-300 ease-out peer-checked:pointer-events-auto peer-checked:translate-x-0 lg:hidden">
                        <div class="flex h-20 items-center justify-between border-b border-stone-200 px-5">
                            <span class="font-serif text-lg font-medium tracking-[0.08em] text-stone-900">Tailwind Flex</span>
                            <label for="lux-nav-toggle" class="cursor-pointer rounded-md p-2 text-stone-600 transition-colors duration-200 hover:bg-stone-100" aria-label="Close menu">
                                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </label>
                        </div>
                        <div class="border-b border-stone-200 p-4">
                            <div class="relative">
                                <svg class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                                </svg>
                                <input type="search" placeholder="Search" class="w-full rounded-full border border-stone-200 bg-stone-100 py-2.5 pl-9 pr-3 text-sm text-stone-700 placeholder:text-stone-400 focus:border-stone-400 focus:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900" />
                            </div>
                        </div>
                        <nav class="flex flex-col p-4" aria-label="Mobile navigation">
                            <a href="#" aria-current="page" class="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-900">New In</a>
                            <a href="#" class="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900">Women</a>
                            <a href="#" class="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900">Men</a>
                            <a href="#" class="border-b border-stone-100 py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900">Jewelry</a>
                            <a href="#" class="py-4 text-sm font-medium uppercase tracking-[0.1em] text-stone-600 transition-colors duration-200 hover:text-stone-900">Sale</a>
                        </nav>
                        <div class="mt-auto flex items-center justify-around border-t border-stone-200 p-4">
                            <button type="button" class="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900" aria-label="Wishlist">
                                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span class="text-xs">Wishlist</span>
                            </button>
                            <button type="button" class="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900" aria-label="Account">
                                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <span class="text-xs">Account</span>
                            </button>
                            <button type="button" class="flex flex-col items-center gap-1 rounded-md p-2 text-stone-600 transition-colors duration-200 hover:text-stone-900" aria-label="Cart">
                                <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.99-4.706 2.57-7.234.108-.471-.272-.916-.755-.916H5.106M7.5 14.25L5.106 5.084M9.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm9 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <span class="text-xs">Cart</span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>


           
        
    );
}
export default Navbar;