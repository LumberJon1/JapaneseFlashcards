import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import StudyPage from './components/StudyPage';
import Library from './components/Library';
import Homepage from './components/Homepage';
import StudyPage from './components/StudyPage';

function App() {

  // Create constants to store props and state for navbar buttons and quiz categories/variables
  // Navbar menu items
  const [menuItems] = useState([
    {
        name: "Library", 
        link: ""
    },
    {
        name: "Study", 
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

  // State variable to control which card categories the user selected to have loaded and randomized
  const [selectedFlashcards, setSelectedFlashcards] = useState([]);
  
  // state object to handle whether the quiz has been started
  const [quizBegun, setQuizBegun] = useState(false);  

  // Conponent return...
  
  return (
    <div 
      className="App w-screen h-screen flex flex-col items-center p-2"
    >
      {/* Navbar and hamburger menu */}
      <Navbar
        className="w-full"
        menuItems={menuItems}
        setCurrMenuItem={setCurrMenuItem}
        currentMenuItem={currentMenuItem}
        setQuizBegun={setQuizBegun}
        buttonWidth={buttonWidth}
      ></Navbar>     
      {currentMenuItem === "Study"
        ? 
          <StudyPage></StudyPage>
        :
          <></>
      }
      {currentMenuItem === "Library"
        ?
          <div className='w-full'>
            <Library className="bg-zinc-50">

            </Library>
          </div>
        :
          <></>
      }
      {currentMenuItem === "Home"
        ?
          <Homepage className="fullBackground">

          </Homepage>
        :
          <></>
      }
    </div>
  );
}

export default App;
