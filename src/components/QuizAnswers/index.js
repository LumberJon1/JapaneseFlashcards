import React from "react";

function QuizAnswers(props) {
    const {
        currentCard,
        library
    } = props;

    // function to load correct and incorrect quiz answers

    function loadAnswers() {

        // empty array to load all answers into
        let answersArray = [];

        // First load the correct answer from the current card
        let correctAnswer = currentCard.englishText;
        answersArray.push(correctAnswer);
        console.log("Correct answer: "+correctAnswer);

        // Then choose from any number of englishText properties from
        // any card in the library at random and load them into answersArray
        for (let i = 0; i < library.length; i++) {
            let randomAnswerIndex = Math.floor(Math.random() * library.length);
            // If by some miracle it's already in the answersArray, don't include it and run again
            if (answersArray.includes(library[randomAnswerIndex].englishText)) {
                console.log(library[randomAnswerIndex].englishText+" is already in answers.");
                console.log("Re-running randomizer...");
                i--;

            }
            else {
                console.log("Pushing "+library[randomAnswerIndex].englishText);
                answersArray.push(library[randomAnswerIndex].englishText);
            }
        }
    }


    return (
        <div>
            Answers
        </div>
    )
}

export default QuizAnswers;