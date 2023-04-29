import React, {useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function QuizAnswers(props) {
    const {
        currentCard,
        library,
        answersArray = [],
        setAnswersArray
    } = props;

    // // State manager to flip true once value of currentCard shows
    // const [receivedValue, setReceivedValue] = useState(false);

    // useEffect(() => {
    //     if (currentCard.englishText != undefined) {
    //         setReceivedValue(true);
    //         console.log("Set received value flag to "+receivedValue);
    //         setCorrectAnswer();
    //     }
    //     else {
    //         setReceivedValue(false);
    //     }
    // }, [currentCard]);


    // // local variable to hold correct card value
    let correctAnswer = "";

    // // Randomize answers array in place and add the current card, then set state
    // function randomizeAnswers() {

    //     // Add the correct answer from the current card
    //     let answers = [];
    //     answers.push(currentCard.englishText);
    //     console.log("\nAnswers within the randomizeAnswers() component function: "+answers);

    //     // Randomize order and set state
    //     let shuffledArray = answers.sort((a, b) => 0.5 - Math.random());
    //     setAnswersArray(...shuffledArray);
    // }

    function setCorrectAnswer() {
        correctAnswer = currentCard.englishText;
    }

    // useEffect(() => {
    //     console.log("\n\ncurrentCard.englishText: "+currentCard.englishText);
    //     let randomIndex = Math.floor(Math.random() * answersArray.length);
    //     console.log("Randomly generated index "+randomIndex);
    //     let copyArray = [...answersArray];
    //     console.log("Copy array: "+copyArray);
    //     // Replace an empty index if one exists
    //     if (copyArray.includes("")) {
    //         for (let i = 0; i < copyArray.length; i++) {
    //             if (copyArray[i].innerText === "") {
    //                 copyArray[i] = currentCard.englishText;
    //             }
    //         }
    //     }
    //     else {
    //         copyArray[randomIndex] = currentCard.englishText;
    //     }
    //     console.log("Updated copyArray: "+copyArray);
    //     setAnswersArray(copyArray);

    // }, [receivedValue])
    // randomizeAnswers()

    // function to highlight the correct and incorrect answers on guess, and
    // call the next card
    function handleAnswerClick(e) {
        setCorrectAnswer();
        console.log("\nComparing to "+correctAnswer);
        console.log("Clicked "+e.target.innerText);
        if (e.target.innerText === correctAnswer) {
            console.log("Correct answer!");
        }
        else {
            console.log("Wrong answer.");
        }
    }

    return (
        <div>
            <ul
                className="flex flex-wrap justify-center"
            >
                {answersArray.map((answer) => (
                    <li
                        className="w-1/3 m-2 p-2 bg-zinc-100 border rounded-lg flex items-center justify-center font-semibold shadow"
                        key={uuidv4()}
                        onClick={handleAnswerClick}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuizAnswers;