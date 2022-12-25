import React from "react";

function QuizCategories() {

    // Navbar menu items
    const categoryItems = [
        {
            name: "Words", 
            link: ""
        },
        {
            name: "Time", 
            link: ""
        },
        {
            name: "Phrases", 
            link: ""
        }
    ];

    // Define number to dynamically adjust category button sizes
    const buttonWidth = categoryItems.length;

    // Function handler for category items being clicked
    const navButtonClicked = function(buttonName) {
        console.log("Clicked "+buttonName)
    }

    return (
        <div className="w-full">
            "Here are some words"
            <ul className="flex items-center justify-center">
                {categoryItems.map((item) => (
                    <li
                        className={"flex bg-indigo-600 items-center justify-center p-2 mx-1 border rounded shadow text-zinc-100 w-1/4"}
                        key={item.name}
                    >
                        <span onClick={() => navButtonClicked(item.name)}>
                            {item.name}
                        </span>
                    </li>
                
                ))}
            </ul>
        </div>
    );
}

export default QuizCategories;