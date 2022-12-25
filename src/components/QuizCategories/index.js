import React from "react";

function QuizCategories(props) {

    // Unpack props
    const {
        quizCategoryItems = [],
        setQuizCategory,
        currentQuizCategory
    } = props

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
                        }}>
                            {item.name}
                        </span>
                    </li>
                
                ))}
            </ul>
        </div>
    );
}

export default QuizCategories;