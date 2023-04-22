import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import QuizCategories from './components/QuizCategories';
import Flashcard from './components/Flashcard';
import QuizButtons from './components/QuizButtons';
import Library from './components/Library';
import Homepage from './components/Homepage';

function App() {

  // Create constants to store props and state for navbar buttons and quiz categories/variables
  // Navbar menu items
  const [menuItems] = useState([
    {
        name: "Library", 
        link: ""
    },
    {
        name: "Quiz", 
        link: ""
    },
    {
        name: "Home", 
        link: ""
    }
  ]);

  // Define number to dynamically adjust category button sizes
  const buttonWidth = menuItems.length;

  // Direct vDOM to re-render changes to selected category
  const [currentMenuItem, setCurrMenuItem] = useState(menuItems[2].name);

  // Quiz Categories...
  const [quizCategoryItems] = useState([
      {
          name: "Words", 
          link: ""
        },
        {
          name: "Time", 
          link: ""
        },
        {
          name: "Numbers", 
          link: ""
        },
        {
          name: "Phrases", 
          link: ""
        },
      ]);
    
  // Quiz Subcategories
  // Define the lists of possible subcategories and UI buttons to conditionally render
  const [wordsSubCategories] = useState([
    {
      name: "Verbs"
    },
    {
      name: "-i Adjectives"
    },
    {
      name: "-na Adjectives"
    },
    {
      name: "Nouns"
    },
    {
      name: "Body Parts"
    },
    {
      name: "All Words"
    },
  ]);
  
  const [timeSubCategories] = useState([
    {
      name: "All Times"
    }
  ]);
  
  const [numbersSubCategories] = useState([
    {
      name: "Ones"
    },
    {
      name: "Tens"
    },
    {
      name: "Hundreds"
    },
    {
      name: "Thousands"
    },
    {
      name: "Ten-thousands"
    }    
  ]);
  
  const [phrasesSubCategories] = useState([
    {
      name: "All Phrases"
    }   
  ]);

  // State variable to control which card categories the user selected to have loaded and randomized
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);
  
    
  // Function handler for category items being clicked
  const [currentQuizCategory, setQuizCategory] = useState(quizCategoryItems[0].name);
  
  // State variable for setting the array of subcategories
  const [currentSubCategory, setSubCategory] = useState(wordsSubCategories[0].name);
  
  // state object to handle whether the quiz has been started
  const [quizBegun, setQuizBegun] = useState(false);  
  
  useEffect(() => {

  }, [currentSubCategory]);

  // Conponent return...
  
  return (
    <div className="App w-screen h-screen flex flex-col items-center p-2"
    // style={{
    //   backgroundImage: `url(${bgImage})`
    //   backgroundSize: `cover`
    //   }}
    >
      {/* Navbar and hamburger menu */}
      <Navbar
        className="w-full"
        menuItems={menuItems}
        setCurrMenuItem={setCurrMenuItem}
        currentMenuItem={currentMenuItem}
        setQuizBegun={setQuizBegun}
        buttonWidth={buttonWidth}
        // onClick={() => {
        //     setQuizBegun(false);
        //   }
        // }
      ></Navbar>
      {/* Flashcard Categories */}

      {/* Conditionally render either quiz buttons or flashcards depending on whether
      the user has selected a subcategory and pressed "start" yet */}

      {quizBegun 
        ? <Flashcard
            className="h-full bg-zinc-50"
            currentMenuItem={currentMenuItem}
            currentQuizCategory={currentQuizCategory}
            selectedFlashcards={selectedFlashcards}
          ></Flashcard>      
        
        : 
        
          <>      
            {currentMenuItem === "Quiz" ? 
            <div>
              <QuizCategories
                className="bg-zinc-50"
                quizCategoryItems={quizCategoryItems}
                setQuizCategory={setQuizCategory}
                currentQuizCategory={currentQuizCategory}
                currentSubCategory={currentSubCategory}
                setSubCategory={setSubCategory}
                setQuizBegun={setQuizBegun}
                ></QuizCategories>
              <QuizButtons
                className="bg-zinc-50"
                  currentQuizCategory={currentQuizCategory}
                  quizBegun={quizBegun}
                  setQuizBegun={setQuizBegun}
                  currentSubCategory={currentSubCategory}
                  setQuizCategory={setQuizCategory}
                  setSubCategory={setSubCategory}
                  wordsSubCategories={wordsSubCategories}
                  timeSubCategories={timeSubCategories}
                  numbersSubCategories={numbersSubCategories}
                  phrasesSubCategories={phrasesSubCategories}
                  setSelectedFlashcards={setSelectedFlashcards}
                  selectedFlashcards={selectedFlashcards}
                ></QuizButtons>
            </div>
          : <></>
          }
          {currentMenuItem === "Library" ?

            <div>
              <Library className="bg-zinc-50">

              </Library>
            </div>
            : <></>

          }
          {currentMenuItem === "Home" ?
          
            <Homepage className="fullBackground">

            </Homepage>
          :
          
            <></>
          }
          </>
      }
    </div>
  );
}

export default App;
