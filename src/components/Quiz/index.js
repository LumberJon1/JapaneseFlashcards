import React, {useState} from "react";
import library from "../../library";
import QuizCategories from "../QuizCategories";
import QuizLanguage from "../QuizLanguage";
import QuizDisplay from "../QuizDisplay";

function Quiz() {

    const [language, setLanguage] = useState("English");

    // State management for quizCategories
    const [categories, setCategories] = useState([]);

    // Separate loop to gather unique categories and map through them to display as buttons
    let availableCategories = [];
    for (let i = 0; i < library.library.length; i++) {
        if (!availableCategories.includes(library.library[i].category)) {
            availableCategories.push(library.library[i].category);
        }
    }

    // State management for shown/hidden categories
    const [displayingCategories, setDisplayingCategories] = useState(true);

    return (

        <div
            className="w-full h-full bg-indigo-400"
        >
            <div
                className="h-1/4"
            >
                <QuizCategories
                    availableCategories={availableCategories}
                    displayingCategories={displayingCategories}
                    setDisplayingCategories={setDisplayingCategories}
                ></QuizCategories>
                <QuizLanguage
                    language={language}
                    setLanguage={setLanguage}
                ></QuizLanguage>
            </div>
            <div
                className="h-3/4"
            >
                <QuizDisplay></QuizDisplay>
            </div>

        </div>

    )

}

export default Quiz;