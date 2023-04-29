import React, {useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function QuizAnswers(props) {
    const {
        currentCard,
        library,
        answersArray = [],
        setAnswersArray
    } = props;


    // // local variable to hold correct card value
    let correctAnswer = "";

    function setCorrectAnswer() {
        correctAnswer = currentCard.englishText;
    }

    // state management for whether the user has selected the answer
    const [answered, setAnswered] = useState(false);

    // function to highlight the correct and incorrect answers on guess, and
    // call the next card
    function handleAnswerClick(e) {
        setCorrectAnswer();
        setAnswered(true);
        
        console.log("\nComparing to "+correctAnswer);
        console.log("Clicked "+e.target.innerText);
        if (e.target.innerText === correctAnswer) {
            console.log("Correct answer!");
            e.target.className = "w-1/3 m-2 p-2 bg-emerald-300 border rounded-lg flex items-center justify-center font-semibold shadow"
        }
        else {
            e.target.className = "w-1/3 m-2 p-2 bg-red-300 border rounded-lg flex items-center justify-center font-semibold shadow"
            console.log("Wrong answer.");
        }

    }

        // // Handler for onClick event for each category
        // function toggleSelectCategory(e) {
        //     let localCategories = [...selectedCategories];
    
        //     if (localCategories.includes(e.target.innerText)) {
        //         console.log(e.target.innerText+" already in selected categories.  Removing...");
        //         localCategories.splice(localCategories.indexOf(e.target.innerText), 1);
        //         console.log("Now contains "+localCategories);
        //     }
    
        //     // Cases where user clicks "All Categories"
        //     else if (e.target.innerText === "All Categories") {
        //         console.log("\nlocalCategories: "+localCategories);
        //         console.log("length: "+localCategories.length);
        //         console.log("\navailableCategories: "+availableCategories);
        //         console.log("length: "+availableCategories.length);
                
        //         if (localCategories.length === availableCategories.length) {
        //             console.log("All categories already selected.  Resetting selected categories...");
        //             localCategories = [];
        //             console.log("Now contains "+localCategories);
        //         }
        //         else {
        //             console.log("Changing current selection to be all categories...");
    
        //             for (let i = 0; i < availableCategories.length; i++) {
        //                 if (!localCategories.includes(availableCategories[i])) {
        //                     localCategories.push(availableCategories[i]);
        //                 }
        //             }
        //             console.log("Now contains "+localCategories);
        //         }
        //     }
    
        //     else {
        //         console.log(e.target.innerText+" not already in array.  Pushing value...");
        //         localCategories.push(e.target.innerText);
        //         console.log("Now contains "+localCategories);
        //     }
        //     setSelectedCategories(localCategories);
        // }

    useEffect(() => {
        // Set the correct answer on component load
        setCorrectAnswer();
    }, [answered, currentCard, correctAnswer]);

    return (
        <div>
            <ul
                className="flex flex-wrap justify-center"
            >
                {answersArray.map((answer) => (
                    <li
                        // className={answered === false ? "w-1/3 m-2 p-2 bg-zinc-100 border rounded-lg flex items-center justify-center font-semibold shadow"
                        //             : answer === correctAnswer && "w-1/3 m-2 p-2 bg-red-300 border rounded-lg flex items-center justify-center font-semibold shadow"}
                        className={`w-1/3 m-2 p-2 bg-zinc-100 border rounded-lg flex items-center justify-center font-semibold shadow ${answered && answer === correctAnswer ? 'bg-emerald-300' : ''}`}
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