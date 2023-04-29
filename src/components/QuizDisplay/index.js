import React, {useState, useEffect} from "react";
import { library } from "../../library";
import QuizCard from "../QuizCard";
import QuizAnswers from "../QuizAnswers";

function QuizDisplay(props) {

    // destructure props
    const {
        currentCard,
        language,
        answersArray = [],
        setAnswersArray
    } = props;


    console.log("\nanswersArray on the QuizDisplay component: "+answersArray);

    return (
        <div 
            className="h-full w-full flex flex-col items-center justify-center"
        >
            {/* QuizInfo */}
            <QuizCard
                language={language}
                currentCard={currentCard}
            >
            </QuizCard>
            {/* QuizAnswers */}
            <QuizAnswers
                currentCard={currentCard}
                library={library}
                answersArray={answersArray}
                setAnswersArray={setAnswersArray}
            ></QuizAnswers>
            {/* Quit Button */}
            WIP
        </div>
    )
}

export default QuizDisplay;