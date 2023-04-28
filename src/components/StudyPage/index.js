import React, {useState, useEffect} from "react";
import FlashcardsPage from "../FlashcardsPage";
import Navbar from "../Navbar";
import QuizPage from "../QuizPage";

function StudyPage(props) {

    const {
        studyType,
        setStudyType
    } = props;

    // Reload when studyType changes
    useEffect(() => {

    }, [studyType, Navbar])

    function handleFlashcardsClick() {
        setStudyType("Flashcards");
    }
    function handleQuizClick() {
        setStudyType("Quiz");
    }

    return (
        <div
            className="h-full w-full flex flex-col items-center justify-center"
        >
            {studyType === "None" && 
                <div className="h-full w-full flex flex-col items-center justify-center">
                    <h2
                        className="mb-8"
                    >
                        Select a Study Activity To Begin
                    </h2>
                    <div className="flex h-1/3 flex-col items-center justify-center">
                        <button
                            className="flex bg-slate-700 mx-1 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/3"
                            onClick={handleFlashcardsClick}
                            >
                            Flashcards
                        </button>
                        <p
                            className="border shadow bg-zinc-100 p-2 my-3 mx-4"
                            >
                            Select from multiple categories of flashcards to study in either English or
                            Japanese.  Tap cards to switch between the English and Japanese translations.
                            Cards will allow you to indicate whether you got
                            the answer right.  Missed answers will show up more frequently.  Correct answers
                            will show up less frequently.
                        </p>
                    </div>
                    <div className="flex h-1/3 flex-col items-center justify-center">
                        <button
                            className="flex bg-slate-700 mx-1 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/3"
                            onClick={handleQuizClick}
                            >
                            Quiz
                        </button>
                        <p
                            className="border shadow bg-zinc-100 p-2 my-3 mx-4"
                        >
                            Quiz yourself on various words from selected categories.  Each word will
                            have multiple choice answers.  Missed answers will show up more frequently.  Correct answers
                            will show up less frequently.
                        </p>
                    </div>
                </div>
            }
            {studyType === "Flashcards" &&
                <div className="h-full w-full flex flex-col items-center justify-center mt-8">
                    <FlashcardsPage></FlashcardsPage>
                </div>
            }   
            {studyType === "Quiz" &&
                <div className="h-full w-full flex flex-col items-center justify-center mt-8">
                    <QuizPage></QuizPage>
                </div>
            }   
            
        </div>
    )
}

export default StudyPage;