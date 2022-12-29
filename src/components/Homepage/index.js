import React from "react";

function Homepage() {

    return (

        <div className="flex flex-col items-center justify-center h-2/3 my-auto bg-slate-300/30 mx-4">
            <h1 className="text-2xl font-bold">
                JAPANESE FLASHCARDS
            </h1>
            <h2 className="text-xl font-bold my-4">
                日本語
            </h2>
            <div>
                {/* <img src={} alt="Fushimi Inari Taisha" /> */}
            </div>
            <p className="my-4 font-bold">
                Select Library to view the entire vocabulary of Japanese words with 
                English, Hiragana, and Romaji translations.
            </p>
            <p className="my-4 font-bold">
                Select Quiz to begin studying flashcards from among multiple categories of words,
                phrases, and numbers. 
            </p>
        </div>
    )
}

export default Homepage;