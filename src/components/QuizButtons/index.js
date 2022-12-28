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
    
    // useEffect(() => {
    // }, [
    //     currentQuizCategory, currentSubCategory, setSubCategory, setQuizCategory
    // ]);

    function evaluateSubCategory() {

        let subCategoryArray;

        console.log("\nSelected subcategory: None");
        console.log("\nCurrent quiz category: "+currentQuizCategory);
        if (currentQuizCategory === "Words") {
            subCategoryArray = wordsSubCategories;
            console.log("Setting subcategory array to "+currentSubCategory);
        }
        else if (currentQuizCategory === "Time") {
            subCategoryArray = timeSubCategories;
            console.log("Setting subcategory array to "+currentSubCategory);
        }
        else if (currentQuizCategory === "Numbers") {
            subCategoryArray = numbersSubCategories;
            console.log("Setting subcategory array to "+currentSubCategory);
        }
        else if (currentQuizCategory === "Phrases") {
            subCategoryArray = phrasesSubCategories;
            console.log("Setting subcategory array to "+currentSubCategory);
        }
        console.log("\nsubCategoryArray: "+subCategoryArray);
        setSubCategory(subCategoryArray);
    }

    evaluateSubCategory();
    console.log("currentSubCategory: "+currentSubCategory);
    console.log(currentSubCategory);
    currentSubCategory.forEach((item) => console.log(item.name));

    // Store user's selected subcategories
    let selectedCategories = [];

    // Determine currentQuizCategory
    console.log(wordsSubCategories);
    console.log(timeSubCategories);
    console.log(numbersSubCategories);
    console.log(phrasesSubCategories);

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
                        className=""
                        key={item.name}
                    >
                        {item.name}
                    </li>
                ))}
                {/* {currentSubCategory.map((item) => (
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

                )} */}

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