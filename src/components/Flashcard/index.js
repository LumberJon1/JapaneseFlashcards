import React, {useState} from "react";
import library from "../../library";
import {generateTimestamp, convertTime} from "../../utils/Time";

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

    // State Variables to hold card information
    const [englishText, setEnglishText] = useState("");
    const [romaji, setRomaji] = useState("");
    const [kanaText, setKanaText] = useState("");
    const [category, setCategory] = useState("");

    function evaluateCategories() {

        // If the selected flashcards category is "all ___", drop the all and the ending "s"
        if (selectedFlashcards.includes("All Numbers")) {
            selectedFlashcards[selectedFlashcards.indexOf("All Numbers")] = "Numbers";
            console.log("Updated entry for All category.  Selected Flashcards now includes "+selectedFlashcards);
        }
        else if (selectedFlashcards.includes("All Phrases")) {
            selectedFlashcards[selectedFlashcards.indexOf("All Phrases")] = "Phrases";
            console.log("Updated entry for All category.  Selected Flashcards now includes "+selectedFlashcards);
            // The regular generateCard() method can now be called
            generateCard(selectedSubArrays);
        }
        else if (selectedFlashcards.includes("All Times") || selectedFlashcards.includes("Time")) {
            selectedFlashcards[selectedFlashcards.indexOf("All Times")] = "Time";
            console.log("Updated entry for All category.  Selected Flashcards now includes "+selectedFlashcards);
            let timestamp = generateTimestamp();
            let convertedTime = convertTime(timestamp);

            // split into returned variables
            setEnglishText(timestamp);
            setRomaji(convertedTime);
            setKanaText("");
            setCategory("Time");

        }
        else {            
            for(let i = 0; i < library.length; i++) {
                if (selectedFlashcards.includes(library[i][0])) {
                    console.log("Including subArray "+library[i][0]);
                    selectedSubArrays.push(library[i].slice(1,library[i].length));
                    subArrayCategories.push(library[i][0]);
                }
            }
            // Use the general method for generating a card from a random word
            generateCard(selectedSubArrays);
        }
        console.log("Finished matching.\nSelected Subarrays: "+selectedSubArrays);
    }

    
    // Generate a random card from the library based on whichever quiz type is set to active
    function generateCard(array) {

        // Only generate the card if the categories are standard words
        if (
            !selectedFlashcards.includes("Time") &&
            !selectedFlashcards.includes("All Numbers")
            ) {
                console.log("Array: "+array);
                for (let i = 0; i < array.length; i++) {
                }
                // Select one of the arrays at random (i.e. verbs, nouns, etc.)
                let cardArrayIndex = Math.floor(Math.random() * array.length);
                
                // Select from that array a random card
                let chosenSubArray = array[cardArrayIndex];
                let randomCard = Math.floor(Math.random() * chosenSubArray.length);
                let chosenCard = chosenSubArray[randomCard];
                
                // Split its properties into variables to be used
                setEnglishText(chosenCard.englishText);
                setRomaji(chosenCard.romaji);
                setKanaText(chosenCard.kanaText);
                setCategory(subArrayCategories[cardArrayIndex]);
            }
        
    }
    
    
    // State variables to hold "flipped" or "translated" state of flashcard
    const [flipped, setFlipped] = useState(false);
    
    function toggleFlip() {
        // Toggle flipped state
        if (flipped) {
            setFlipped(false);
        }
        else {
            setFlipped(true);
        }
        console.log(flipped);
    }
    
    function handleNext() {
        evaluateCategories();
    }
    
    
    return (
        
        <div className="w-full flex flex-col items-center h-full">

            {/* Will need to access the state of the card: English or Japanese, then
            conditionally render either just the English, or the English and Japanese. */}

            {/* header */}
            <div className="w-full text-center text-xl my-3">
                {category}
            </div>

            <div className="border border-slate-400 shadow-lg rounded w-11/12 h-96 my-4 p-2 flex flex-col items-center justify-center">
            {/* Either English or Japanese and English */}
            {flipped ?
                <div className="h-full flex flex-col items-center justify-center">
                    <p className="my-8 text-xl font-bold">
                        {romaji}
                    </p>
                    <p className="my-8 text-xl font-bold">
                        {kanaText}
                    </p>
                </div>
            :
                <div className="h-full font-bold flex flex-col items-center justify-center text-xl">
                    <p>
                        {englishText}
                    </p>
                </div>
            } 

            </div>

            <div className="flex items-center justify-center w-3/4">
                {/* Buttons to show Japanese and generate a new card */}
                <button
                    className="p-3 font-bold text-xl text-center mx-4 w-1/3 shadow-lg border rounded-lg border-emerald-700 bg-emerald-400"
                    onClick={() => {
                        toggleFlip();
                    }}
                >
                    Flip
                </button>
                <button
                    className="p-3 font-bold text-xl text-center mx-4 w-1/3 shadow-lg border rounded-lg border-emerald-700 bg-emerald-400"
                    onClick={() => {
                        handleNext();
                        setFlipped(false);
                    }}
                >
                    Next
                </button>
            </div>

            
        </div>
    );
}

export default Flashcard;