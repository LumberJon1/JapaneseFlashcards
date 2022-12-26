import React from "react";
import library from "../../library";

function Flashcard(props) {

    // Unpack props for use in the functions
    const {
        currentQuizCategory,
        currentMenuItem
    } = props;


    // Generate a random card from the library based on whichever quiz type is set to active

    


    return (


        <div className="w-full flex flex-col items-center justify-center h-3/5">

            {/* Will need to access the state of the card: English or Japanese, then
            conditionally render either just the English, or the English and Japanese. */}

            {/* header */}


            <div className="border border-slate-400 shadow-lg rounded w-11/12 h-full my-4 p-2 flex flex-col items-center justify-center">
            {/* Either English or Japanese and English */}

            </div>

            
        </div>
    );
}

export default Flashcard;