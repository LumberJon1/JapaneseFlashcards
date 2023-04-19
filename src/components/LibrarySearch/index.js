import React, {useState} from "react";

function LibrarySearch() {

    // functions, state management

    // sort click handler
    const handleSortClick = () => {
        console.log("Clicked the sort button");
    }

    // search click handler
    const handleSearchClick = () => {
        console.log("Clicked the search button");
    }

    // typing state management

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
                        onClick={() => {
                            handleSortClick
                        }}
                    >
                        Sort
                    </button>
                </div>
                <p className="text-lg font-bold text-zinc-300">
                    Japanese
                </p>
            </div>
            <div className="flex items-center justify-center w-full">
                <input 
                    type="text"
                    placeholder="search"
                    className="border border-slate-300 p-2 rounded mx-2"
                />
                <button
                    className="rounded shadow-lg flex items-center justify-center p-1 bg-amber-600 font-bold text-lg text-zinc-100"
                    onClick={() => {
                        handleSearchClick
                    }}
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default LibrarySearch;