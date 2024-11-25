import React, {useState} from "react";

const AccordionTable = ({title,desc}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);



    return (
        <div>
            <div className="w-full">
                <div id="accordion-collapse" className="border-l-2 border-black-150" data-accordion="collapse">
       {types.map((type, id) => (
        <div className="border-l-2 border-Orange-200 px-6">


            <h2 id={`accordion-collapse-heading-${id}`}>
                <button type="button" onClick={() => setAccordionOpen(!accordionOpen)}
                        className={`"flex text-left bg-transparent tracking-wider items-center w-full px-4 pt-4 font-TitlingGothicFB text-5xl leading-none text-white hover:text-Orange-200  gap-4"
                                        ${!accordionOpen
                            ? "uppercase max-w-lg text-black-150 my-[-4px] text-3xl hover:text-Orange-200"
                            : "uppercase opacity-100 text-white text-2xl hover:text-Orange-100"
                        }`}
                        data-accordion-target={`#accordion-collapse-body-${id}`} aria-expanded="true"
                        aria-controls={`accordion-collapse-body-${id}`}>
                    <span className="max-w-sm" key={id}>{type.title}</span>
                </button>
            </h2>

            <div id={`accordion-collapse-body-${id}`} className="hidden"
                 aria-labelledby={`accordion-collapse-heading-${id}`}>
                <div
                    className="px-4 mt-2 ">
                    <p className="mb-2 text-black-150 font-Poppins-Regular text-md max-w-md leading-7">Your
                        {type.desc} </p>

                </div>
                <div className="mt-12 ml-4">
                    <a href=""
                       className="font-Poppins-Bold py-3 px-6 rounded-full border-2 border-Orange-200 text-white tracking-[3px] uppercase text-sm hover:bg-Orange-200 hover:text-black-400 transition-all">FREE
                        TRIAL</a>
                </div>
            </div>
        </div>
    ))}
</div>
            </div>
   </div>

    );
};
const types = [
    {
        id: 1,
        title: "All your favourite bands & GENRE",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
    {
        id: 2,
        title: "all other styles of music",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
    {
        id: 3,
        title: "High quality audio",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
    {
        id: 4,
        title: "More € per stream",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
    {
        id: 5,
        title: "Direct Artist Support",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
    {
        id: 6,
        title: "Import Playlists",
        desc: `Your favourite bands in any imaginable genre + top-notch recommendations & playlists. `,
    },
];

export default AccordionTable;