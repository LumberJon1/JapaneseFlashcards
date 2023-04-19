import React, {useState} from "react";
import {library, sortLibrary, countLibrary} from "../../library";
import LibrarySearch from "../LibrarySearch";

function Library() {

    // state management for sort order
    const [sortOrder, setSortOrder] = useState("English");


    return (
        // Column Labels
        <div className="flex flex-col items-center justify-center">


            {/* Searchbar component with sorting button */}
            <LibrarySearch></LibrarySearch>


            <div className="flex items-around justify-center mx-1 mb-6 mt-4 w-full bg-slate-700 text-zinc-200 sticky top-12">
                <p className="w-1/3 p-2 text-center">English</p>
                <p className="w-1/3 p-2 text-center">Romaji</p>
                <p className="w-1/3 p-2 text-center">Kana</p>
            </div>

            {/* Doing away with labels and instead focusing on sorting */}
            <ul className="flex flex-col items-center">

                {/* Sort the library according to sorting parameters before mapping */}
                {sortLibrary(sortOrder)}

                <div className="flex flex-col items-center justify-center mx-1 w-full">
                    {library.map((item) => (
                        item.category !== "Phrases" ?
                        <li
                        className="text-center m-2 w-full flex border border-slate-400 rounded items-center justify-center p-2"
                        key={item.kanaText}
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
                        : <div></div>
                    ))}

                </div>

                {/* {library.map((category) => (
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
                ))} */}



            </ul>

        </div>
    );
}

export default Library;