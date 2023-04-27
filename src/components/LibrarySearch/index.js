import React from "react";
import { countLibrary, library } from "../../library";

function LibrarySearch(props) {

    // unpack props
    const {
        searchTerms,
        setSearchTerms,
        setSearchResults,
        sortOrder,
        setSortOrder
    } = props;

    // functions, state management...

    // sort click handler
    function handleSortClick() {
        console.log("Clicked the sort button");
        if (sortOrder === "English") {
            setSortOrder("Japanese");
        }
        else {
            setSortOrder("English");
        }
        countLibrary();
    }

    // Handle search change
    function handleSearchChange(e) {
        setSearchTerms(e.target.value);
        console.log(searchTerms);
    }

    // search click handler
    function handleSearchClick(e) {
        e.preventDefault();

        if (searchTerms !== "") {
            console.log("Submitting "+searchTerms);
    
            // Initialize an array to hold matching results
            let matches = [];
    
            // First find exact matches or matches that have the string in order
            for (let i = 0; i < library.length; i++) {
    
                let comparingWord = "";
    
                // Search either romaji or English translations depending on state
                if (sortOrder === "English") {
                    comparingWord = library[i].englishText.toLowerCase();
                }
                else {
                    comparingWord = library[i].romaji.toLowerCase();
                }
                // console.log("Comparing word: "+comparingWord);
                let searchSlice = (comparingWord.slice(0,searchTerms.length))
                // console.log("Search slice: "+searchSlice)
                if (searchSlice.includes(searchTerms.toLowerCase())) {
                    console.log(comparingWord+" contains "+searchTerms.toLowerCase());
                    matches.push(library[i]);
                }
            }
            console.log(matches);
    
            // If none exist, search for substrings in other indexes of words
            if (matches.length < 1) {
                console.log("\nNo verbatim matches.  Searching substrings...\n");
    
                for (let i = 0; i < library.length; i++) {
        
                    let comparingWord = "";
        
                    // Search either romaji or English translations depending on state
                    if (sortOrder === "English") {
                        comparingWord = library[i].englishText.toLowerCase();
                    }
                    else {
                        comparingWord = library[i].romaji.toLowerCase();
                    }
        
                    for (let j = 0; j < (comparingWord.length - searchTerms.length + 1); j++) {
                        // Progressively search a slice of the comparing word that is [searchTerms.length] chars
                        // long, and stop once we reach the end of the word, comparing along the way.
                        let searchSlice = comparingWord.slice(j, j + searchTerms.length);
                        if (searchSlice.includes(searchTerms.toLowerCase())) {
                            console.log("slice within word "+comparingWord+" contains "+searchTerms+".");
                            matches.push(library[i]);
                        }
                    }
                }
            }
            console.log(matches);
    
            // If there are still no matches, display a message stating "No matches"
            if (matches.length < 1) {
    
                // For now I am using an object with the same structure as library entries, but
                // I will try and find a more elegant solution in the near future.
                matches.push({
                    englishText: "No",
                    romaji: "Matching",
                    kanaText: "Results",
                    kanjiText: "",
                    category: ""
                });
            }
    
            // Before returning matches, clear the input field
            setSearchTerms("");

            setSearchResults(matches);
        }
        else {
            // If nothing was entered in the search results, load the whole library
            setSearchTerms("");
            setSearchResults(library);
        }

    }

    // animation state management

    return (
        <div className="h-48 mt-3 mb-1 w-full flex flex-col items-center justify-around">
            <div
                className="flex flex-col justify-evenly h-full w-full"
            >
                <p
                    className="text-sm text-zinc-400 mt-8"
                >
                    ({countLibrary()}) entries in library
                </p>
                <p
                    className="font-semibold text-lg text-slate-500"
                >
                    Searching In
                </p>
                <div className="flex items-center justify-evenly w-full h-8">
                    <p className={sortOrder === "English" ? "text-lg font-bold text-amber-400"
                        : "text-lg font-bold text-zinc-300"}>
                        English
                    </p>
                    <div className="w-1/2 bg-zinc-300 rounded my-2 relative h-full">
                        <button
                            className={sortOrder === "English" ? "p-2 absolute inset-y-0 w-1/2 flex flex-col items-center justify-center h-full rounded shadow bg-violet-500 text-zinc-100 font-bold text-lg left-0"
                            : "p-2 absolute inset-y-0 w-1/2 flex flex-col items-center justify-center h-full rounded shadow bg-violet-500 text-zinc-100 font-bold text-lg right-0"}
                            onClick={handleSortClick}
                        >
                        Switch
                        </button>
                    </div>
                    <p className={sortOrder === "Japanese" ? "text-lg font-bold text-amber-400"
                        : "text-lg font-bold text-zinc-300"}>
                        Japanese
                    </p>
                </div>
                <form action=""
                    id="searchForm"
                    className="flex items-center justify-center w-full"
                >
                    <input 
                        type="search"
                        name="searchTerms"
                        placeholder="search"
                        value={searchTerms}
                        className="border border-slate-300 p-2 rounded mx-2"
                        onChange={handleSearchChange}
                    />
                    <button
                        className="rounded shadow-lg flex items-center justify-center px-3 py-2 bg-emerald-500 font-bold text-lg text-zinc-100 w-1/5"
                        name="search"
                        type="submit"
                        onClick={handleSearchClick}
                    >
                        Go
                    </button>
                </form>

            </div>
        </div>
    )
}

export default LibrarySearch;