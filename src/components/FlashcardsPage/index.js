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

    // State management for kanji study mode (defaults to false)
    const [kanjiStudy, setKanjiStudy] = useState(false);

    return (

        <div
            className="w-full h-full"
        >
            {!quizActive ?
                <div
                    className="h-1/2"
                >
                    <FlashcardCategories
                        className='h-3/4'
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
                <button
                    onClick={() => setKanjiStudy(!kanjiStudy)}
                    className={`mt-4 px-4 py-2 rounded ${
                        kanjiStudy
                            ? "bg-blue-500 text-white" // Active state
                            : "bg-zinc-300 text-white" // Default state
                    }`}
                >
                    Kanji Only
                </button>
                <FlashcardsDisplay
                    quizActive={quizActive}
                    setQuizActive={setQuizActive}
                    selectedCategories={selectedCategories}
                    setDisplayingCategories={setDisplayingCategories}
                    kanjiStudy={kanjiStudy}
                ></FlashcardsDisplay>
            </div>

        </div>

    )

}

export default FlashcardsPage;