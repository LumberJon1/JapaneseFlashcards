import React, {useState} from "react";
import Card from "../Card";
import QuizControls from "../QuizControls";

function QuizDisplay(

    // unpack props

) {

    // State management for ongoing quiz
    const [quizActive, setQuizActive] = useState(false);


    return (

        <div
            className="border border-slate-900 bg-cyan-200 h-full flex flex-col items-center justify-center"
        >
            {quizActive ? 
            
                <div>
                    <Card></Card>
                    <QuizControls></QuizControls>
                </div>
                
                : <></>
            }

        </div>

    )

}

export default QuizDisplay;