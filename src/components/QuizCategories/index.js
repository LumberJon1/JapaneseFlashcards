import React from "react";
import { v4 as uuidv4 } from 'uuid';

function QuizCategories(props) {
    
    // Unpack props
    const {
        availableCategories,
        displayingCategories,
        setDisplayingCategories,
        selectedCategories,
        setSelectedCategories
    } = props;

    
    // Handler for onClick event for each category
    function toggleSelectCategory(e) {
        let localCategories = [...selectedCategories];

        if (localCategories.includes(e.target.innerText)) {
            console.log(e.target.innerText+" already in selected categories.  Removing...");
            localCategories.splice(localCategories.indexOf(e.target.innerText), 1);
            console.log("Now contains "+localCategories);
        }

        // Cases where user clicks "All Categories"
        else if (e.target.innerText === "All Categories") {
            console.log("\nlocalCategories: "+localCategories);
            console.log("length: "+localCategories.length);
            console.log("\navailableCategories: "+availableCategories);
            console.log("length: "+availableCategories.length);
            
            if (localCategories.length === availableCategories.length) {
                console.log("All categories already selected.  Resetting selected categories...");
                localCategories = [];
                console.log("Now contains "+localCategories);
            }
            else {
                console.log("Changing current selection to be all categories...");

                for (let i = 0; i < availableCategories.length; i++) {
                    if (!localCategories.includes(availableCategories[i])) {
                        localCategories.push(availableCategories[i]);
                    }
                }
                console.log("Now contains "+localCategories);
            }
        }

        else {
            console.log(e.target.innerText+" not already in array.  Pushing value...");
            localCategories.push(e.target.innerText);
            console.log("Now contains "+localCategories);
        }
        setSelectedCategories(localCategories);
    }

    
    // Handler to display or hide categories onclick
    function toggleDisplayingCategories() {
        console.log("Clicked the Show/Hide Button");
        if (displayingCategories === true) {
            setDisplayingCategories(false);
        }
        else {
            setDisplayingCategories(true);
        }
    }

    return (

        <div
            className="w-full flex flex-col items-center justify-center"
        >
            {displayingCategories ? <div>
                QuizCategories
                <ul
                    className="flex flex-wrap items-center justify-center"
                >
                    {availableCategories.map((item) => (

                        <li
                            className={`border rounded p-1 m-2 ${selectedCategories.includes(item) && "bg-cyan-200"}`}
                            key={uuidv4()}
                            onClick={toggleSelectCategory}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className="border rounded p-1 m-2"
                        onClick={toggleSelectCategory}
                    >
                        All Categories
                    </li>
                </ul>
            </div>
            : <></>
            }
            <button
                className="border rounded-bottom p-1"
                onClick={toggleDisplayingCategories}
            >
                Show/Hide

            </button>
        </div>

    //     <div className="w-full mt-4">
    //         <ul className="flex items-center justify-center">
    //             {quizCategoryItems.map((item) => (
    //                 <li
    //                     className={`flex bg-indigo-600 items-center justify-center p-2 mx-1 border rounded shadow text-zinc-100 w-1/4${currentSubCategory === item.name && "bg-indigo-500 border-violet-600"}`}
    //                     key={item.name}
    //                 >
    //                     <span onClick={() =>  {
    //                         setQuizCategory(item.name);
    //                     }
                            
    //                     }>
    //                         {item.name}
    //                     </span>
    //                 </li>
                
    //             ))}
    //         </ul>
    //     </div>
    );
}

export default QuizCategories;