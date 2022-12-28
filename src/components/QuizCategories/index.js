import React, {useEffect} from "react";

function QuizCategories(props) {
    
    // Unpack props
    const {
        quizCategoryItems = [],
        setQuizCategory,
        currentQuizCategory,
        currentSubCategory,
        setSubCategory,
        wordsSubCategories,
        timeSubCategories,
        numbersSubCategories,
        phrasesSubCategories
    } = props

    // useEffect(() => {
    // }, [
    //     currentQuizCategory,
    //     currentSubCategory,
    //     setQuizCategory,
    //     setSubCategory,
    //     wordsSubCategories,
    //     timeSubCategories,
    //     numbersSubCategories,
    //     phrasesSubCategories
    // ]);

    console.log("currentSubCategory: "+currentSubCategory);
    
    return (
        <div className="w-full">
            "Here are some words"
            <ul className="flex items-center justify-center">
                {quizCategoryItems.map((item) => (
                    <li
                        className={"flex bg-indigo-600 items-center justify-center p-2 mx-1 border rounded shadow text-zinc-100 w-1/4"}
                        key={item.name}
                    >
                        <span onClick={() =>  {
                            setQuizCategory(item.name);
                            console.log("Current quiz category: "+currentQuizCategory);
                            if (currentQuizCategory === "Words") {
                                setSubCategory(wordsSubCategories);
                            }
                            else if (currentQuizCategory === "Time") {
                                setSubCategory(timeSubCategories);
                            }
                            else if (currentQuizCategory === "Numbers") {
                                setSubCategory(numbersSubCategories);
                            }
                            else if (currentQuizCategory === "Phrases") {
                                setSubCategory(phrasesSubCategories);
                            }
                            console.log("Set subCategory to "+currentSubCategory);
                        }
                            
                        }>
                            {item.name}
                        </span>
                    </li>
                
                ))}
            </ul>
        </div>
    );
}

export default QuizCategories;