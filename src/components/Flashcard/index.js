import React, {useEffect} from "react";
import library from "../../library";

function Flashcard(props) {

    // useEffect(() => {
    // });

    // Unpack props for use in the functions
    const {
        currentQuizCategory,
        currentMenuItem,
        selectedFlashcards = []
    } = props;

    // Evaluate the selected flashcards array against the 0th element of each subarray in library.
    // If it matches, include that subarray in a new array of arrays from which to randomly draw
    console.log(selectedFlashcards);

    // Variable to store selected arrays of possible flashcards from Library
    let selectedSubArrays = [];
    let subArrayCategories = [];

    function evaluateCategories() {
        for(let i = 0; i < library.length; i++) {
            if (selectedFlashcards.includes(library[i][0])) {
                console.log("Including subArray "+library[i][0]);
                selectedSubArrays.push(library[i].slice(1,library[i].length));
                subArrayCategories.push(library[i][0]);
            }
        }
        console.log("Finished matching.\nSelected Subarrays: "+selectedSubArrays);
    }

    evaluateCategories();

    // Generate a random card from the library based on whichever quiz type is set to active
    function generateCard(array) {

        console.log("Array: "+array);
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
        // Select one of the arrays at random (i.e. verbs, nouns, etc.)
        let cardArrayIndex = Math.floor(Math.random() * array.length);
        console.log(cardArrayIndex);

        // Select from that array a random card
        let chosenSubArray = array[cardArrayIndex];
        let randomCard = Math.floor(Math.random() * chosenSubArray.length);
        let chosenCard = chosenSubArray[randomCard];

        // Split its properties into variables to be used
        let englishText = chosenCard.englishText;
        let romaji = chosenCard.romaji;
        let kanaText = chosenCard.kanaText;
        let category = subArrayCategories[cardArrayIndex];
        console.log("Example card from chosen subArray: ");
        console.log(englishText);
        console.log(kanaText);
        console.log(romaji);
        console.log(category);
    }

    generateCard(selectedSubArrays);

    


    return (


        <div className="w-full flex flex-col items-center justify-center h-3/5">

            {/* Will need to access the state of the card: English or Japanese, then
            conditionally render either just the English, or the English and Japanese. */}

            {/* header */}


            <div className="border border-slate-400 shadow-lg rounded w-11/12 h-full my-4 p-2 flex flex-col items-center justify-center">
            {/* Either English or Japanese and English */}

            </div>

            <div>
                {/* Buttons to show Japanese and generate a new card */}
            </div>

            
        </div>
    );
}

export default Flashcard;