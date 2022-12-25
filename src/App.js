import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import QuizCategories from './components/QuizCategories';
import Flashcard from './components/Flashcard';

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col items-center p-2">
      {/* Navbar and hamburger menu */}
      <Navbar className="w-full"></Navbar>
      {/* Flashcard Categories */}
      <QuizCategories></QuizCategories>
      {/* Flashcard */}
      <Flashcard></Flashcard>
      {/* Bottom Buttons */}
    </div>
  );
}

export default App;
