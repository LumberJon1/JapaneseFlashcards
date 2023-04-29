import React from "react";

function QuizCard(props) {

    // unpack props
    const {
        language,
        currentCard
    } = props;

    // show answer handler to show correct answer and highlight styles
    function showAnswer() {
        console.log("Showing answer...");
    }

    console.log("currentCard within QuizCard: "+currentCard.englishText);


    return (

        <div
            className="border border-slate-400 shadow-lg rounded-lg h-1/3 w-3/4 bg-slate-100 mt-10"
        >
            <div
                className="h-full w-full flex flex-col items-center justify-center"
            >
                {language === "English" ?
                    <p
                        className="flex flex-col items-center justify-center h-full w-full text-xl font-bold"
                    >
                        {currentCard.englishText}
                    </p>
                :
                    <div
                        className="flex flex-col items-center justify-center h-full w-full text-xl font-bold"
                    >
                        <p
                            className="my-3"
                        >
                            {currentCard.kanjiText}
                        </p>
                        <p
                            className="my-3"
                        >
                            {currentCard.kanaText}
                        </p>
                        <p
                            className="my-3"
                        >
                            {currentCard.romaji}
                        </p>
                    </div>
                }
            </div>
        </div>

    )

}

export default QuizCard;