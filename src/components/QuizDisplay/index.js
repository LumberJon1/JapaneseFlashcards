import React, {useState, useEffect} from "react";
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
            
            if (selectedCategories.includes(library[i].category)) {
                cardLoader.push({...library[i]});
            }
        }
        
        // CardLoader:
        for (let i = 0; i < cardLoader.length; i++) {
            setQuizzingCards([
                ...quizzingCards,
                cardLoader[i]
            ])
        }
    
        const updatedQuizzingCards = [...quizzingCards, ...cardLoader];
        setQuizzingCards(updatedQuizzingCards);
    }
    
    // State to hold the currently chosen card that will be displayed in component
    const [currentCard, setCurrentCard] = useState();

    // Function to call and assign setCurrent card to random index
    function chooseCurrentCard() {
        let randomCardIndex = Math.floor(Math.random() * quizzingCards.length);
        setCurrentCard({...quizzingCards[randomCardIndex]});
    }
    
    // useEffect hook to update currentCard whenever quizzingCards changes
    useEffect(() => {
        chooseCurrentCard();
    }, [quizzingCards]);



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
                        currentCard={currentCard}
                    ></Card>
                    <QuizControls
                        setQuizActive={setQuizActive}
                        setDisplayingCategories={setDisplayingCategories}
                        quizzingCards={quizzingCards}
                        setCurrentCard={setCurrentCard}
                    ></QuizControls>
                </div>

                :
                
                <div
                    className="h-full"
                >
                    <p
                        className="mt-12 text-lg"
                    >
                        Select Categories to Include in Flashcard Study
                    </p>
                    <button
                        onClick={handleStartClick}
                        className={selectedCategories.length >= 1 ?
                            `rounded mt-24 p-2 border border-emerald-200 text-lg font-bold text-emerald-200 shadow-lg bg-emerald-500`
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