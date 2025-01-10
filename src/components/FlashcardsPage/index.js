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

    // State management for the flashcard deck limit
    const [limit, setLimit] = useState(10);

    // Increment and Decrement functions for limit
    const incrementLimit = () => {
        if (limit < 100) setLimit(limit + 1);
    };
    
    const decrementLimit = () => {
        if (limit > 3) setLimit(limit - 1);
    };

    // Handle input change
    const handleInputChange = (e) => {
        const newLimit = Math.max(3, Math.min(100, parseInt(e.target.value) || 3));
        setLimit(newLimit);
    };

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
                className={quizActive ? "h-5/6"  : "h-1/4"}
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
                {/* Flashcard limit control */}
                {!quizActive && (
                    <div className="mt-6 flex flex-col justify-center items-center">
                        <div>
                            <button
                                onClick={decrementLimit}
                                className="px-3 py-1 bg-zinc-300 text-black rounded-l-md"
                            >
                                -
                            </button>
                            <input
                                type="number"
                                value={limit}
                                onChange={handleInputChange}
                                min="3"
                                max="100"
                                className="w-16 text-center px-2 py-1 border border-zinc-300 rounded-md mx-2"
                            />
                            <button
                                onClick={incrementLimit}
                                className="px-3 py-1 bg-zinc-300 text-black rounded-r-md"
                            >
                                +
                            </button>
                        </div>
                    <p className="text-center">
                        Cards to Quiz
                    </p>
                </div>
                )}
                <FlashcardsDisplay
                    quizActive={quizActive}
                    setQuizActive={setQuizActive}
                    selectedCategories={selectedCategories}
                    setDisplayingCategories={setDisplayingCategories}
                    kanjiStudy={kanjiStudy}
                    limit={limit}
                ></FlashcardsDisplay>
            </div>

        </div>

    )

}

export default FlashcardsPage;