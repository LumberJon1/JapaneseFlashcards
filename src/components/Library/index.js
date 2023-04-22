import React, {useState} from "react";
import {library, sortLibrary} from "../../library";
import LibrarySearch from "../LibrarySearch";
import { v4 as uuidv4 } from 'uuid';

function Library() {

    // state management for sort order
    const [sortOrder, setSortOrder] = useState("English");

    // State management for the search terms and search button submission
    const [searchTerms, setSearchTerms] = useState("");

    // State management for search results
    const [searchResults, setSearchResults] = useState(library);


    return (
        // Column Labels
        <div className="flex flex-col items-center justify-center">


            {/* Searchbar component with sorting button */}
            <LibrarySearch
                searchTerms={searchTerms}
                setSearchTerms={setSearchTerms}
                setSearchResults={setSearchResults}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
            ></LibrarySearch>


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
                    {searchResults.map((item) => (
                        item.category !== "Phrases" ?
                        <li
                        className="text-center m-2 w-full flex border border-slate-400 rounded items-center justify-center p-2"
                        key={uuidv4()}
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

            </ul>

        </div>
    );
}

export default Library;