import React, {useState, useEffect} from "react";
import Card from "../Card";
import FlashcardLanguage from "../FlashcardLanguage";
import FlashcardControls from "../FlashcardControls";
import { library } from "../../library";

function FlashcardsDisplay(props) {
    // unpack props
    const {
        quizActive,
        setQuizActive,
        selectedCategories,
        setDisplayingCategories,
        selectedTopics,
        setDisplayingTopics,
        categoryMode,
        kanjiStudy,
        limit
    } = props;

    const [language, setLanguage] = useState("English");

    // click handler for start button
    function handleStartClick() {

        console.log('Active category mode: ', categoryMode);

        // Depending on the category mode selected, check the array length and
        // load cards
        if (categoryMode === 'grammar') {
            if (selectedCategories.length >= 1) {
                setQuizActive(true);
                setDisplayingCategories(false);
                generateCards();
            }
            else {
                console.log("No selected categories");
            }
            
        }
        else if (categoryMode === 'topic') {
            if (selectedTopics.length >= 1) {
                setQuizActive(true);
                setDisplayingTopics(false);
                generateCards();
            }
            else {
                console.log("No selected topics");
            }

        }
    }
    
    
    // State to hold quizzingCards of category that matches selectedCategories, from which
    // random cards will be drawn and displayed onClick of the next button
    const [quizzingCards, setQuizzingCards] = useState([]);
    
    // function that searches library for list of words that fit selectedCategories
    function generateCards() {
        
        let cardLoader = [];
        
        for (let i = 0; i < library.length; i++) {
            
            // Depending on whether the quiz mode is set to grammar or topic, filter for the matching
            // category
            if (categoryMode === 'grammar') {
                if (selectedCategories.includes(library[i].category)) {
                    cardLoader.push({...library[i]});
                }
            }
            else if (categoryMode === "topic") {
                // If even one of the topic tags matches any of the selectedTopics, add it                
                if (library[i].topics?.some(topic => selectedTopics.includes(topic))) {
                    cardLoader.push({ ...library[i] });
                }
            }
        }

        // Shuffle the cardLoader array randomly (Fisher-Yates shuffle)
        for (let i = cardLoader.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Random index
            [cardLoader[i], cardLoader[j]] = [cardLoader[j], cardLoader[i]]; // Swap elements
        }

        const selectedCards = cardLoader.slice(0, limit);

        setQuizzingCards(selectedCards)
        console.log('quizzing from', selectedCards.length, 'cards')
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
                    <FlashcardLanguage
                        language={language}
                        setLanguage={setLanguage}
                    ></FlashcardLanguage>
                    <Card
                        language={language}
                        setLanguage={setLanguage}
                        quizzingCards={quizzingCards}
                        currentCard={currentCard}
                        kanjiStudy={kanjiStudy}
                    ></Card>
                    <FlashcardControls
                        setQuizActive={setQuizActive}
                        setDisplayingCategories={setDisplayingCategories}
                        quizzingCards={quizzingCards}
                        setCurrentCard={setCurrentCard}
                    ></FlashcardControls>
                </div>

                :
                
                <div
                    className="h-1/4"
                >
                    <button
                        onClick={handleStartClick}
                        className={(selectedCategories.length >= 1) | (selectedTopics.length >= 1) ?
                            `rounded p-2 border border-emerald-200 text-lg font-bold text-emerald-200 shadow-lg bg-emerald-500`
                            : `rounded p-2 border text-zinc-400 border-slate-400 text-lg font-bold bg-zinc-300 shadow-lg`
                        }
                    >
                        Start
                    </button>
                </div>
            }

        </div>

    )

}

export default FlashcardsDisplay;