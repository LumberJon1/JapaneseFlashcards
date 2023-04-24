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
            className={displayingCategories === true ?
                "w-full border-gray-500 bg-slate-200 flex flex-col items-center justify-center z-20"
                :
                "w-full flex flex-col items-center justify-center z-20"
            }
                
        >
            {displayingCategories ? <div>
                QuizCategories
                <ul
                    className="flex flex-wrap items-center justify-center"
                >
                    {availableCategories.map((item) => (

                        <li
                            className={`border-slate-800 rounded bg-slate-700 text-zinc-100 p-1 m-2 ${selectedCategories.includes(item) && "bg-blue-400 border-cyan-300"}`}
                            key={uuidv4()}
                            onClick={toggleSelectCategory}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className={`border-slate-800 rounded bg-slate-700 text-zinc-100 p-1 m-2 ${selectedCategories.includes("All Categories") && "bg-blue-400 border-cyan-300"}`}
                        onClick={toggleSelectCategory}
                    >
                        All Categories
                    </li>
                </ul>
            </div>
            : <></>
            }
            <button
                className={`rounded bg-violet-500 text-zinc-100 p-1 z-30`}
                onClick={toggleDisplayingCategories}
            >
                Show/Hide

            </button>
        </div>
    );
}

export default QuizCategories;