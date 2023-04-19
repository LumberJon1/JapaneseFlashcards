import React from "react";
import library from "../../library";

function Library() {

    library.forEach((category) => {
        console.log(category);
    });


    return (
        // Column Labels
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-around justify-center mx-1 mb-6 mt-4 w-full bg-emerald-400 sticky top-12">
                <p className="w-1/3 p-2 text-center font-bold">English</p>
                <p className="w-1/3 p-2 text-center font-bold">Romaji</p>
                <p className="w-1/3 p-2 text-center font-bold">Kana</p>
            </div>

            {/* Doing away with labels and instead focusing on sorting */}
            <ul className="flex flex-col items-center">

                {/* Sort the library according to sorting parameters before mapping */}



                {library.map((category) => (
                    category[0] != "Phrases" ?
                    <div className="flex flex-col items-center justify-center mx-1 w-full">
                        <ul className="flex flex-col text-center justify-center w-full my-2">
                            {category.map((item) => (
                                !item.englishText ?
                                <span></span>
                                :
                                <li
                                key={item.englishText}
                                className="text-center m-2 w-full flex border border-slate-400 rounded items-center justify-center p-2"
                                >
                                    <p className="w-1/3 text-center break-words">
                                        {item.englishText}
                                    </p>
                                    <p className="w-1/3 text-center break-words">
                                        {item.romaji}
                                    </p>
                                    <p className="w-1/3 text-center break-words">
                                        {item.kanaText}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    : <div></div>
                ))}
            </ul>

        </div>
    );
}

export default Library;