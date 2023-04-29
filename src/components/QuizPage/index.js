import React, {useEffect, useState} from "react";
import { library } from "../../library";
import QuizDisplay from "../QuizDisplay";
import QuizCategories from "../QuizCategories";

function QuizPage() {

    // State management for FlashcardCategories
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Separate loop to gather unique categories and map through them to display as buttons
    let availableCategories = [];
    for (let i = 0; i < library.length; i++) {
        if (!availableCategories.includes(library[i].category)) {
            availableCategories.push(library[i].category);
        }
    }

    // Language selection, defaults to Japanese
    const [language, setLanguage] = useState("Japanese");

    // State management for shown/hidden quiz length selectors
    const [quizNumWords, setQuizNumWords] = useState(5);
    const [quizNumShown, setQuizNumShown] = useState(false);

    // State management for ongoing quiz
    const [quizActive, setQuizActive] = useState(false);

    function hideNumSelector() {
        setQuizNumShown(false);
    }
    
    function showNumSelector() {
        setQuizNumShown(true);
    }

    function categorySelectedListener() {
        if (selectedCategories.length > 0) {
            showNumSelector();
        }
        else {
            hideNumSelector();
        }
    }

    function handleQuizNumIncrease() {
        // Validate for upper bound of category length
        let totalWords = 0;
        for (let i = 0; i < selectedCategories.length; i++) {

            for (let j = 0; j < library.length; j++) {
                let category = selectedCategories[i];
                if (library[j].category === (category)) {
                    totalWords += 1;
                }
            }
        }

        console.log("Total words: "+totalWords);

        if (quizNumWords < totalWords) {
            setQuizNumWords(quizNumWords + 1);
        }
    }
    
    function handleQuizNumDecrease() {
        // Validate for lower bound of 5
        if (quizNumWords > 5) {
            setQuizNumWords(quizNumWords - 1);
        }
    }
    
    // Handler for user controlling input
    function handleNumChange(e) {        
        if (e.target.innerText === ">") {
            console.log("Clicked increase.");
            handleQuizNumIncrease();
            
        }
        else if (e.target.innerText === "<") {
            console.log("Clicked decrease.");
            handleQuizNumDecrease();
        }
        else {
            setQuizNumWords(Number(e.target.value));
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        setQuizNumWords(quizNumWords);
    }
    
    useEffect(() => {
        categorySelectedListener();
    }, [selectedCategories]);
    
    useEffect(() => {
        
    }, [quizNumWords]);

    // Take quiz categories and generate a bank of selected words
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
        console.log("Current card: "+{...currentCard});
        chooseCurrentCard();
    }, [quizzingCards]);

    function handleQuizStart() {
        generateCards();
        // chooseCurrentCard();
        setQuizActive(true);
    }


    return (
        <div
            className="h-full flex w-full flex-col items-center"
        >
            {!quizActive && 
                <p
                    className="h-1/6 flex flex-col items-center justify-center"
                >
                    Select One or More Categories Below to Quiz
                </p>
            }
            {quizActive ? 
                <QuizDisplay
                    quizzingCards={quizzingCards}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                    language={language}
                >

                </QuizDisplay>
            : 
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <QuizCategories
                        className="h-1/3"
                        availableCategories={availableCategories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    ></QuizCategories>

                    <div>

                        {quizNumShown && 

                            <div className="w-full flex flex-col items-center">
                                <p
                                    className="text-lg font-semibold text-center mt-12"
                                >
                                    Choose Number of Words to Quiz
                                </p>
                            
                                <form
                                    className="flex flex-col items-center justify-center my-8"
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="rounded-lg bg-zinc-100 shadow shadow-lg text-lg font-bold p-2"
                                            onClick={handleNumChange}
                                        >
                                            {`<`}
                                        </button>
                                        <input
                                            type="number"
                                            value={quizNumWords}
                                            onChange={handleNumChange}
                                            className="border rounded-lg p-2 text-center mx-3 w-1/4"
                                        />
                                        <button
                                            className="rounded-lg bg-zinc-100 shadow shadow-lg text-lg font-bold p-2"
                                            onClick={handleNumChange}
                                        >
                                            {`>`}
                                        </button>
                                    </div>
                                    <button
                                        className="rounded p-2 mt-10 bg-emerald-400 shadow-lg mt-3 font-bold text-lg text-zinc-200 w-1/3"
                                        onClick={handleQuizStart}
                                        type="submit"
                                    >
                                        Begin
                                    </button>
                                </form>
                            </div>
                        }        
                    </div>
                </div>
            }
        </div>
    )

}

export default QuizPage;