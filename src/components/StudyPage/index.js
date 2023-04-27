import React from "react";

function StudyPage() {

    return (
        <div>
            <div>
                <button
                    className=""
                    onClick={console.log("Take client to quiz page")}
                >
                    Flashcards
                </button>
                <p>
                    Description of the Flashcards study page
                </p>
            </div>
            <div>
                <button
                    className=""
                    >
                    Quiz
                </button>
                <p>
                    Description of the Quiz study page
                </p>
            </div>
        </div>
    )
}

export default StudyPage;