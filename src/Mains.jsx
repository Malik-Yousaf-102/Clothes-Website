import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Mains() {
    return (
        <>
            <div>
                {/* NAVBAR */}
                <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-6 md:gap-20 lg:gap-100 bg-white py-5 px-4 md:px-0">
                    <div>
                        <h2 className="text-2xl hover:cursor-pointer text-[#0d1885]">BASICALLY</h2>
                    </div>

                    <nav className="space-x-4 md:space-x-10 flex flex-wrap justify-center text-center">
                        <a href="" className="text-[#0d1885] hover:text-[#de8f78] transition duration-450 ease-in-out">Shop All</a>
                        
                        <a href="" className="text-[#0d1885] hover:text-[#de8f78] transition duration-450 ease-in-out">Size Guide</a>
                        <a href="" className="text-[#0d1885] hover:text-[#de8f78] transition duration-450 ease-in-out">Our Brand</a>
                        <a href="" className="text-[#0d1885] hover:text-[#de8f78] transition duration-450 ease-in-out">Contact</a>
                    </nav>

                    <div className="flex items-center gap-4 mt-3 md:mt-0">
                        <p className="text-[#0d1885] hover:text-[#de8f78] transition duration-450 ease-in-out cursor-pointer">Login</p>
                        <p><i className="fa-solid fa-heart text-2xl hover:cursor-pointer text-[#0d1885]"></i></p>
                        <p><i className="fa-solid fa-bag-shopping text-2xl hover:cursor-pointer text-[#0d1885]"></i></p>
                    </div>
                </div>

                {/* HERO SECTION */}
                <div className="flex flex-col md:flex-row mt-[10px]">
                    <div className="bg-[url(src/assets/84770f_c36da6c4aa1d42bf95ccab176382e59c~mv2.jpg)] bg-center bg-cover bg-no-repeat h-60 md:h-174 w-full md:w-120"></div>

                    <div className="bg-[url(src/assets/84770f_158abf26f09f49ca98ac6a13a900bd6e~mv2.jpg)] bg-center bg-cover bg-no-repeat h-60 md:h-174 w-full md:w-200 flex flex-col justify-center">
                        <div className="mt-10 md:mt-55">
                            <h1 className="flex items-center justify-center text-white text-4xl md:text-8xl font-semibold pt-5 [word-spacing:0.3rem]">THE DENIM</h1>
                            <h1 className="flex items-center justify-center text-white text-4xl md:text-8xl font-semibold py-1">COLLECTION</h1>
                            <p className="text-xl md:text-3xl text-white flex items-center justify-center">Now In Stores</p>
                            <div className="flex items-center justify-center pt-8 md:pt-10">
                                <button className="bg-white text-[#0d1885] hover:bg-[#f9e8e3] px-5 py-2 transition duration-450 ease-in-out cursor-pointer">Shop Collection</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[url(src/assets/11062b_b33c00e4f794488f83dc9ad76489447a~mv2.jpg)] bg-center bg-cover bg-no-repeat h-60 md:h-174 w-full md:w-100"></div>
                </div>

                {/* TEXT SECTION */}
                <div className="py-10 px-4">
                    <h1 className="text-center text-3xl md:text-6xl font-sans text-[#0d1885] py-4">GET THE BASICS</h1>
                    <p className="text-center text-[#0d1885]">I'm a paragraph. Click here to add your own text and edit me. I’m a great</p>
                    <p className="text-center text-[#0d1885]">place for you to tell a story and let your users know a little more about you.</p>
                </div>

                {/* PRODUCT GRID */}
                <div className="flex flex-wrap justify-center gap-8 py-10 px-4">
                    {/* PRODUCT 1 */}
                    <div className="w-[90%] sm:w-[45%] md:w-auto">
                        <div className="bg-[url(src/assets/84770f_ef518c911ea84d6597a639a80bf95592~mv2.jpeg)] hover:bg-[url(src/assets/84770f_32c044c8c43340fcb9d4d68ee2120441~mv2.jpg)] h-80 md:h-90 w-full md:w-85 bg-no-repeat bg-center bg-cover transition duration-450 ease-in-out">
                            <div className="p-5"><button className="bg-[#0d1885] text-white px-3">Sale</button></div>
                        </div>
                        <div className="py-2">
                            <p className="text-[#0d1885] cursor-pointer">I'm a product</p>
                            <p className="text-[#de8f78] cursor-pointer">$55.00 $30.00</p>
                        </div>
                    </div>

                    {/* PRODUCT 2 */}
                    <div className="w-[90%] sm:w-[45%] md:w-auto">
                        <div className="bg-[url(src/assets/e4f166_01637a7d2eb44da89d649e99e4f69580~mv2.jpg)] hover:bg-[url(src/assets/e4f166_4262d960e60348c8ab544141691183dc~mv2.jpg)] h-80 md:h-90 w-full md:w-85 bg-no-repeat bg-center bg-cover transition duration-450 ease-in-out"></div>
                        <div className="py-2">
                            <p className="text-[#0d1885] cursor-pointer">I'm a product</p>
                            <p className="text-[#de8f78] cursor-pointer">$55.00</p>
                        </div>
                    </div>

                    {/* PRODUCT 3 */}
                    <div className="w-[90%] sm:w-[45%] md:w-auto">
                        <div className="bg-[url(src/assets/11062b_b33c00e4f794488f83dc9ad76489447a~mv2.jpg)] hover:bg-[url(src/assets/84770f_158abf26f09f49ca98ac6a13a900bd6e~mv2.jpg)] h-80 md:h-90 w-full md:w-85 bg-no-repeat bg-center bg-cover transition duration-450 ease-in-out">
                            <div className="p-5"><button className="bg-[#0d1885] text-white px-3">Sale</button></div>
                        </div>
                        <div className="py-2">
                            <p className="text-[#0d1885] cursor-pointer">I'm a product</p>
                            <p className="text-[#de8f78] cursor-pointer">$35.00 $15.00</p>
                        </div>
                    </div>

                    {/* PRODUCT 4 */}
                    <div className="w-[90%] sm:w-[45%] md:w-auto">
                        <div className="bg-[url(src/assets/84770f_8acb9ec52c1e4ad196a3f0c66497e01b~mv2.jpg)] hover:bg-[url(src/assets/e4f166_de839c88a2c44e55adc9dc969bc4bc4c~mv2.jpg)] h-80 md:h-90 w-full md:w-85 bg-no-repeat bg-center bg-cover transition duration-450 ease-in-out"></div>
                        <div className="py-2">
                            <p className="text-[#0d1885] cursor-pointer">I'm a product</p>
                            <p className="text-[#de8f78] cursor-pointer">$55.00</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-[#0d1885] text-white px-10 md:px-14 py-1 hover:bg-[#de8f78] transition duration-450 ease-in-out cursor-pointer">Shop All</button>
                </div>

                {/* LARGE IMAGE SECTION */}
                <div className="mt-15">
                    <div className="py-10">
                        <div className="bg-[url(src/assets/84770f_105acb0084ca42c5a6ba777d5f1be571~mv2.jpg)] bg-center bg-cover bg-no-repeat h-96 md:h-160">
                            <div className="pl-5 md:pl-35 py-10 md:py-16">
                                <div className="py-5">
                                    <p className="text-3xl md:text-6xl text-[#0d1885] pt-2">SIMPLICITY</p>
                                    <p className="text-3xl md:text-6xl text-[#0d1885] pt-2">IS THE ULTIMATE</p>
                                    <p className="text-3xl md:text-6xl text-[#0d1885] pt-2">SOPHISTICATION</p>
                                </div>
                                <p className="w-full md:w-[450px] text-[#0d1885] py-6 md:py-8 text-sm md:text-base">
                                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                                </p>
                                <button className="text-white bg-[#050f72] px-3 py-2 hover:bg-[#f3e7e5] hover:text-[#0d1885] transition duration-450 ease-in-out cursor-pointer">Discover Our Brand</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GALLERY */}
                <div className="py-10">
                    <h1 className="text-4xl md:text-6xl text-[#0d1885] text-center py-4">GET INSPIRED</h1>
                    <p className="text-[#0d1885] text-center py-3">#basically</p>
                </div>

                <div className="flex flex-wrap md:flex-nowrap py-10">
                    {[
                        "src/assets/01.jpg",
                        "src/assets/02.jpg",
                        "src/assets/03.jpg",
                        "src/assets/04.jpg",
                    ].map((img, i) => (
                        <div key={i} className="relative w-full sm:w-1/2 md:w-1/4 h-[40vh] md:h-[50vh] group overflow-hidden">
                            <div
                                className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110`}
                                style={{ backgroundImage: `url(${img})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-white text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-4">
                                #wix, #website, #freewebsite, #websitetemplate, #wix.com
                            </div>
                        </div>
                    ))}
                </div>

                {/* FOOTER */}
                <footer className="bg-[#0d1885] w-full py-10 px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
                        <div className="px-4 md:px-40 text-center md:text-left">
                            <h1 className="text-white text-3xl py-8 md:py-16">BASICALLY</h1>
                            <h1 className="text-3xl md:text-5xl text-white md:w-[65%] pt-6 md:pt-14">
                                JOIN THE LIST AND GET 10% OFF YOUR FIRST ORDER
                            </h1>
                            <p className="text-white py-5 md:py-9">
                                Be the first to know about new arrivals, special events, and more.
                            </p>

                            {/* INPUTS */}
                            <div className="py-5">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-34">
                                    <p className="text-white">First Name</p>
                                    <p className="text-white">Last Name</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                                    <input className="outline-0 border-b text-white bg-transparent" type="text" />
                                    <input className="outline-0 border-b text-white bg-transparent" type="text" />
                                </div>
                            </div>

                            <div className="py-7">
                                <h3 className="text-white">Email</h3>
                                <input className="outline-0 border-b text-white bg-transparent w-full md:w-[44%]" type="text" />
                            </div>

                            <div className="flex items-center gap-2 pl-0 md:pl-2">
                                <input type="checkbox" className="border-2 text-2xl" />
                                <p className="text-white">Yes, subscribe me to your newsletter.</p>
                            </div>

                            <div className="py-6">
                                <h3 className="text-[#0d1885] bg-[#f8e3e0] w-full md:w-[44%] py-2 text-center hover:bg-white transition duration-450 ease-in-out cursor-pointer">
                                    Send
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <a className="text-white underline" href="https://www.instagram.com">Instagram</a>
                                <a className="text-white underline" href="https://www.facebook.com">Facebook</a>
                                <a className="text-white underline" href="https://www.pinterest.com">Pinterest</a>
                                <a className="text-white underline" href="https://www.youtube.com">Youtube</a>
                                <a className="text-white underline" href="https://www.tiktok.com">Tiktok</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default Mains