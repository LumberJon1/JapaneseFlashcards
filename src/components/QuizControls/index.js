import React, {useState} from "react";

function QuizControls() {

    return (

        <div
            className="flex items-center justify-center"
        >
            <button
                className="border rounded-lg p-2 text-lg font-bold text-zinc-400 shadow-lg bg-amber-500"
            >
                Stop
            </button>

            <button
                className="border rounded-lg p-2 text-lg font-bold text-zinc-400 shadow-lg bg-emerald-500"
            >
                Next
            </button>

        </div>
    )
}

export default QuizControls;