import React, {useState, useEffect} from "react";

function QuizButtons(props) {

    // unpack props
    const {
        currentQuizCategory,
        quizBegun,
        setQuizBegun,
        currentSubCategory,
        setQuizCategory,
        setSubCategory
    } = props
    
    // useEffect(() => {
    // }, [
    //     currentQuizCategory, currentSubCategory, setSubCategory, setQuizCategory
    // ]);

    return (
        <div className="w-full flex flex-col items-center border border-slate-900 h-1/2">
            
            <p className="text-center text-lg font-bold">
                Select one or more categories of {currentQuizCategory} flashcards to include in your study
            </p>
            
            <ul className="flex flex-col my-2">
                {/* Conditionally render choices of sub-categories based on the active 
                current quiz category */}
                {currentSubCategory.map((item) => (
                    <li
                        className="w-full bg-emerald-300 border border-emerald-700 rounded-lg my-1 p-2 text-center font-bold"
                        onClick={() => {
                            console.log("Clicked "+item.name)
                        }}
                        key={item.name}
                    >
                        {item.name}
                    </li>
                )

                )}

            </ul>

            <button
                className="rounded bg-emerald-600 border border-emerald-400 shadow-lg font-bold text-zinc-200 text-lg p-2"
                onClick={ () => {
                        setQuizBegun(true);
                    }
                }
            >
                Start
            </button>

        </div>
    );
}

export default QuizButtons;