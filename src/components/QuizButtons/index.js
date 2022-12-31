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
        phrasesSubCategories = [],
        setSelectedFlashcards,
        selectedFlashcards
    } = props


    function handleStartButton() {
        storeCategories();
        setQuizBegun(true);
    }
    

    function evaluateSubCategory() {

        let subCategoryArray;

        if (currentQuizCategory === "Words") {
            subCategoryArray = wordsSubCategories;
        }
        else if (currentQuizCategory === "Time") {
            subCategoryArray = timeSubCategories;
        }
        else if (currentQuizCategory === "Phrases") {
            subCategoryArray = phrasesSubCategories;
        }

        setSubCategory(subCategoryArray);
    }

    evaluateSubCategory();

    // // Handle clicked state for subcategories
    // const [clicked, setClicked] = useState(false);

    // const handleClicked =  (event) => {
    //     setClicked(current => !current);
    //     console.log(clicked);
    // }


    // Store user's selected subcategories
    let selectedCategories = [];

    // Set the state at App level for the array of subCategories to load flashcards from
    function storeCategories() {
        setSelectedFlashcards(selectedCategories);
    }

    return (
        <div className="w-full flex flex-col items-center my-4 h-1/2">
            
            <p className="text-center text-lg font-bold">
                Select one or more categories of {currentQuizCategory} flashcards to include in your study
            </p>
            
            <ul className="flex flex-col my-4 w-full items-center justify-center">
                {currentSubCategory.map((item) => (
                    <li
                        className={`my-1 w-3/4 border border-slate-500 bg-zinc-100 shadow rounded-lg p-2 font-bold`}
                        onClick={(event) => {
                            if (selectedCategories.includes(item.name)) {
                                // remove
                                selectedCategories.splice(selectedCategories.indexOf([item.name]), 1);
                                event.currentTarget.classList = "my-1 w-3/4 border border-slate-500 bg-zinc-100 shadow rounded-lg p-2 font-bold";
                            }
                            else {
                                selectedCategories.push(item.name);
                                event.currentTarget.classList = "my-1 w-3/4 border border-indigo-600 bg-sky-300 shadow rounded-lg p-2 font-bold";
                            }
                            
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
                        handleStartButton();
                    }
                }
            >
                Start
            </button>
        </div>
    );
}

export default QuizButtons;