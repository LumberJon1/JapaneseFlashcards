import React from "react";

function QuizButtons(props) {

    // unpack props
    const {
        currentQuizCategory,
        quizBegun,
        setQuizBegun
    } = props

    // Define the lists of possible subcategories and UI buttons to conditionally render
    const wordsSubCategories = [

    ];

    const timeSubCategories = [

    ];

    const phrasesSubCategories = [

    ];

    const numbersSubCategories = [

    ];

    let currentSubCategory;
    if (currentQuizCategory === "") {
        currentSubCategory = "";
    }
    else if (currentQuizCategory === "") {
        currentQuizCategory = "";
    }
    else if (currentQuizCategory === "") {
        currentQuizCategory = "";
    }
    else if (currentQuizCategory === "") {
        currentQuizCategory = "";
    }

    return (
        <div className="w-full flex flex-col items-center border border-slate-900 h-1/2">
            
            <p className="text-center text-lg font-bold">
                Select one or more categories of {currentQuizCategory} flashcards to include in your study
            </p>
            
            <ul className="flex flex-col my-2">
                {/* Conditionally render choices of sub-categories based on the active 
                current quiz category */}

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