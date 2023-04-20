import React, {useState} from "react";
import { library } from "../../library";

function LibrarySearch(props) {

    // unpack props
    const {
        searchTerms,
        setSearchTerms,
        setSearchResults
    } = props;

    // functions, state management...

    // sort click handler
    function handleSortClick() {
        console.log("Clicked the sort button");
    }

    // Handle search change
    function handleSearchChange(e) {
        setSearchTerms(e.target.value);
        console.log(searchTerms);
    }

    // search click handler
    function handleSearchClick(e) {
        e.preventDefault();
        console.log("Submitting "+searchTerms);

        // Initialize an array to hold matching results
        let matches = [];

        // First find exact matches or matches that have the string in order
        for (let i = 0; i < library.length; i++) {
            let comparingWord = library[i].romaji.toLowerCase();
            // console.log("Comparing word: "+comparingWord);
            let searchSlice = (comparingWord.slice(0,searchTerms.length))
            // console.log("Search slice: "+searchSlice)
            if (searchSlice.includes(searchTerms.toLowerCase())) {
                console.log(comparingWord+" contains "+searchTerms.toLowerCase());
                matches.push(library[i]);
            }
        }
        console.log(matches);

        // Before returning matches, clear the input field
        setSearchTerms("");

        setSearchResults(matches);

        // If none exist, search for substrings in other indexes of words

        // If there are still no matches, display a message stating "No matches"
    }

    // Also needs to take props from the state of English or Japanese sort method from Library

    // animation state management

    return (
        <div className="h-24 mt-3 mb-1 w-full flex flex-col items-center justify-around">
            <div className="flex items-center justify-evenly w-full h-8">
                <p className="text-lg font-bold text-amber-400">
                    English
                </p>
                <div className="w-1/2 bg-zinc-300 rounded my-2 relative h-full">
                    <button
                        className="p-2 absolute inset-y-0 w-1/2 flex flex-col items-center justify-center h-full rounded shadow bg-violet-500 text-zinc-100 font-bold text-lg left-0"
                        onClick={handleSortClick}
                    >
                        Sort
                    </button>
                </div>
                <p className="text-lg font-bold text-zinc-300">
                    Japanese
                </p>
            </div>
            <form action=""
                id="searchForm"
                className="flex items-center justify-center w-full"
            >
                <input 
                    type="text"
                    name="searchTerms"
                    placeholder="search"
                    value={searchTerms}
                    className="border border-slate-300 p-2 rounded mx-2"
                    onChange={handleSearchChange}
                />
                <button
                    className="rounded shadow-lg flex items-center justify-center p-1 bg-amber-600 font-bold text-lg text-zinc-100"
                    name="search"
                    type="submit"
                    onClick={handleSearchClick}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default LibrarySearch;