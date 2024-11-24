// import React, {useState} from "react";
//
// const AccordionTable = ({title,desc}) => {
//     const [accordionOpen, setAccordionOpen] = useState(false);
//
//
//
//     return (
//         <div>
//             <div className="w-full">
//
//                     <div className={`pl-24  py-4 border-l-4 border-Orange-200
//                 ${accordionOpen
//                         ? "border-l-2 border-Orange-200"
//                         : "border-l-2 border-black-200"
//                     }`}>
//                         <button
//                             onClick={() => setAccordionOpen(!accordionOpen)}
//                             className="flex items-center w-full"
//                         >
//                             <h1 className={`cursor-pointer py-0 mr-6 max-w-sm text-left bg-transparent uppercase tracking-wider items-center w-full font-TitlingGothicFB text-3xl leading-none hover:text-black-50
//                                     ${!accordionOpen
//                                 ? "capitalize max-w-lg text-black-150 my-[-4px] text-3xl hover:text-Orange-200"
//                                 : "active uppercase opacity-100 text-white text-5xl hover:text-Orange-100"
//                             }`}>
//                                 {title}</h1>
//                             {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
//
//                         </button>
//
//
//
//                         </div>
//                         <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm
//                                  ${accordionOpen
//                             ? "grid-rows-[1fr] visible"
//                             : "grid-rows-[-1fr] hidden"
//                         }`}
//                         >
//
//                             <div className="">
//                                 <p className="mt-2 text-black-150 font-Poppins-Regular text-base max-w-sm leading-7">
//                                     {desc}
//                                 </p>
//                             </div>
//                             <div className="mt-12 mb-6">
//                                 <a href=""
//                                    className="font-Poppins-Bold py-3 px-6 rounded-full border-2 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-Orange-200 hover:text-black-400 transition-all">FREE
//                                     TRIAL</a>
//                             </div>
//                         </div>
//
//                         <div className={`hide`}></div>
//
//                     </div>
//
//             </div>
//         </div>
//
//     );
// };
// const data = [
//     {
//         id: 1,
//         title: "All your favourite bands & GENRE",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
//     {
//         id: 2,
//         title: "all other styles of music",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
//     {
//         id: 3,
//         title: "High quality audio",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
//     {
//         id: 4,
//         title: "More € per stream",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
//     {
//         id: 5,
//         title: "Direct Artist Support",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
//     {
//         id: 6,
//         title: "Import Playlists",
//         desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
//     },
// ];
//
// export default AccordionTable;
//
//
// // <div id="accordion-collapse" className="border-l-2 border-black-150" data-accordion="collapse">
// //     {types.map((type, id) => (
// //         <div className="border-l-2 border-Orange-200 px-6">
// //
// //
// //             <h2 id={`accordion-collapse-heading-${id}`}>
// //                 <button type="button" onClick={() => setSelected(!selected)}
// //                         className={`"flex text-left bg-transparent tracking-wider items-center w-full px-4 pt-4 font-TitlingGothicFB text-5xl leading-none text-white hover:text-Orange-200  gap-4"
// //                                         ${!selected
// //                             ? "uppercase max-w-lg text-black-150 my-[-4px] text-3xl hover:text-Orange-200"
// //                             : "capitalize opacity-100 text-white text-5xl hover:text-Orange-100"
// //                         }`}
// //                         data-accordion-target={`#accordion-collapse-body-${id}`} aria-expanded="true"
// //                         aria-controls={`accordion-collapse-body-${id}`}>
// //                     <span className="max-w-sm" id={id}>{type.title}</span>
// //                 </button>
// //             </h2>
// //
// //             <div id={`accordion-collapse-body-${id}`} className="hidden"
// //                  aria-labelledby={`accordion-collapse-heading-${id}`}>
// //                 <div
// //                     className="px-4 mt-2 ">
// //                     <p className="mb-2 text-black-150 font-Poppins-Regular text-md max-w-md leading-7">Your
// //                         {type.desc} </p>
// //
// //                 </div>
// //                 <div className="mt-12 ml-4">
// //                     <a href=""
// //                        className="font-Poppins-Bold py-3 px-6 rounded-full border-2 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-Orange-200 hover:text-black-400 transition-all">FREE
// //                         TRIAL</a>
// //                 </div>
// //             </div>
// //         </div>
// //     ))}
// // </div>
