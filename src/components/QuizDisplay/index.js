import React, {useState} from "react";
import Card from "../Card";
import QuizLanguage from "../QuizLanguage";
import QuizControls from "../QuizControls";

function QuizDisplay(props) {
    // unpack props
    const {
        quizActive,
        setQuizActive,
        selectedCategories,
        setDisplayingCategories
    } = props;

    const [language, setLanguage] = useState("English");

    // click handler for start button
    function handleStartClick() {
        if (selectedCategories.length >= 1) {
            setQuizActive(true);
            setDisplayingCategories(false);
        }
        else {
            console.log("No selected categories");
        }
    }


    return (

        <div
            className="h-full flex flex-col items-center justify-center"
        >
            {quizActive ? 
            
                <div
                    className="h-full w-full"
                >
                    <QuizLanguage
                        language={language}
                        setLanguage={setLanguage}
                    ></QuizLanguage>
                    <Card></Card>
                    <QuizControls
                        setQuizActive={setQuizActive}
                        setDisplayingCategories={setDisplayingCategories}
                    ></QuizControls>
                </div>

                :
                
                <div
                    className="h-full"
                >
                    <p
                        className="mt-12 text-lg"
                    >
                        Select Categories to Quiz
                    </p>
                    <button
                        onClick={handleStartClick}
                        className={selectedCategories.length >= 1 ?
                            `rounded mt-24 p-2 border border-slate-800 text-lg font-bold bg-emerald-500 shadow-lg`
                            : `rounded mt-24 p-2 border text-zinc-400 border-slate-400 text-lg font-bold bg-zinc-300 shadow-lg`
                        }
                    >
                        Start
                    </button>
                </div>
            }

        </div>

    )

}

export default QuizDisplay;