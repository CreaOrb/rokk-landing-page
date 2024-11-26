import React from 'react'
import logo from "../assets/img/logo-white.png";
import Fb from "../assets/img/fb-icon.png";
import Insta from "../assets/img/insta-icon.png";
import Youtube from "../assets/img/youtube-icon.png";


const Footer = () => {
    return (
        <div className="footer-section pt-6 pb-12 bg-black-500">
            <div className="container px-8 max-md:px-8 md:px-6 mx-auto relative text-sm">
                <div className="footer">
                    <div className="flex   justify-between items-center pb-12">

                        <div className="">
                            <img className="h-11 max-md:h-8" src={logo} alt=""/>
                        </div>
                        <div className="flex justify-center items-center">
                            <a href=""
                               className="pl-6 max-md:pl-3  rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Youtube} alt=""/>
                            </a>
                            <a href=""
                               className="pl-6 max-md:pl-3  rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Insta} alt=""/>
                            </a>
                            <a href=""
                               className="pl-6 max-md:pl-3 rounded-full border-0 ">
                                <img className="h-14 max-md:h-10" src={Fb} alt=""/>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="h-[2px] bg-black-200"></div>
                     <div className="footer-2 mt-12 max-md:mt-8">
                         <div className="flex max-md:block max-md:text-center  justify-between items-center">
                             <div className="copyright">
                                 <a href=""
                                    className="text-black-50 font-Poppins-Regular text-base">
                                     © 2024 ROKK. All Right Reserved.
                                 </a>
                             </div>
                             <div className="max-md:mt-6 terms">
                                 <a href=""
                                    className="text-black-50 font-Poppins-Regular text-base ">
                                     Privacy Policy
                                 </a>
                                 <a href=""
                                    className="ml-10 text-black-50 font-Poppins-Regular text-base ">
                                     Terms of Use
                                 </a>
                             </div>
                         </div>
                     </div>
            </div>
        </div>
    )
}
export default Footer