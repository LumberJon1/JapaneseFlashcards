import React, {useState} from "react";

function FlashcardControls(props) {
    // unpack props
    const {
        setQuizActive,
        setDisplayingCategories,
        quizzingCards,
        setCurrentCard
     } = props;

     // State to track the last card index
     const [lastCardIndex, setLastCardIndex] = useState(null);

    // click handler for stop button
    function handleStopClick() {
        setQuizActive(false);
        setDisplayingCategories(true);
    }

    // Click handler for next button to randomize a new card
    // Randomize card function to take random card from quizzingCards array and render to VDOM
    function loadCard() {
        let randomCardIndex;
        let chosenCard;

        // Prevent choosing the same card as the last one
        do {
            randomCardIndex = Math.floor(Math.random() * quizzingCards.length);
            chosenCard = quizzingCards[randomCardIndex];
        } while (randomCardIndex === lastCardIndex); // If it's the same as the last card, try again

        console.log("\nChose card " + chosenCard);
        setCurrentCard(chosenCard);

        // Update lastCardIndex to the current card's index
        setLastCardIndex(randomCardIndex);
    }


    return (

        <div
            className="flex items-center justify-evenly mt-2 w-full"
        >
            <button
                className="border rounded-lg p-2 mr-2 text-lg font-bold text-amber-300 shadow-lg bg-amber-500"
                onClick={handleStopClick}
            >
                Finish
            </button>

            <button
                className="border rounded-lg p-2 ml-2 text-lg font-bold text-emerald-300 shadow-lg bg-emerald-500"
                onClick={loadCard}
            >
                Next
            </button>

        </div>
    )
}

export default FlashcardControls;