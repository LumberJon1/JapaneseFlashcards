import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import QuizCategories from './components/QuizCategories';
import Flashcard from './components/Flashcard';
import QuizButtons from './components/QuizButtons';

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
const [currentMenuItem, setCurrMenuItem] = useState(menuItems[0]);

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
    },
    {
      name: "Counters (General)"
    },
    {
      name: "Counters (People)"
    },
    
  ]);
  
  const [phrasesSubCategories] = useState([
    {
      name: "All Phrases"
    }   
  ]);
  
  // State variable for setting the array of subcategories
  const [currentSubCategory, setSubCategory] = useState(wordsSubCategories);
  
  
  // Function handler for category items being clicked
  const [currentQuizCategory, setQuizCategory] = useState("");
  
  // state object to handle whether the quiz has been started
  const [quizBegun, setQuizBegun] = useState(false);
  
  
  useEffect(() => {
    document.getElementById("root").render();
  }, [currentSubCategory]);


  // Conponent return...
  
  return (
    <div className="App w-screen h-screen flex flex-col items-center p-2">
      {/* Navbar and hamburger menu */}
      <Navbar
        className="w-full"
        menuItems={menuItems}
        setCurrMenuItem={setCurrMenuItem}
        currentMenuItem={currentMenuItem}
        buttonWidth={buttonWidth}
      ></Navbar>

      {/* Flashcard Categories */}
      <QuizCategories
        quizCategoryItems={quizCategoryItems}
        setQuizCategory={setQuizCategory}
        currentQuizCategory={currentQuizCategory}
        currentSubCategory={currentSubCategory}
        setSubCategory={setSubCategory}
        wordsSubCategories={wordsSubCategories}
        timeSubCategories={timeSubCategories}
        numbersSubCategories={numbersSubCategories}
        phrasesSubCategories={phrasesSubCategories}
      ></QuizCategories>

      {/* Conditionally render either quiz buttons or flashcards depending on whether
      the user has selected a subcategory and pressed "start" yet */}

      {quizBegun 
        ? <Flashcard
            currentMenuItem={currentMenuItem}
            currentQuizCategory={currentQuizCategory}
          ></Flashcard>      
        : <QuizButtons
            currentQuizCategory={currentQuizCategory}
            quizBegun={quizBegun}
            setQuizBegun={setQuizBegun}
            currentSubCategory={currentSubCategory}
            setQuizCategory={setQuizCategory}
            setSubCategory={setSubCategory}
          ></QuizButtons>
      }

    </div>
  );
}

export default App;
