import React, {useState} from "react";

function QuizControls(props) {
    // unpack props
    const {
        setQuizActive,
        setDisplayingCategories,
        quizzingCards,
        setCurrentCard
     } = props;


    // click handler for stop button
    function handleStopClick() {
        setQuizActive(false);
        setDisplayingCategories(true);
    }

    // Click handler for next button to randomize a new card
    // Randomize card function to take random card from quizzingCards array and render to VDOM
    function loadCard() {
        let randomCardIndex = Math.floor(Math.random() * quizzingCards.length);
        let chosenCard = quizzingCards[randomCardIndex];
        
        console.log("\nChose card "+chosenCard);
        setCurrentCard(chosenCard);
    }

    return (

        <div
            className="flex items-center justify-evenly mt-2 w-full"
        >
            <button
                className="border rounded-lg p-2 mr-2 text-lg font-bold text-zinc-400 shadow-lg bg-amber-500"
                onClick={handleStopClick}
            >
                Stop
            </button>

            <button
                className="border rounded-lg p-2 ml-2 text-lg font-bold text-zinc-400 shadow-lg bg-emerald-500"
                onClick={loadCard}
            >
                Next
            </button>

        </div>
    )
}

export default QuizControls;