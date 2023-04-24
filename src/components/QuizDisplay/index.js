import React, {useState} from "react";
import Card from "../Card";
import QuizLanguage from "../QuizLanguage";
import QuizControls from "../QuizControls";
import { library } from "../../library";

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
            generateCards();
        }
        else {
            console.log("No selected categories");
        }
    }

    // State to hold quizzingCards of category that matches selectedCategories, from which
    // random cards will be drawn and displayed onClick of the next button
    const [quizzingCards, setQuizzingCards] = useState([]);

    // function that searches library for list of words that fit selectedCategories
    function generateCards() {

        let cardLoader = [];

        for (let i = 0; i < library.length; i++) {
            console.log(library[i]);
            if (selectedCategories.includes(library[i].category)) {
                console.log("Including "+library[i]);
                cardLoader.push(library[i]);
            }
        }

        // Load cards into the quizzingCards state
        setQuizzingCards(cardLoader);
        console.log("\n\nQuizzing cards: "+quizzingCards);
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
                    <Card
                        language={language}
                        setLanguage={setLanguage}
                        quizzingCards={quizzingCards}
                    ></Card>
                    <QuizControls
                        setQuizActive={setQuizActive}
                        setDisplayingCategories={setDisplayingCategories}
                        quizzingCards={quizzingCards}
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