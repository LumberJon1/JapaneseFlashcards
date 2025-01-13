import React from "react";
import { v4 as uuidv4 } from 'uuid';

function TopicCategories(props) {
    
    // Unpack props
    const {
        availableTopics = [],
        selectedTopics,
        setSelectedTopics
    } = props;

    
    // Handler for onClick event for each category
    function toggleSelectCategory(e) {
        let localTopics = [...selectedTopics];

        if (localTopics.includes(e.target.innerText)) {
            console.log(e.target.innerText+" already in selected Topics.  Removing...");
            localTopics.splice(localTopics.indexOf(e.target.innerText), 1);
            console.log("Now contains "+localTopics);
        }

        // Cases where user clicks "All Topics"
        else if (e.target.innerText === "All Topics") {
            console.log("\nlocalTopics: "+localTopics);
            console.log("length: "+localTopics.length);
            console.log("\navailableTopics: "+availableTopics);
            console.log("length: "+availableTopics.length);
            
            if (localTopics.length === availableTopics.length) {
                console.log("All Topics already selected.  Resetting selected Topics...");
                localTopics = [];
                console.log("Now contains "+localTopics);
            }
            else {
                console.log("Changing current selection to be all Topics...");

                for (let i = 0; i < availableTopics.length; i++) {
                    if (!localTopics.includes(availableTopics[i])) {
                        localTopics.push(availableTopics[i]);
                    }
                }
                console.log("Now contains "+localTopics);
            }
        }

        else {
            console.log(e.target.innerText+" not already in array.  Pushing value...");
            localTopics.push(e.target.innerText);
            console.log("Now contains "+localTopics);
        }
        setSelectedTopics(localTopics);
    }


    // Log props and availableTopics for debugging
    console.log("Props:", props);
    console.log("Available Topics:", availableTopics);

    return (

        <div
            className="w-full h-full border-gray-500 bg-slate-200 flex flex-col items-center justify-evenly z-20"
            
                
        >
            <div
                className="flex flex-col justify-evenly h-full"
            >

                <p
                    className="h-1/3 mb-12 flex clex-col items-center justify-center text-2xl font-semibold rounded-lg p-3 bg-indigo-200"
                >
                    Flashcard Topics
                </p>
                
                <ul
                    className="flex flex-wrap items-center justify-center h-1/2"
                >
                    {availableTopics.map((item) => (

                        <li
                            className={`border-slate-800 rounded bg-slate-700 text-zinc-100 p-1 m-2 ${selectedTopics.includes(item) && "bg-blue-400 border-cyan-300"}`}
                            key={uuidv4()}
                            onClick={toggleSelectCategory}
                        >
                            {item}
                        </li>
                    ))}
                    <li
                        className={`border-slate-800 rounded bg-slate-700 text-zinc-100 p-1 m-2 ${selectedTopics.includes("All Topics") && "bg-blue-400 border-cyan-300"}`}
                        onClick={toggleSelectCategory}
                    >
                        All Topics
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TopicCategories;