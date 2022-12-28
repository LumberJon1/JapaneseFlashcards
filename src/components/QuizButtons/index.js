import React, {useState} from "react";

function QuizButtons(props) {

    // unpack props
    const {
        currentQuizCategory,
        quizBegun,
        setQuizBegun,
        currentSubCategory,
        setQuizCategory,
        setSubCategory,
        wordsSubCategories = [],
        timeSubCategories = [],
        numbersSubCategories = [],
        phrasesSubCategories = []
    } = props
    

    function evaluateSubCategory() {

        let subCategoryArray;

        if (currentQuizCategory === "Words") {
            subCategoryArray = wordsSubCategories;
        }
        else if (currentQuizCategory === "Time") {
            subCategoryArray = timeSubCategories;
        }
        else if (currentQuizCategory === "Numbers") {
            subCategoryArray = numbersSubCategories;
        }
        else if (currentQuizCategory === "Phrases") {
            subCategoryArray = phrasesSubCategories;
        }

        setSubCategory(subCategoryArray);
    }

    evaluateSubCategory();


    // Store user's selected subcategories
    let selectedCategories = [];


    return (
        <div className="w-full flex flex-col items-center my-4 h-1/2">
            
            <p className="text-center text-lg font-bold">
                Select one or more categories of {currentQuizCategory} flashcards to include in your study
            </p>
            
            <ul className="flex flex-col my-4 w-full items-center justify-center">
                {/* Conditionally render choices of sub-categories based on the active 
                current quiz category */}
                {currentSubCategory.map((item) => (
                    <li
                        className={`my-1 w-3/4 border border-slate-500 bg-zinc-100 shadow rounded-lg p-2 font-bold ${selectedCategories.includes(item.name) && "subCategoryActive"}`}
                        onClick={() => {
                            if (selectedCategories.includes(item.name)) {
                                console.log("Array already contains "+item.name);
                                // remove
                                console.log("removing "+item.name+"...");
                                selectedCategories.splice(selectedCategories.indexOf([item.name]), 1);
                            }
                            else {
                                selectedCategories.push(item.name);
                            }
                            console.log("selectedCategories now contains: "+selectedCategories);
                        }}
                        key={item.name}
                    >
                        {item.name}
                    </li>
                ))}

            </ul>

            <button
                className="rounded bg-emerald-600 border border-emerald-400 shadow-lg font-bold w-1/3 text-zinc-200 text-lg p-2"
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