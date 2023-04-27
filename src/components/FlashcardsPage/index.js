import React, {useState} from "react";
import library from "../../library";
import FlashcardCategories from "../FlashcardCategories";
import FlashcardsDisplay from "../FlashcardsDisplay";

function FlashcardsPage() {

    // State management for FlashcardCategories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Separate loop to gather unique categories and map through them to display as buttons
    let availableCategories = [];
    for (let i = 0; i < library.library.length; i++) {
        if (!availableCategories.includes(library.library[i].category)) {
            availableCategories.push(library.library[i].category);
        }
    }

    // State management for shown/hidden categories
    const [displayingCategories, setDisplayingCategories] = useState(true);

    // State management for ongoing quiz
    const [quizActive, setQuizActive] = useState(false);

    return (

        <div
            className="w-full h-full"
        >
            {!quizActive ?
                <div
                    className="h-1/2"
                >
                    <FlashcardCategories
                        availableCategories={availableCategories}
                        displayingCategories={displayingCategories}
                        setDisplayingCategories={setDisplayingCategories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    ></FlashcardCategories>
                </div>
            : <></>    
        }
            <div
                className={quizActive ? "h-5/6"  : "h-1/2"}
            >
                <FlashcardsDisplay
                    quizActive={quizActive}
                    setQuizActive={setQuizActive}
                    selectedCategories={selectedCategories}
                    setDisplayingCategories={setDisplayingCategories}
                ></FlashcardsDisplay>
            </div>

        </div>

    )

}

export default FlashcardsPage;