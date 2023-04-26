import React, {useState} from "react";

function Card(props) {

    // unpack props
    const {
        language,
        setLanguage,
        quizzingCards,
        currentCard
    } = props;

    // flip card handler to swap between English and Japanese translations
    function flipCard() {
        if (language === "Japanese") {
            setLanguage("English");
        }
        else {
            setLanguage("Japanese");
        }
    }


    return (

        <div
            className="border border-slate-400 shadow-lg rounded-lg h-3/5 bg-slate-100 mx-4"
            onClick={flipCard}
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

export default Card;