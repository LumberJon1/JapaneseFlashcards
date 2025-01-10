import React, {useState} from "react";
import VerbCard from "../VerbCard";

function Card(props) {

    // unpack props
    const {
        language,
        setLanguage,
        quizzingCards,
        currentCard,
        kanjiStudy
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
        <div className="h-full w-full flex flex-col items-center justify-center">
            {currentCard.category === "Verbs" ? (
                <VerbCard language={language} currentCard={currentCard} />
            ) : (
                <>
                    {language === "English" ? (
                kanjiStudy ? (
                    // English mode with kanjiStudy enabled
                    <div className="flex flex-col items-center justify-center h-full w-full text-3xl font-bold">
                        <p className="my-3 font-noto">{currentCard.kanaText}</p>
                        <p className="my-3">{currentCard.englishText}</p>
                        {/* Optionally display other elements if necessary */}
                    </div>
                ) : (
                    // English mode with kanjiStudy disabled
                    <p className="flex flex-col items-center justify-center h-full w-full text-3xl font-semibold">
                        {currentCard.englishText}
                    </p>
                )
            ) : (
                kanjiStudy ? (
                    // Non-English mode with kanjiStudy enabled
                    <div className="flex font-noto flex-col items-center justify-center h-full w-full text-6xl font-bold">
                        <p className="my-3">{currentCard.kanjiText}</p>
                    </div>
                ) : (
                    // Non-English mode with kanjiStudy disabled
                    <div className="flex font-noto flex-col items-center justify-center h-full w-full text-3xl font-bold">
                        <p className="my-3">{currentCard.kanjiText}</p>
                        <p className="my-3">{currentCard.kanaText}</p>
                        <p className="my-3">{currentCard.romaji}</p>
                    </div>
                )
            )}
                </>
            )}
        </div>
    </div>
    );

}

export default Card;