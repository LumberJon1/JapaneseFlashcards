import React, { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function QuizAnswers(props) {
    const {
        currentCard,
        library,
        answersArray = [],
        setAnswersArray
    } = props;



    // Randomize answers array in place and add the current card, then set state
    function randomizeAnswers() {

        // Add the correct answer from the current card
        let answers = [];
        answers.push(currentCard.englishText);
        console.log("\nAnswers within the randomizeAnswers() component function: "+answers);

        // Randomize order and set state
        let shuffledArray = answers.sort((a, b) => 0.5 - Math.random());
        setAnswersArray(...shuffledArray);
    }

    useEffect(() => {
        console.log("\n\ncurrentCard.englishText: "+currentCard.englishText);
        let randomIndex = Math.floor(Math.random() * answersArray.length);
        console.log("Randomly generated index "+randomIndex);
        let copyArray = [...answersArray];
        console.log("Copy array: "+copyArray);
        copyArray[randomIndex] = currentCard.englishText;
        console.log("Updated copyArray: "+copyArray);
        setAnswersArray(copyArray);

    }, [currentCard])
    // randomizeAnswers()

    return (
        <div>
            <ul>
                {answersArray.map((answer) => (
                    <li
                        key={uuidv4()}
                    >
                        {answer}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuizAnswers;