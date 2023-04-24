import React, {useState} from "react";

function QuizControls(props) {
    // unpack props
    const {
        setQuizActive,
        setDisplayingCategories
     } = props;


    // click handler for stop button
    function handleStopClick() {
        setQuizActive(false);
        setDisplayingCategories(true);
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
            >
                Next
            </button>

        </div>
    )
}

export default QuizControls;