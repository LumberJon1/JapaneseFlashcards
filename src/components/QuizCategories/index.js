import React from "react";
import { v4 as uuidv4 } from 'uuid';

function QuizCategories(props) {
    
    // Unpack props
    const {
        availableCategories,
        displayingCategories,
        setDisplayingCategories
    } = props;

    // Handler for onClick event for each category
    
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
                            className="border rounded p-1 m-2"
                            key={uuidv4()}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className="border rounded p-1 m-2"
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