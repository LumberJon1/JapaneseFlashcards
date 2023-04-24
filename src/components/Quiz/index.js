import React, {useState} from "react";
import QuizCategories from "../QuizCategories";
import QuizLanguage from "../QuizLanguage";
import QuizDisplay from "../QuizDisplay";

function Quiz() {

    const [language, setLanguage] = useState("English");

    return (

        <div
            className=""
        >
            <QuizCategories></QuizCategories>
            <QuizLanguage
                language={language}
                setLanguage={setLanguage}
            ></QuizLanguage>
            <QuizDisplay></QuizDisplay>

        </div>

    )

}

export default Quiz;