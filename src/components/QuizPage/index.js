import React, {useEffect, useState} from "react";
import { library } from "../../library";
import QuizDisplay from "../QuizDisplay";
import QuizCategories from "../QuizCategories";

function QuizPage() {

    // State management for FlashcardCategories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Separate loop to gather unique categories and map through them to display as buttons
    let availableCategories = [];
    for (let i = 0; i < library.length; i++) {
        if (!availableCategories.includes(library[i].category)) {
            availableCategories.push(library[i].category);
        }
    }

    // State management for shown/hidden quiz length selectors
    const [quizNumWords, setQuizNumWords] = useState(5);
    const [quizNumShown, setQuizNumShown] = useState(false);

    // State management for ongoing quiz
    const [quizActive, setQuizActive] = useState(false);

    function hideNumSelector() {
        setQuizNumShown(false);
    }
    
    function showNumSelector() {
        setQuizNumShown(true);
    }

    function categorySelectedListener() {
        if (selectedCategories.length > 0) {
            showNumSelector();
        }
        else {
            hideNumSelector();
        }
    }

    useEffect(() => {
        categorySelectedListener();
    }, [selectedCategories]);


    return (
        <div
            className="h-full flex flex-col items-center"
        >
            <p
                className="h-1/6 flex flex-col items-center justify-center"
            >
                Select One or More Categories Below to Quiz
            </p>
            {quizActive ? 
                <QuizDisplay></QuizDisplay>
            : 
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <QuizCategories
                        className="h-1/3"
                        availableCategories={availableCategories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    ></QuizCategories>

                    <div>

                        {quizNumShown && 

                            <div className="w-full flex flex-col items-center">
                                <p
                                    className="text-lg font-semibold text-center mt-12"
                                >
                                    Choose Number of Words to Quiz
                                </p>
                            
                                <form
                                    className="flex items-center justify-center my-8"
                                >

                                    <button
                                        className="rounded-lg shadow shadow-lg text-lg font-bold p-2"
                                    >
                                        {`<`}
                                    </button>
                                    <input
                                        type="number"
                                        defaultValue={5}
                                        className="border rounded-lg p-2 text-center mx-3 w-1/4"
                                    />
                                    <button
                                        className="rounded-lg shadow shadow-lg text-lg font-bold p-2"
                                    >
                                        {`>`}
                                    </button>


                                </form>
                                <button
                                    className="rounded p-2 bg-emerald-400 shadow-lg mt-3 font-bold text-lg text-zinc-200 w-1/3"
                                >
                                    Begin
                                </button>
                            </div>
                        }        
                    </div>
                </div>
            }
        </div>
    )

}

export default QuizPage;