import React, {useState} from "react";

function Card(props) {

    // unpack props
    const {
        language,
        setLanguage,
        quizzingCards
    } = props;

    // flip card handler to swap between English and Japanese translations
    function flipCard() {
        if (language === "Japanese") {
            setLanguage("English");
        }
        else {
            setLanguage("Japanese");
        }
        console.log("Flipped to "+language+" translation");
    }

    return (

        <div
            className="border border-slate-900 shadow-lg rounded-lg h-3/5 bg-slate-200 mx-4"
            onClick={flipCard}
        >
            <div
                className="h-full w-full flex flex-col items-center justify-center"
            >
                {language === "English" ?
                    <p
                        className="flex flex-col items-center justify-center h-full w-full text-xl font-bold"
                    >
                        English Word
                    </p>
                :
                    <div
                        className="flex flex-col items-center justify-center h-full w-full text-xl font-bold"
                    >
                        <p
                            className="my-3"
                        >
                            Kanji
                        </p>
                        <p
                            className="my-3"
                        >
                            Hiragana
                        </p>
                        <p
                            className="my-3"
                        >
                            Romaji
                        </p>
                    </div>
                }
            </div>
        </div>

    )

}

export default Card;