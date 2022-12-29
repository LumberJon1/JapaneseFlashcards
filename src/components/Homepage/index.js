import React from "react";

function Homepage() {

    return (

        <div className="flex flex-col items-center justify-evenly h-full">
            <h1 className="text-2xl font-bold mt-6">
                JAPANESE FLASHCARDS
            </h1>
            <h2 className="text-xl font-bold my-4">
                日本語
            </h2>
            <div>
                - image here -
            </div>
            <p className="my-4">
                Select Library to view the entire vocabulary of Japanese words with 
                English, Hiragana, and Romaji translations.
            </p>
            <p className="my-4">
                Select Quiz to begin studying flashcards from among multiple categories of words,
                phrases, and numbers. 
            </p>
        </div>
    )
}

export default Homepage;