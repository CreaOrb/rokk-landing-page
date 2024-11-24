import React from 'react'

const Hero = () => {
    return (
        <div className="hero-section h-full relative">
            <div className="container py-6 px-6 mx-auto">
                <div className="mt-24 text-center">
                    <h1 className="text-center text-7xl max-w-5xl max-md:text-5xl mx-auto font-TitlingGothicFB text-white tracking-wider leading-none uppercase">THE
                        FIRST STREAMING APP DEDICATED TO <span
                            className="bg-gradient-to-r from-Orange-200 to-Orange-100 text-transparent bg-clip-text">ROCK & METAL!</span>
                    </h1>
                    <p className="mt-4 font-Poppins-Regular text-center tracking-normal leading-[32px] max-md:text-[16px] max-md:leading-[28px] text-xl max-w-[520px] mx-auto text-black-50">
                        Music streaming platform <span className="text-Orange-200">BY</span> the metal community, <span
                        className="text-Orange-200">FOR</span> the metal community
                    </p>
                    <br/>
                    <div className="mt-16 max-md:mt-10 relative">
                        <div className="relative text-center">
                            <a href=""
                               className=" shadow-xl shadow-Orange-200/20 hover:shadow-Orange-200/30 font-Poppins-Bold  max-md:py-4 max-md:px-8 max-md:text-sm py-6 px-12 rounded-full bg-Orange-200  text-white tracking-[3px] uppercase text-lg hover:text-black-400 hover:bg-gradient-to-r hover:from-Orange-200 hover:to-Orange-100 transition-all">START
                                YOUR FREE TRIAL</a>
                        </div>


                        <p className="mt-12 max-md:mt-8 max-md:text-sm font-Poppins-Regular text-black-150 text-md text-center">Get 30-days Free Trial. Create your Account Now!</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
export default Hero
