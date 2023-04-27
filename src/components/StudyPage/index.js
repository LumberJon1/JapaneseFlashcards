import React from "react";

function StudyPage() {

    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <h2
                className="mb-8"
            >
                Select a Study Activity To Begin
            </h2>
            <div className="flex h-1/3 flex-col items-center justify-center">
                <button
                    className="flex bg-slate-700 mx-1 items-center justify-center p-2 border rounded shadow text-zinc-100 w-1/3"
                    onClick={console.log("Take client to quiz page")}
                >
                    Flashcards
                </button>
                <p
                    className="border shadow bg-zinc-100 p-2 my-3"
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
                    >
                    Quiz
                </button>
                <p
                    className="border shadow bg-zinc-100 p-2 my-3"
                >
                    Quiz yourself on various words from selected categories.  Each word will
                    have multiple choice answers.  Missed answers will show up more frequently.  Correct answers
                    will show up less frequently.
                </p>
            </div>
        </div>
    )
}

export default StudyPage;