import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import QuizCategories from './components/QuizCategories';
import Flashcard from './components/Flashcard';

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
useEffect(() => {

}, [currentMenuItem]);

  // Quiz Categories...
  const quizCategoryItems = [
    {
        name: "Words", 
        link: ""
    },
    {
        name: "Time", 
        link: ""
    },
    {
        name: "Phrases", 
        link: ""
    }
];

// Function handler for category items being clicked
const [currentQuizCategory, setQuizCategory] = useState("");


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
      ></QuizCategories>

      {/* Flashcard */}
      <Flashcard
        currentMenuItem={currentMenuItem}
        currentQuizCategory={currentQuizCategory}
      ></Flashcard>
      {/* Bottom Buttons */}
    </div>
  );
}

export default App;
